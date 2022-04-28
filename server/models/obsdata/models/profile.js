module.exports = (sequelize, Sequelize) => {
  const ProfileInfo = sequelize.define(
    "Profile",
    {
      start_clocktime: { type: Sequelize.STRING },
      profile_type: { type: Sequelize.STRING },
      aggregation_type: { type: Sequelize.STRING },
      // is_ddi: { type: Sequelize.BOOLEAN },
      // is_dgi: { type: Sequelize.BOOLEAN },
      // is_dfi: { type: Sequelize.BOOLEAN },
      organ: { type: Sequelize.STRING },
      compartment: { type: Sequelize.STRING },
      matrix: { type: Sequelize.STRING },
      approved_flag: { type: Sequelize.BOOLEAN },
    },
    { tableName: "profile_info" }
  );
  return ProfileInfo;
};
