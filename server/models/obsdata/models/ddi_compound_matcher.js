module.exports = (sequelize, Sequelize) => {
  const DDICompoundMatcher = sequelize.define(
    "DDICompoundMatcher",
    {
      compound_role_ddi: {
        type: Sequelize.STRING,
        comment: "Role of a compound in a DDI scenario",
      },
    },
    { tableName: "ddi_compound_matcher" }
  );
  return DDICompoundMatcher;
};
