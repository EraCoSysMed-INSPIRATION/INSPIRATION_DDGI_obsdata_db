module.exports = (sequelize, Sequelize) => {
  const DemographicMatcher = sequelize.define(
    "DemographicMatcher",
    {},
    { tableName: "demographic_matcher" }
  );
  return DemographicMatcher;
};
