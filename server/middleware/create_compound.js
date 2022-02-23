const createConditional = require("./create_conditional");

async function createCompoundsIfNotExists(database, mapper, body) {
  let compounds = [];
  for (let compound of body.compoundInfo) {
    let obj = {
      pubchem_id: compound.pubchem_id,
      compound_name: compound.compound_name,
      compound_alias: compound.compound_alias,
    };
    compoundNew = await createConditional(
      database,
      mapper,
      compound,
      "compoundInfo",
      obj
    );
    if (compoundNew.isNew) {
      let compoundMW = { compound_mw: compound.compound_mw }
      compoundNew.compoundMW = await database["MolecularWeight"].build(compoundMW);
      compoundNew.messages.push("New entry for 'MolecularWeight' was staged")
    }
    compounds.push(compoundNew);
  }
  return compounds;
}
module.exports = createCompoundsIfNotExists;
