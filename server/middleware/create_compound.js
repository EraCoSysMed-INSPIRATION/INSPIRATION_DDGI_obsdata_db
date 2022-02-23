const createConditional = require("./create_conditional");

async function createCompoundsIfNotExists(database, mapper, body) {
  let compounds = [];
  for (let compound of body.compoundInfo) {
    let obj = {
      pubchem_id: compound.pubchem_id,
      compound_name: compound.compound_name,
      compound_alias: compound.compound_alias,
    };
    compoundNew = await createConditional(database, mapper, compound, "compoundInfo", obj)
    compounds.push(compoundNew);
  }
  return compounds;
}
module.exports = createCompoundsIfNotExists;
