async function createAdministrationProtocols(database, body) {
  let property = "drug_administrations"
  let protocols = [];
  for (let protocol of body[property]) {
    let obj = {
      administrations: protocol.administrations,
      time_unit: protocol.time_unit,
      dose_unit: protocol.dose_unit,
      duration_unit: protocol.duration_unit,
      formulation: protocol.formulation,
      formulation_comment: protocol.formulation_comment,
      administration_route: protocol.administration_route
    };
    let protocol_new = {};
    protocol_new.protocol_new = await database["AdministrationProtocol"].build(obj);
    protocol_new.protocol_match = await database["AdministrationProtocolMatcher"].build({})
    protocol_new.messages = "New entry and match for administration protocol created."
    protocols.push(protocol_new)
  }
  return protocols;
}
module.exports = createAdministrationProtocols;

