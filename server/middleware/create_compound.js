const createConditional = require("./create_conditional");

async function createCompoundsIfNotExists(database, mapper, body) {
  let compounds = [];
  for (let compound of body.compound_infos) {
    let obj = {
      pubchem_id: compound.pubchem_id,
      compound_name: compound.compound_name,
      compound_alias: compound.compound_alias,
    };
    compound_new = await createConditional(
      database,
      mapper,
      compound,
      "compound_infos",
      obj
    );
    if (compound_new.is_new) {
      let compound_mw = { compound_mw: compound.compound_mw }
      compound_new.compound_mw = await database["MolecularWeight"].build(compound_mw);
      compound_new.messages.push("New entry for 'MolecularWeight' was staged")
    }
    compounds.push(compound_new);
  }
  return compounds;
}
module.exports = createCompoundsIfNotExists;
