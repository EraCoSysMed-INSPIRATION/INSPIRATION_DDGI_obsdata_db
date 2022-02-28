module.exports = (sequelize, Sequelize) => {
  const Reference = sequelize.define(
    "Reference",
    {
      doi: {
        type: Sequelize.STRING,
        unique: true
      },
      pmid: {
        type: Sequelize.INTEGER,
        unique: true
      },
      alternative_id: {
        type: Sequelize.STRING,
        unique: true
      },
      doctitle: {
        type: Sequelize.STRING,
      },
      first_author: {
        type: Sequelize.STRING,
      },
      reference_type: {
        type: Sequelize.STRING,
      },
      publication_year: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: "reference",
    }
  );
  return Reference;
};
