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

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
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
              output.messages.push(c.warnings);
            }
          }
          output.messages.push(reference.messages);
          output.warnings.push(reference.warnings);
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
