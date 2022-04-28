module.exports = (sequelize, Sequelize) => {
  const AdministrationProtocolMatcher = sequelize.define(
    "AdministrationProtocolMatcher",
    {},
    {tableName: "administration_protocol_matcher"}
  );
  return AdministrationProtocolMatcher;
};