module.exports = (sequelize, Sequelize) => {
  const MolecularWeight = sequelize.define(
    "MolecularWeight",
    {
      molecularWeight: {
        type: Sequelize.FLOAT,
        comment: "molecular weight of the compound",
      },
    },
    {
      tableName: "molecular_weight",
    }
  )
  return MolecularWeight;
};
