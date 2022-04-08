async function createObservations(database, body) {
  let property = "observations";
  let observation = body[property];
  let obj = {
    observations: observation.observations,
    time_unit: observation.time_unit,
    value_unit: observation.value_unit,
    error_type: observation.error_type,
    organ: observation.organ,
    compartment: observation.compartment,
    matrix: observation.matrix,
    lloq: observation.lloq,
    comment: observation.comment,
  };
  let obs_new = {};
  obs_new.obs_new = await database["Observation"].build(obj);
  obs_new.protocol_match = await database["ObservationMatcher"].build(
    {}
  );
  obs_new.messages = "New entry and match for observations staged.";

  return obs_new;
}
module.exports = createObservations;