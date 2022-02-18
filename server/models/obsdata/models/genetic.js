module.exports = (sequelize, Sequelize) => {
  const Genetic = sequelize.define(
    "Genetic",
    {
      ncbi_gene_id: {
        type: Sequelize.INTEGER,
        comment: "NCBI gene id",
      },
      gene_name: {
        type: Sequelize.STRING,
        comment: "Conventional gene name, e.g., CYP2D6",
      },
      value_num: {
        type: Sequelize.FLOAT,
        comment:
          "Numeric value of a parameter, e.g., percentage of individuals in the population carrying a specific allele",
      },
      value_str: {
        type: Sequelize.STRING,
        comment: "Non-numeric value of a parameter, e.g., Poor Metabolizer",
      },
      value_unit: {
        type: Sequelize.STRING,
        comment: "Unit of a parameter, e.g., %",
      },
      value_comment: {
        type: Sequelize.STRING,
        comment: "Additional information about the parameter",
      },
    },
    { tableName: "genetic" }
  );
  return Genetic;
};
