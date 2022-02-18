module.exports = (sequelize, Sequelize) => {
  const MealProtocol = sequelize.define(
    "MealProtocol",
    {
      time_values: {
        type: Sequelize.JSON,
        comment: "Series of timepoints of the meal administrations",
      },
      time_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the entered time values",
      },
      calorific_calue: {
        type: Sequelize.JSON,
        comment: "Calorific content of the given meals",
      },
      calorific_value_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the calorific value of the meals",
      },
      meal_composition: {
        type: Sequelize.JSON,
        comment:
          "Composition of the meal, e.g., percentage of fat per given meal",
      },
      meal_comment: {
        type: Sequelize.STRING,
        comment: "Additional information about the meal, e.g., light meal",
      },
    },
    { tableName: "meal_protocol" }
  );
  return MealProtocol;
};
