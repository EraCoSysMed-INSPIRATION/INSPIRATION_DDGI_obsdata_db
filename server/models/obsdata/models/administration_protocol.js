module.exports = (sequelize, Sequelize) => {
  const AdministrationProtocol = sequelize.define(
    "AdministrationProtocol",
    {
      administrations: {
        type: Sequelize.JSON,
      },
      time_unit: {
        type: Sequelize.STRING,
      },
      dose_unit: {
        type: Sequelize.STRING,
      },
      formulation: {
        type: Sequelize.STRING,
      },
      formulation_comment: {
        type: Sequelize.STRING,
      },
      administration_route: {
        type: Sequelize.STRING,
      },
      duration_unit: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "administration_protocol" }
  );
  return AdministrationProtocol;
};
