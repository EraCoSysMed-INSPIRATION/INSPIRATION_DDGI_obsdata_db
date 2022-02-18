module.exports = (sequelize, Sequelize) => {
  const MolecularWeight = sequelize.define(
    "MolecularWeight",
    {
      compound_mw: {
        type: Sequelize.FLOAT,
        comment: "molecular weight of the compound",
      },
    },
    {
    //   indexes: [
    //     {
    //       unique: true,
    //       fields: ["compound_id"],
    //     },
    //   ],
      tableName: "molecular_weight",
    }
  );
  return MolecularWeight;
};
