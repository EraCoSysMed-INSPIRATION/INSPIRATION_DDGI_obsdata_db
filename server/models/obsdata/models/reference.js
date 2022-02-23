module.exports = (sequelize, Sequelize) => {
  const Reference = sequelize.define(
    "Reference",
    {
      doi: {
        type: Sequelize.STRING,
        comment: "Document object identifier for journal articles, etc.",
        unique: true
      },
      pmid: {
        type: Sequelize.INTEGER,
        comment: "Pubmed identifier of the document",
        unique: true
      },
      alternative_id: {
        type: Sequelize.STRING,
        comment: "Alternative identifier of the document, i.e., link to the document.",
        unique: true
      },
      doctitle: {
        type: Sequelize.STRING,
        comment: "Title of the document",
      },
      first_author: {
        type: Sequelize.STRING,
        comment: "First author of the document",
      },
      reference_type: {
        type: Sequelize.STRING,
        comment: "Type of reference of the document, e.g., journal article",
      },
      publication_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "Year of the document's publication",
      },
    },
    {
      tableName: "reference",
    }
  );
  return Reference;
};
