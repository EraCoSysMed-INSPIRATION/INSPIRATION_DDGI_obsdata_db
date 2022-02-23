const createConditional = require("./create_conditional")

async function createReferenceIfNotExists(database, mapper, body) {
  let obj = {
    doi: body.referenceInfo.doi,
    pmid: body.referenceInfo.pmid,
    alternative_id: body.referenceInfo.alternative_id,
    doctitle: body.referenceInfo.doctitle,
    first_author: body.referenceInfo.first_author,
    reference_type: body.referenceInfo.reference_type,
    publication_year: body.referenceInfo.publication_year,
  };
  let referenceOut = await createConditional(
    database,
    mapper,
    body.referenceInfo,
    "referenceInfo",
    obj
  );
  return referenceOut;
}
module.exports = createReferenceIfNotExists;