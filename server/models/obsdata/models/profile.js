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
    },
    { tableName: "profile_info" }
  );
  return ProfileInfo;
};
