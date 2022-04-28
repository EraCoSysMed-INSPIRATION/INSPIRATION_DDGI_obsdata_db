async function createInteractionRatios(database, body) {
  let property = "interaction_ratios";
  let nca_values = [];
  for (let nca_value of body[property]) {
    let obj = {
      parameter: nca_value.parameter,
      value_numeric: nca_value.value_numeric,
      value_unit: nca_value.value_unit,
      error_numeric: nca_value.error_numeric,
      error_type: nca_value.error_type,
      organ: nca_value.organ,
      compartment: nca_value.compartment,
      matrix: nca_value.matrix,
      comment: nca_value.comment,
    };
    let nca_new = {};
    nca_new.nca_new = await database["InteractionRatio"].build(obj);
    nca_new.protocol_match = await database["NCAMatcher"].build(
      {}
    );
    nca_new.messages = "New entry and match for nca_value staged.";
    nca_values.push(nca_new);
  }
  return nca_values;
}
module.exports = createNCAValues;
