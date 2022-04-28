function JSONStringstoLower(json) {
  for (let prop in json) {
  if (typeof json[prop] === 'string') {
    json[prop] = json[prop].toLowerCase();
  }
  if (typeof json[prop] === 'object') {
    JSONStringstoLower(json[prop]);
    }
  }
  return json;
}

module.exports = JSONStringstoLower;