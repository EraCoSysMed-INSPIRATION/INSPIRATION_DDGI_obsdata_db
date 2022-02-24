module.exports = (sequelize, Sequelize) => {
  const Observation = sequelize.define(
    "Observation",
    {
      time_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the entered time values",
      },
      observations: {
        type: Sequelize.JSON,
        comment: "Array of all observations for the given profile.",
      },
      obs_value_unit: {
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
      observation_description: {
        type: Sequelize.STRING,
        comment: "Description of the observation.",
      },
    },
    { tableName: "observations" }
  );
  return Observation;
};
