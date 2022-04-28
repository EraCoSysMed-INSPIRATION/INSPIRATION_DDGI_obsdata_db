/** 
    Adds routes for all models in the database where all data in the respective tables can be accessed.
    TODO: Restrict access
**/

const { authJwt } = require("../../middleware");
const JSONStringstoLower = require("../../middleware/json_to_lower");
const controller = require("../../controllers/user_controller");
const obs_db = require("../../models/obsdata");
const validateAllSchemas = require("../../validation");
const isDuplicateRequest = require("../../validation/check_duplicate");
const mapper = require("../../validation/mapper.json");
const createReferenceIfNotExists = require("../../middleware/create_reference");
const createCompoundsIfNotExists = require("../../middleware/create_compound");
const createAdministrationProtocols = require("../../middleware/create_administration_protocol");
const createDemographics = require("../../middleware/create_demographics");
const createGenetics = require("../../middleware/create_genetics");
const createNCAValues = require("../../middleware/create_nca_values");
const createObservations = require("../../middleware/create_observation");
const createProfile = require("../../middleware/create_profile");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    next();
  });
  app.post("/post/profile", async (req, res, next) => {
    req.body = JSONStringstoLower(req.body);
    let output = { warnings: [], messages: [] };
    try {
      const isDuplicate = await isDuplicateRequest(req, obs_db.StoredRequests);

      if (isDuplicate) {
        output.warnings.push("Duplicate request, try again later!");
      } else {
        let validateRequest = await validateAllSchemas(req);
        if (validateRequest.warnings.length !== 0)
          output.warnings.push(validateRequest.warnings);

        // Lookup if profile-analyte and administered compounds are in compounds
        for (a of req.body.drug_administrations) {
          let name_match = req.body.compounds_and_analytes.find(obj => obj.name === a.administered_compound) 
          let alias_match = req.body.compounds_and_analytes.find(obj => obj.alias === a.administered_compound) 
          if (name_match === undefined && alias_match === undefined) {
            output.warnings.push(`Administered compound '${a.administered_compound}' not defined in compounds_and_analytes`)
          }
        }
        
        // let name_match_analyte = req.body.compounds_and_analytes.find(obj => obj.name === )
      }
      if (!output.warnings.length > 0) {
        try {
          let reference = await createReferenceIfNotExists(
            obs_db,
            mapper,
            req.body
          );
          let compounds = await createCompoundsIfNotExists(
            obs_db,
            mapper,
            req.body
          );
          for (c of compounds) {
            output.messages.push(c.messages);
            if (c.warnings.length > 0) {
              output.warnings.push(c.warnings.length);
            }
          }
          output.messages.push(reference.messages);
          if (reference.warnings.length > 0) {
            output.warnings.push(reference.warnings.length)
          }

          let administration_protocols = await createAdministrationProtocols(
            obs_db,
            req.body
          );
          for (c of administration_protocols) {
            output.messages.push(c.messages);
          }
          if (req.body.demographics !== null) {
            let demographics = await createDemographics(obs_db, req.body);
            for (c of demographics) {
              output.messages.push(c.messages);
            }
          }
          if (req.body.genetic_info !== null) {
            let genetics = await createGenetics(obs_db, req.body);
            for (c of genetics) {
              output.messages.push(c.messages);
            }
          }
          if (req.body.nca_values !== null) {
            let nca_values = await createNCAValues(obs_db, req.body);
            for (c of nca_values) {
              output.messages.push(c.messages);
            }
          }
          if (req.body.interaction_ratios !== null) {
            let interaction_ratios = await createInteractionRatios(
              obs_db,
              req.body
            );
            for (c of interaction_ratios) {
              output.messages.push(c.messages);
            }
          }
          if (req.body.observations !== null) {
            let observations = await createObservations(obs_db, req.body);
            output.messages.push(observations.messages);
          }

          let profile = await createProfile(obs_db, req.body);
          output.messages.push(profile.messages);

          // save profile if there are no warnings
          if (!output.warnings.length > 0) {
            let profile_saved = await profile.profile.save();

            // check if reference is new or not, extract id
            if (reference.is_new) {
              let reference_saved = await reference.model.save();
              ref_id = reference_saved.id;
            } else {
              ref_id = reference.model.id;
            }
            // update reference foreign key in profile
            await profile_saved.update(
              { reference_id: ref_id },
              {
                where: {
                  id: profile_saved.id,
                },
              }
            );
            // save compounds if new
            for (c of compounds) {
              if (c.is_new) {
                let c_saved = await c.model.save()
                c.compound_mw.compound_id = c_saved.id 
                await c.compound_mw.save() 
              }
            }
            
            
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        output.warnings = [
          "WARNING: Your request was rejected because of the following warnings: ",
          output.warnings,
        ];
      }
      res.json(output);
    } catch (err) {
      console.log(err);
      res.sendStatus(499);
    }
  });
};
