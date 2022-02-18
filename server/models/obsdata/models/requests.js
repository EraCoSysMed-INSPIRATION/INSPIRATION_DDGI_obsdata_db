module.exports = (sequelize, Sequelize) => {
  const StoredRequests = sequelize.define(
    "StoredRequests",
    {
      request: {
        type: Sequelize.JSON,
        comment: "Stored request, emptied after 5 minutes",
      },
    },
    {
      tableName: "stored_requests",
      indexes: [
        {
          unique: true,
          fields: ["request"],
        },
      ],
    }
  );
  return StoredRequests;
};
