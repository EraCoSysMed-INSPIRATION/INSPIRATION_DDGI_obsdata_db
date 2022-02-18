module.exports = (sequelize, Sequelize) => {
  const AdministrationProtocol = sequelize.define(
    "AdministrationProtocol",
    {
      time_values: {
        type: Sequelize.JSON,
        comment: "Time point of the drug administration",
      },
      time_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the entered time values",
      },
      doses: {
        type: Sequelize.JSON,
        comment: "Numeric value of the event parameter, e.g. 100 for the administered dose in mg",
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
      duration_time_values: {
        type: Sequelize.JSON,
        comment: "Duration of dosing, e.g., 5 min infusion time",
      },
      duration_time_unit: {
        type: Sequelize.STRING,
        comment: "Unit for the dosing duration",
      },
    },
    { tableName: "administration_protocol" }
  );
  return AdministrationProtocol;
};
