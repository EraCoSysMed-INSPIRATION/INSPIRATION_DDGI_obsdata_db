module.exports = (sequelize, Sequelize) => {
  const NCAValue = sequelize.define(
    "NCAValue",
    {
      nca_value_num: {
        type: Sequelize.FLOAT,
        comment: "Numeric NCA value",
      },
      nca_value_unit: {
        type: Sequelize.STRING,
        comment: "Unit of the NCA value",
      },
      nca_error_value: {
        type: Sequelize.FLOAT,
        comment: "Error of NCA value",
      },
      nca_error_unit: {
        type: Sequelize.STRING,
        comment: "Unit of NCA error",
      },
      nca_error_type: {
        type: Sequelize.STRING,
        comment: "Type of the error, e.g. SD",
      },
      nca_organ: {
        type: Sequelize.STRING,
        comment: "Organ or tissue where NCA observation was made, e.g., liver",
      },
      nca_compartment: {
        type: Sequelize.STRING,
        comment:
          "Compartment where NCA observation was made, e.g., extracellular",
      },
      nca_matrix: {
        type: Sequelize.STRING,
        comment: "Matrix where NCA observation was made, e.g., ?",
      },
    },
    { tableName: "nca_value" }
  );
  return NCAValue;
};
