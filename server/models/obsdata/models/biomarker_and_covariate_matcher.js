module.exports = (sequelize, Sequelize) => {
  const BiomarkerAndCovariateMatcher = sequelize.define(
    "BiomarkerAndCovariateMatcher",
    {},
    { tableName: "biomarker_and_covariate_matcher" }
  );
  return BiomarkerAndCovariateMatcher;
};
