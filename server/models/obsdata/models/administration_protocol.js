module.exports = (sequelize, Sequelize) => {
  const AdministrationProtocol = sequelize.define(
    "AdministrationProtocol",
    {
      administrations: {
        type: Sequelize.JSON,
        comment: "Array of time, dose, and dosing duration for each drug administration of a given compound and formulation",
      },
      time_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the entered time values",
      },
      dose_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the dose",
      },
      formulation: {
        type: Sequelize.STRING,
        comment:
          "Formulation of the administered doses, e.g., immediate release tablet",
      },
      formulation_comment: {
        type: Sequelize.STRING,
        comment:
          "Additional information about the formulation, e.g., brand name",
      },
      administration_route: {
        type: Sequelize.STRING,
        comment: "Route of the administration, e.g., oral",
      },
      duration_unit: {
        type: Sequelize.STRING,
        comment: "Unit for the dosing duration",
      },
    },
    { tableName: "administration_protocol" }
  );
  return AdministrationProtocol;
};
