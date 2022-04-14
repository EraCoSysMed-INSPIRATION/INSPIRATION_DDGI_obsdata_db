module.exports = (sequelize, Sequelize) => {
  const GeneticMatcher = sequelize.define(
    "GeneticMatcher",
    {},
    { tableName: "genetic_matcher" }
  );
  return GeneticMatcher;
};
