async function getAllResults(tableName, columns, database, body) {
  let results = [];
  await Promise.all(
    columns.map(async (column) => {
      let result = await database[tableName].findAll({
        where: { [database[tableName][column]]: body.referenceInfo[column] },
      });
      results.push(result);
    })
  );

  return results;
}

module.exports = getAllResults;
