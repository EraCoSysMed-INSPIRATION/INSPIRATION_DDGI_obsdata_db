module.exports = (sequelize, Sequelize) => {
  const Observation = sequelize.define(
    "Observations",
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
