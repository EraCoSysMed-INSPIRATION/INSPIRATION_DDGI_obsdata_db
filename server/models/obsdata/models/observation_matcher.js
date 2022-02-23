module.exports = (sequelize, Sequelize) => {
  const CompoundObservationMatcher = sequelize.define(
    "CompoundObservationMatcher",
    {},
    { tableName: "compound_observation_matcher" }
  );
  return CompoundObservationMatcher;
};
