module.exports = (sequelize, Sequelize) => {
  const CompoundsAndAnalytes = sequelize.define(
    "CompoundsAndAnalytes",
    {
      pubchem_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      alias: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      }
    },
    {
      tableName: "compounds_and_analytes",
      indexes: [
        {
          unique: true,
          fields: ["pubchem_id", "name", "alias"],
        },
      ],
    }
  );
  return CompoundsAndAnalytes;
};
