module.exports = (sequelize, Sequelize) => {
  const Genetic = sequelize.define(
    "Genetic",
    {
      ncbi_gene_id: {
        type: Sequelize.INTEGER,
      },
      gene_name: {
        type: Sequelize.STRING,
      },
      parameter: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      percentage: {
        type: Sequelize.FLOAT,
      },
      method: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
    },
    { tableName: "genetic" }
  );
  return Genetic;
};
