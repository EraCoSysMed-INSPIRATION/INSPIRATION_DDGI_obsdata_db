const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({ discriminator: true });
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const null_check = require("./mapper.json");

addFormats(ajv, "iso-time");
ajv.addKeyword({
  keyword: "meta:enum",
});


async function validateSchema(req, schema, null_check) {
  let message = `Schema '${schema.title}' is valid`;
  let json = req.body[schema.title];
  let validate = ajv.compile(schema);
  let valid = await validate(json);
  if (!valid) {
    message = validate.errors;
  } else if (
    json instanceof Array &&
    null_check[schema.title].checkColumns.length > 0
  ) {
    for (item of json) {
      if (allNull(null_check[schema.title].checkColumns, item)) {
        message = `Bad request. Properties for '${schema.title}' ('${null_check[
          schema.title
        ].checkColumns.join(", ")}') not allowed to be all null!`;
        valid = false;
      }
    }
  } else if (
    typeof json === "object" &&
    null_check[schema.title].checkColumns.length > 0
  ) {
    if (allNull(null_check[schema.title].checkColumns, json)) {
      message = `Bad request. Properties for '${schema.title}' ('${null_check[
        schema.title
      ].checkColumns.join(", ")}') not allowed to be all null!`;
      valid = false;
    }
  }
  return { message: message, isValid: valid };
}

function allTrue(arr) {
  return arr.every((element) => element === true);
}
function allNull(arr, object) {
  return arr.every((element) => object[element] === null);
}

async function validateAllSchemas(req) {
  try {
    let messages = [];
    let warnings = [];
    let valid = [];
    let files = [];
    fs.readdirSync(__dirname + "/schemas/sub-schemas")
      .filter((file) => {
        return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-12) == ".schema.json"
        );
      })
      .forEach((file) => {
        files.push(__dirname + "/schemas/sub-schemas" + file);
      });

    await Promise.all(
      files.map(async (file) => {
        let schema = require(file);
        let title = schema.title;
        let validatedSchema = await validateSchema(req, schema, null_check);
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
