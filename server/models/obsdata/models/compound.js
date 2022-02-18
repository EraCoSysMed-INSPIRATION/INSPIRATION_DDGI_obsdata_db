module.exports = (sequelize, Sequelize) => {
  const Compound = sequelize.define(
    "Compound",
    {
      pubchem_id: {
        type: Sequelize.INTEGER,
        comment: "Pubchem identifier",
      },
      compound_name: {
        type: Sequelize.STRING,
        comment: "Commonly used name of the compound",
      },
      compound_alias: {
        type: Sequelize.STRING,
        comment: "Alternative name or identifier",
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["pubchem_id", "compound_name", "compound_alias"],
        },
      ],
      tableName: "compound",
    }
  );
  return Compound;
};
