const createConditional = require("./create_conditional")

async function createReferenceIfNotExists(database, mapper, body) {
  let property = "reference_info"
  let obj = {
    doi: body[property].doi,
    pmid: body[property].pmid,
    alternative_id: body[property].alternative_id,
    doctitle: body[property].doctitle,
    first_author: body[property].first_author,
    reference_type: body[property].reference_type,
    publication_year: body[property].publication_year,
  };
  let referenceOut = await createConditional(
    database,
    mapper,
    body[property],
    property,
    obj
  );
  return referenceOut;
}
module.exports = createReferenceIfNotExists;