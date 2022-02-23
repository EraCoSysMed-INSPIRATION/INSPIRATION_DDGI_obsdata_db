async function createDemographics(database, body) {
  let property = "demographics";
  let demographics = [];
  for (let demographic of body[property]) {
    let obj = {
      parameter: demographic.parameter,
      value_type: demographic.value_type,
      value_numeric: demographic.numeric,
      value_string: demographic.string,
      value_unit: demographic.unit,
      value_comment: demographic.comment,
    };
    let demographic_new = {};
    demographic_new.demographic_new = await database["Demographic"].build(obj);
    demographic_new.protocol_match = await database["DemographicMatcher"].build(
      {}
    );
    demographic_new.messages = "New entry and match for demographic created.";
    demographics.push(demographic_new);
  }
  return demographics;
}
module.exports = createDemographics;
