/** 
    Adds a route to show all tables in the database.
    TODO: Restrict access
**/
const { authJwt } = require("../../middleware");
const controller = require("../../controllers/user_controller");
const Sequelize = require("sequelize");
const { sequelize } = require("../../models/obsdata");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/tables", async (req, res, next) => {
    try {
      sequelize
        .query("SHOW tables", { type: Sequelize.QueryTypes.SHOWTABLES })
        .then(function (rows) {
          res.json(rows);
        });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  });
};
