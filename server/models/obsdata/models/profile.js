module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define(
    "Profile",
    {
      start_clocktime: {
        type: Sequelize.STRING,
        comment:
          "Reference clocktime for t = 0 h. Omit when no clocktime is given",
      },
      profile_type: {
        type: Sequelize.STRING,
        comment: "Type of the profile: PK or PD",
      },
    },
    { tableName: "profile" }
  );
  return Profile;
};
