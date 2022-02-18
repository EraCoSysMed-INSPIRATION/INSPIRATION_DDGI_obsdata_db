module.exports = (sequelize, Sequelize) => {
  const BiomarkerAndCovariateObservation = sequelize.define(
    "BiomarkerAndCovariateObservation",
    {
      time_values: {
        type: Sequelize.JSON,
        comment: "Series of timepoints of the observations",
      },
      time_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the entered time values",
      },
      obs_values: {
        type: Sequelize.JSON,
        comment: "Series of observed values",
      },
      obs_value_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the observed values",
      },
      obs_error_value: {
        type: Sequelize.JSON,
        comment: "Series of numeric observation errors",
      },
      obs_error_unit: {
        type: Sequelize.STRING,
        comment: "Unit of observed errors",
      },
      obs_error_type: {
        type: Sequelize.STRING,
        comment: "Type of the error, e.g. SD",
      },
      obs_organ: {
        type: Sequelize.STRING,
        comment: "Organ or tissue where observation was made, e.g., liver",
      },
      obs_compartment: {
        type: Sequelize.STRING,
        comment: "Compartment where observation was made, e.g., extracellular",
      },
      obs_matrix: {
        type: Sequelize.STRING,
        comment: "Matrix where observation was made, e.g., ?",
      },
      lloq: {
        type: Sequelize.FLOAT,
        comment: "Lower limit of quantification",
      },
      obs_values_blq: {
        type: Sequelize.JSON,
        comment: "Series of booleans that describe wether value is below LLOQ",
      },
    }, { tableName: "biomarker_and_covariate_observation"}
  );
  return BiomarkerAndCovariateObservation;
};
