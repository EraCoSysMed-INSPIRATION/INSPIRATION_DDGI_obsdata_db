module.exports = (sequelize, Sequelize) => {
  const Demographic = sequelize.define(
    "Demographic",
    {
      parameter: {
        type: Sequelize.STRING,
      },
      value_type: {
        type: Sequelize.STRING,
      },
      value_unit: {
        type: Sequelize.STRING,
      },
      value_numeric: {
        type: Sequelize.STRING,
      },
      value_string: {
        type: Sequelize.STRING,
      },
      value_comment: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "demographic" }
  );
  return Demographic;
};
