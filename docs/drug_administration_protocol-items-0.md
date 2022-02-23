# Untitled object in drugAdministrations Schema

```txt
undefined#/items/0
```

Drug administration protocol. One per administered compound and respective formulation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [drug\_administration\_protocol.schema.json\*](../out/drug_administration_protocol.schema.json "open original schema") |

## 0 Type

`object` ([Details](drug_administration_protocol-items-0.md))

# 0 Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                          |
| :-------------------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [administrations](#administrations)           | `array`       | Required | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-administrations.md "undefined#/items/0/properties/administrations")           |
| [timeUnit](#timeunit)                         | `string`      | Optional | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-timeunit.md "undefined#/items/0/properties/timeUnit")                         |
| [doseUnit](#doseunit)                         | `string`      | Optional | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-doseunit.md "undefined#/items/0/properties/doseUnit")                         |
| [durationUnit](#durationunit)                 | `string`      | Optional | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-durationunit.md "undefined#/items/0/properties/durationUnit")                 |
| [administeredCompound](#administeredcompound) | `string`      | Optional | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-administeredcompound.md "undefined#/items/0/properties/administeredCompound") |
| [formulation](#formulation)                   | `string`      | Required | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-formulation.md "undefined#/items/0/properties/formulation")                   |
| [formulationComment](#formulationcomment)     | Not specified | Optional | can be null    | [drugAdministrations](drug_administration_protocol-items-0-properties-formulationcomment.md "undefined#/items/0/properties/formulationComment")     |
| [administrationRoute](#administrationroute)   | `string`      | Optional | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-administrationroute.md "undefined#/items/0/properties/administrationRoute")   |

## administrations

Array of drug administrations per administration protocol. One per administered dose.

`administrations`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled object in drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0.md "check type definition")

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-administrations.md "undefined#/items/0/properties/administrations")

### administrations Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled object in drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0.md "check type definition")

## timeUnit

Unit of the time.

`timeUnit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-timeunit.md "undefined#/items/0/properties/timeUnit")

### timeUnit Type

`string`

## doseUnit

Unit of the administered dose.

`doseUnit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-doseunit.md "undefined#/items/0/properties/doseUnit")

### doseUnit Type

`string`

## durationUnit

Unit of the dosing duration.

`durationUnit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-durationunit.md "undefined#/items/0/properties/durationUnit")

### durationUnit Type

`string`

## administeredCompound

Compound name of the administered compound. Must match compound\_name or compound\_alias of compoundInfo.

`administeredCompound`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-administeredcompound.md "undefined#/items/0/properties/administeredCompound")

### administeredCompound Type

`string`

## formulation

Formulation of the administered doses, e.g., immediate release tablet

`formulation`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-formulation.md "undefined#/items/0/properties/formulation")

### formulation Type

`string`

## formulationComment

Additional information about the formulation, e.g., brand name.

`formulationComment`

*   is optional

*   Type: `null`, the value must be null

*   can be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-formulationcomment.md "undefined#/items/0/properties/formulationComment")

### formulationComment Type

`null`, the value must be null

## administrationRoute



`administrationRoute`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-administrationroute.md "undefined#/items/0/properties/administrationRoute")

### administrationRoute Type

`string`

### administrationRoute Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"oral"`        |             |
| `"iv"`          |             |
| `"transdermal"` |             |
| `"inhalation"`  |             |
