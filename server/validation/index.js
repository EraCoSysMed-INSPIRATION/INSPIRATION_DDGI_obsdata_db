const Ajv = require("ajv");
const ajv = new Ajv();
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

async function validateSchema(req, schema) {
  let message = `Schema '${schema.title}' is valid`;
  let json = req.body[schema.title];
  let validate = ajv.compile(schema);
  let valid = await validate(json);
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
    let messages = [];
    let warnings = [];
    let valid = [];
    let files = [];
    fs.readdirSync(__dirname + "/json_schema")
      .filter((file) => {
        return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-12) == "-schema.json"
        );
      })
      .forEach((file) => {
        files.push(__dirname + "/json_schema/" + file);
      });

    await Promise.all(
      files.map(async (file) => {
        let schema = require(file);
        let title = schema.title;
        let validatedSchema = await validateSchema(req, schema);
        if (validatedSchema.isValid) {
          messages.push({
            schema: title,
            isValid: validatedSchema.isValid,
            messages: validatedSchema.message,
          });
        } else {
          warnings.push({
            schema: title,
            isValid: validatedSchema.isValid,
            messages: validatedSchema.message,
          });
        }
        valid.push(validatedSchema.isValid);
      })
    );
    return { warnings: warnings, messages: messages, allValid: allTrue(valid) };
  } catch (err) {
    console.log(err);
  }
}
module.exports = validateAllSchemas;
