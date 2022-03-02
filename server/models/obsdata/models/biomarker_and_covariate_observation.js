module.exports = (sequelize, Sequelize) => {
  const BiomarkerAndCovariateObservation = sequelize.define(
    "BiomarkerAndCovariateObservation",
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
    }, { tableName: "biomarker_and_covariate_observation"}
  );
  return BiomarkerAndCovariateObservation;
};
