module.exports = (sequelize, Sequelize) => {
  const InteractionProfileMatcher = sequelize.define(
    "InteractionProfileMatcher",
    {
      ddi: { type: Sequelize.BOOLEAN, comment: "Profile is DDI profile" },
      dgi: { type: Sequelize.BOOLEAN, comment: "Profile is DGI profile" },
      dfi: { type: Sequelize.BOOLEAN, comment: "Profile is DFI profile" },
    },
    { tableName: "interaction_profile_matcher" }
  );
  return InteractionProfileMatcher;
};
