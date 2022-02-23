async function getColumnsAndTableName(mapper, property) {
  return await {
    columns: mapper[property].checkColumns,
    tableName: mapper[property].checkTableName,
    hiddenColumns: mapper[property].hiddenOutputColumns,
  };
}

async function columnIsNull(column, entry) {
  return (await entry[column]) === null;
}

async function notNullColumns(columns, entry) {
  let notNull = [];
  await Promise.all(
    columns.map(async (column) => {
      let isNull = await columnIsNull(column, entry);
      if (!isNull) {
        notNull.push(column);
      }
    })
  );
  return notNull;
}

async function findExistingEntries(property, mapper, entry, database) {
  let current = await getColumnsAndTableName(mapper, property);
  let notNulls = await notNullColumns(current.columns, entry);
  let fullResults = [];
  let trimmedResults = [];
  for (let col of notNulls) {
    let fullResult = await database[current.tableName].findAll({
      where: {
        [col]: entry[col],
      },
    });
    let trimmedResult = await database[current.tableName].findAll({
      where: {
        [col]: entry[col],
      },
      attributes: { exclude: current.hiddenColumns },
    });
    if (fullResult.length > 0) {
      fullResults.push(fullResults), trimmedResults.push(trimmedResult);
    }
  }
  return { current, trimmedResults, fullResults, notNulls };
}

module.exports = {
  getColumnsAndTableName,
  columnIsNull,
  notNullColumns,
  findExistingEntries,
};
