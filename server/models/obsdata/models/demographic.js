module.exports = (sequelize, Sequelize) => {
  const Demographic = sequelize.define(
    "Demographic",
    {
      parameter: {
        type: Sequelize.STRING,
        comment: "Name of the parameter, e.g., age",
      },
      value_type: {
        type: Sequelize.STRING,
        comment: "Type of the parameter value, e.g., mean",
      },
      value_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the parameter value, e.g., kg",
      },
      value_num: {
        type: Sequelize.STRING,
        comment: "Numeric parameter value",
      },
      value_str: {
        type: Sequelize.STRING,
        comment: "Non-numeric parameter value",
      },
      value_comment: {
        type: Sequelize.STRING,
        comment: "Additional information about the parameter.",
      },
    },
    { tableName: "demographic" }
  );
  return Demographic;
};
