const createConditional = require("./create_conditional");

async function createCompoundsIfNotExists(database, mapper, body) {
  let compounds = [];
  for (let compound of body.compounds_and_analytes) {
    let obj = {
      pubchem_id: compound.pubchem_id,
      name: compound.name,
      alias: compound.alias,
      category: compound.category
    };
    compound_new = await createConditional(
      database,
      mapper,
      compound,
      "compounds_and_analytes",
      obj
    );
    if (compound_new.is_new) {
      let compound_mw = { molecularWeight: compound.molecular_weight }
      compound_new.compound_mw = await database["MolecularWeight"].build(compound_mw);
      compound_new.messages.push("New entry for 'MolecularWeight' was staged")
    }
    compounds.push(compound_new);
  }
  return compounds;
}
module.exports = createCompoundsIfNotExists;
