module.exports = (sequelize, Sequelize) => {
  const BiomarkerAndCovariateObservation = sequelize.define(
    "BiomarkerAndCovariateObservation",
    {
      observations: {
        type: Sequelize.JSON,
        comment: "Series of timepoints of the observations",
      },
      time_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the entered time values",
      },
      value_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the observed values",
      },
      error_type: {
        type: Sequelize.STRING,
        comment: "Type of the error, e.g. SD",
      },
      organ: {
        type: Sequelize.STRING,
        comment: "Organ or tissue where observation was made, e.g., liver",
      },
      compartment: {
        type: Sequelize.STRING,
        comment: "Compartment where observation was made, e.g., extracellular",
      },
      matrix: {
        type: Sequelize.STRING,
        comment: "Matrix where observation was made, e.g., ?",
      },
      lloq: {
        type: Sequelize.FLOAT,
        comment: "Lower limit of quantification",
      },
      comment: {
        type: Sequelize.STRING,
      },
    }, { tableName: "biomarker_and_covariate_observation"}
  );
  return BiomarkerAndCovariateObservation;
};
