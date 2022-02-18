module.exports = (sequelize, Sequelize) => {
  const GeneticMatcher = sequelize.define(
    "GeneticMatcher",
    {},
    { tableName: "GeneticMatcher" }
  );
  return GeneticMatcher;
};
