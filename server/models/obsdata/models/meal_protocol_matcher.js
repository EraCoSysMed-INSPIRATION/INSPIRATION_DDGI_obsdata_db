module.exports = (sequelize, Sequelize) => {
  const MealProtocolMatcher = sequelize.define("MealProtocolMatcher", {}, {tableName: "meal_protocol_matcher"});
  return MealProtocolMatcher;
};