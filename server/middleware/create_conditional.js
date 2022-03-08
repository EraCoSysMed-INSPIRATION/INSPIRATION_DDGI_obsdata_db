const { findExistingEntries } = require("../validation/helpers");

async function createConditional(
  database,
  mapper,
  entry,
  property,
  obj
) {
  let messages = [];
  let warnings = [];
  let allEntries = await findExistingEntries(
    property,
    mapper,
    entry,
    database
  );
  let model = null;
  let isNew = false;
  switch (allEntries.fullResults.length) {
    case 0:
      messages.push(
        `No matching entry for '${allEntries.current.tableName}' found, staging new entry.`
      );
      model = await database[allEntries.current.tableName].build(obj);
      isNew = true;
      break;
    case 1:
      messages.push(
        `Existing entry for '${allEntries.current.tableName}' found and used`
      );
      messages.push(allEntries.trimmedResults[0][0]);
      model = allEntries.fullResults[0][0];
      break;
    default:
      warnings.push(
        `Bad Request: The provided entry for '${allEntries.current.tableName}' is in conflict with multiple existing entries:`
      );
      messages.push(allEntries.trimmedResults);
      break;
  }
  return {messages: messages, warnings: warnings, model: model, is_new: isNew};
}

module.exports = createConditional;
