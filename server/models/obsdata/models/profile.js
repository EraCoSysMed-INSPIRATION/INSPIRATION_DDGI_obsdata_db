module.exports = (sequelize, Sequelize) => {
  const ProfileInfo = sequelize.define(
    "Profile",
    {
      start_clocktime: {type: Sequelize.STRING,},
      profile_type: {type: Sequelize.STRING,},
      aggregation_type: {type: Sequelize.STRING,},
      is_ddi: { type: Sequelize.BOOLEAN, comment: "Profile is DDI profile" },
      is_dgi: { type: Sequelize.BOOLEAN, comment: "Profile is DGI profile" },
      is_dfi: { type: Sequelize.BOOLEAN, comment: "Profile is DFI profile" },
    },
    { tableName: "profile_info" }
  );
  return ProfileInfo;
};
