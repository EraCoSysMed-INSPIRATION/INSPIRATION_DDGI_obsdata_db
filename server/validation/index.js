const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({
  schemas: [
    require('./schemas/_profile.schema.json'),
    require('./schemas/compounds_and_analytes.schema.json'),
    require('./schemas/demographics.schema.json'),
    require('./schemas/drug_administrations.schema.json'),
    require('./schemas/interaction_ratios.schema.json'),
    require('./schemas/genetic_info.schema.json'),
    require('./schemas/meal_administrations.schema.json'),
    require('./schemas/nca_values.schema.json'),
    require('./schemas/observations.schema.json'),
    require('./schemas/profile_info.schema.json'),
    require('./schemas/reference_info.schema.json'),
  ]
});

addFormats(ajv, "iso-time");
ajv.addKeyword({
  keyword: "meta:enum",
});

async function validateSchema(req) {
  let message = "";
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
    let top_level_schema = require("./schemas/_profile.schema.json");
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
    return { warnings: err }
  }
}
module.exports = validateAllSchemas;
