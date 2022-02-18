module.exports = (sequelize, Sequelize) => {
  const NCAParameter = sequelize.define(
    "NCAParameter",
    {
      nca_type: {
        type: Sequelize.STRING,
        comment: "Type of the NCA value, e.g., AUC",
      },
      nca_description: {
        type: Sequelize.STRING,
        comment: "Further description of the NCA parameter",
      },
    },
    { tableName: "nca_parameter" }
  );
  return NCAParameter;
};
