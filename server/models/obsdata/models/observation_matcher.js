module.exports = (sequelize, Sequelize) => {
  const ObservationMatcher = sequelize.define(
    "ObservationMatcher",
    {},
    { tableName: "observation_matcher" }
  );
  return ObservationMatcher;
};
