module.exports = (sequelize, Sequelize) => {
  const NCAValue = sequelize.define(
    "NCAValue",
    {
      parameter: {
        type: Sequelize.STRING,
      },
      value_numeric: {
        type: Sequelize.FLOAT,
      },
      value_unit: {
        type: Sequelize.STRING,
      },
      error_numeric: {
        type: Sequelize.FLOAT,
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
      comment: {
        type: Sequelize.STRING,
      }
    },
    { tableName: "nca_value" }
  );
  return NCAValue;
};
