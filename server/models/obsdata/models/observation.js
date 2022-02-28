module.exports = (sequelize, Sequelize) => {
  const Observation = sequelize.define(
    "Observation",
    {
      observations: {
        type: Sequelize.JSON,
      },
      time_unit: {
        type: Sequelize.STRING,
      },
      value_unit: {
        type: Sequelize.STRING,
      },
      error_type: {
        type: Sequelize.STRING,
      },
      organ: {
        type: Sequelize.STRING,
      },
      compartment: {
        type: Sequelize.STRING,
      },
      matrix: {
        type: Sequelize.STRING,
      },
      lloq: {
        type: Sequelize.FLOAT,
      },
      comment: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "observations" }
  );
  return Observation;
};
