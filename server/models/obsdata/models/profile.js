module.exports = (sequelize, Sequelize) => {
  const ProfileInfo = sequelize.define(
    "Profile",
    {
      start_clocktime: {
        type: Sequelize.STRING,
      },
      profile_type: {
        type: Sequelize.STRING,
      },
      ddi: { type: Sequelize.BOOLEAN, comment: "Profile is DDI profile" },
      dgi: { type: Sequelize.BOOLEAN, comment: "Profile is DGI profile" },
      dfi: { type: Sequelize.BOOLEAN, comment: "Profile is DFI profile" },
    },
    { tableName: "profile_info" }
  );
  return ProfileInfo;
};
