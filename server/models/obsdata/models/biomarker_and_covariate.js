module.exports = (sequelize, Sequelize) => {
  const BiomarkerAndCovariate = sequelize.define(
    "BiomarkerAndCovariate",
    {
      biomarker_covariate_name: {
        type: Sequelize.STRING,
        comment: "Name or description of a biomarker or covariate",
      },
    },
    { tableName: "biomarker_and_covariate" }
  );
  return BiomarkerAndCovariate;
};
