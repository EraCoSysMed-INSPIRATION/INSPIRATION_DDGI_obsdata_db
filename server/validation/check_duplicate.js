async function isDuplicateRequest(req, model) {
  let duplicate = false;
  try {
    await model.create({ request: req.body });
  } catch (err) {
    duplicate = true;
  }
  return duplicate;
}
module.exports = isDuplicateRequest;