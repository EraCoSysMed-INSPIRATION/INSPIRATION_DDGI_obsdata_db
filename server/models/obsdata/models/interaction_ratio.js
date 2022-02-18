module.exports = (sequelize, Sequelize) => {
  const InteractionRatio = sequelize.define(
    "InteractionRatio",
    {
      ratio_value: {
        type: Sequelize.FLOAT,
        comment: "Value of ratio",
      },
      ratio_type: {
        type: Sequelize.STRING,
        comment: "Type of ratio, e.g., AUClast",
      },
      ratio_error_value: {
        type: Sequelize.FLOAT,
        comment: "Error of ratio",
      },
      ratio_error_type: {
        type: Sequelize.STRING,
        comment: "Type of error, e.g., SD",
      },
      ratio_comment: {
        type: Sequelize.STRING,
        comment: "Additional information about the ratio",
      },
    },
    { tableName: "interaction_ratio" }
  );
  return InteractionRatio;
};
