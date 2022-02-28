module.exports = (sequelize, Sequelize) => {
  const Compound = sequelize.define(
    "Compound",
    {
      pubchem_id: {
        type: Sequelize.INTEGER,
      },
      compound_name: {
        type: Sequelize.STRING,
      },
      compound_alias: {
        type: Sequelize.STRING,
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
