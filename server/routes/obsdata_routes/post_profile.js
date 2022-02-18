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

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/post/profile", async (req, res, next) => {
    req.body = JSONStringstoLower(req.body)
    let messages = [];
    let warnings = [];
    try {
      const isDuplicate = await isDuplicateRequest(req, obs_db.StoredRequests);

      if (isDuplicate) {
        warnings.push("WARNING: Duplicate request, try again later!");
      } else {
        let validateRequest = await validateAllSchemas(req);
        messages.push(validateRequest.messages);
        warnings.push(validateRequest.warnings);
      }
      res.json({warnings: warnings, messages: messages});
    } catch (err) {
      console.log(err);
      res.sendStatus(499).json([messages, err]);
    }
  });
};
