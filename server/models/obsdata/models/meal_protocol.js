module.exports = (sequelize, Sequelize) => {
  const MealProtocol = sequelize.define(
    "MealProtocol",
    {
      time_value: {
        type: Sequelize.FLOAT,
      },
      time_unit: {
        type: Sequelize.STRING,
      },
      calorific_value: {
        type: Sequelize.JSON,
      },
      calorific_value_unit: {
        type: Sequelize.STRING,
      },
      meal_composition: {
        type: Sequelize.JSON,
      },
      fraction_solid: {
        type: Sequelize.FLOAT,
      },
      fraction_liquid: {
        type: Sequelize.FLOAT,
      },
      meal_description: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "meal_protocol" }
  );
  return MealProtocol;
};
