module.exports = (sequelize, Sequelize) => {
  const InteractionRatio = sequelize.define(
    "InteractionRatio",
    {
      value: {
        type: Sequelize.FLOAT,
      },
      interaction_type: {
        type: Sequelize.STRING,
      },
      ratio_type: {
        type: Sequelize.STRING,
      },
      error_value: {
        type: Sequelize.FLOAT,
      },
      error_type: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "interaction_ratio" }
  );
  return InteractionRatio;
};
