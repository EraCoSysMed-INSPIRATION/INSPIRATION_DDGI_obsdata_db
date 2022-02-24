module.exports = (sequelize, Sequelize) => {
  const ObservationMatcher = sequelize.define(
    "ObservationMatcher",
    {},
    { tableName: "compound_observation_matcher" }
  );
  return ObservationMatcher;
};
