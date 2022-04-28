/** 
    Adds routes for all models in the database where all data in the respective tables can be accessed.
    TODO: Restrict access
**/

const { authJwt } = require("../../middleware");
const controller = require("../../controllers/user_controller");
const obs_db  = require("../../models/obsdata");

const keys = Object.keys(obs_db)
const tables = keys.filter(function(ele) {
  return ele.toLowerCase() != "sequelize" 
})

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  tables.forEach(table => {
    app.get(`/${obs_db[table].tableName}/`, async (req, res, next) => {
      try {
        let result = await obs_db[table].findAll()
        res.json(result)
      } catch (err) {
        res.status(499).json(err);
      }
    })
  })
};
