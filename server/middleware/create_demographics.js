async function createDemographics(database, body) {
  let property = "demographics";
  let demographics = [];
  for (let demographic of body[property]) {
    let obj = {
      parameter: demographic.parameter,
      value_type: demographic.value_type,
      value_numeric: demographic.value_numeric,
      value_string: demographic.value_string,
      value_unit: demographic.value_unit,
      value_comment: demographic.value_comment,
    };
    let demographic_new = {};
    demographic_new.demographic_new = await database["Demographic"].build(obj);
    demographic_new.protocol_match = await database["DemographicMatcher"].build(
      {}
    );
    demographic_new.messages = "New entry and match for demographic staged.";
    demographics.push(demographic_new);
  }
  return demographics;
}
module.exports = createDemographics;
