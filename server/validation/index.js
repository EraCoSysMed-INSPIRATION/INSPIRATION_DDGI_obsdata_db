const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({
  schemas: [
    require('./schemas/profile.schema.json'),
    require('./schemas/profile_info.schema.json'),
    require('./schemas/reference_info.schema.json'),
    require('./schemas/demographic_parameter.schema.json'),
    require('./schemas/compound_analyte.schema.json'),
  ]
});

addFormats(ajv, "iso-time");
ajv.addKeyword({
  keyword: "meta:enum",
});

async function validateSchema(req, schema) {
  let message = `Schema '${schema.title}' is valid`;
  const validate = ajv.getSchema("profile");
  let valid = await validate(req.body);
  if (!valid) {
    message = validate.errors;
  }
  return { message: message, isValid: valid };
}

function allTrue(arr) {
  return arr.every((element) => element === true);
}

async function validateAllSchemas(req) {
  try {
    let top_level_schema = require("./schemas/profile.schema.json");
    let validatedSchema = await validateSchema(
      req,
      top_level_schema
    );
    let messages = [];
    let warnings = [];
    let valid = [];
    if (validatedSchema.isValid) {
      messages.push({
        isValid: validatedSchema.isValid,
        messages: validatedSchema.message,
      });
    } else {
      warnings.push({
        isValid: validatedSchema.isValid,
        messages: validatedSchema.message,
      });
    }
    return { warnings: warnings, messages: messages, allValid: allTrue(valid) };
  } catch (err) {
    console.log(err);
  }
}
module.exports = validateAllSchemas;
