module.exports = (sequelize, Sequelize) => {
  const NCAMatcher = sequelize.define(
    "NCAMatcher",
    {},
    { tableName: "nca_matcher" }
  );
  return NCAMatcher;
};
