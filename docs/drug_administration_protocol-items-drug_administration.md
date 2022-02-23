# drug\_administration Schema

```txt
undefined#/items/0
```

Drug administration protocol. One per administered compound and respective formulation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [drug\_administration\_protocol.schema.json\*](../out/drug_administration_protocol.schema.json "open original schema") |

## 0 Type

`object` ([drug\_administration](drug_administration_protocol-items-drug_administration.md))

# 0 Properties

| Property                                         | Type          | Required | Nullable       | Defined by                                                                                                                                                                |
| :----------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [administrations](#administrations)              | `array`       | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administrations.md "undefined#/items/0/properties/administrations")             |
| [time\_unit](#time_unit)                         | `string`      | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-time_unit.md "undefined#/items/0/properties/time_unit")                         |
| [dose\_unit](#dose_unit)                         | `string`      | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-dose_unit.md "undefined#/items/0/properties/dose_unit")                         |
| [duration\_unit](#duration_unit)                 | `string`      | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-duration_unit.md "undefined#/items/0/properties/duration_unit")                 |
| [administered\_compound](#administered_compound) | `string`      | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administered_compound.md "undefined#/items/0/properties/administered_compound") |
| [formulation](#formulation)                      | `string`      | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-formulation.md "undefined#/items/0/properties/formulation")                     |
| [formulation\_comment](#formulation_comment)     | Not specified | Required | can be null    | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-formulation_comment.md "undefined#/items/0/properties/formulation_comment")     |
| [administration\_route](#administration_route)   | `string`      | Required | cannot be null | [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administration_route.md "undefined#/items/0/properties/administration_route")   |

## administrations

Array of drug administrations per administration protocol. One per administered dose.

`administrations`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled object in drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administrations-items-0.md "check type definition")

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administrations.md "undefined#/items/0/properties/administrations")

### administrations Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled object in drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administrations-items-0.md "check type definition")

## time\_unit

Unit of the time.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-time_unit.md "undefined#/items/0/properties/time_unit")

### time\_unit Type

`string`

## dose\_unit

Unit of the administered dose.

`dose_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-dose_unit.md "undefined#/items/0/properties/dose_unit")

### dose\_unit Type

`string`

## duration\_unit

Unit of the dosing duration.

`duration_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-duration_unit.md "undefined#/items/0/properties/duration_unit")

### duration\_unit Type

`string`

## administered\_compound

Compound name of the administered compound. Must match compound\_name or compound\_alias of compoundInfo.

`administered_compound`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administered_compound.md "undefined#/items/0/properties/administered_compound")

### administered\_compound Type

`string`

## formulation

Formulation of the administered doses, e.g., immediate release tablet

`formulation`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-formulation.md "undefined#/items/0/properties/formulation")

### formulation Type

`string`

## formulation\_comment

Additional information about the formulation, e.g., brand name.

`formulation_comment`

*   is required

*   Type: `null`, the value must be null

*   can be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-formulation_comment.md "undefined#/items/0/properties/formulation_comment")

### formulation\_comment Type

`null`, the value must be null

## administration\_route

Route of the administration, e.g., oral.

`administration_route`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-items-drug_administration-properties-administration_route.md "undefined#/items/0/properties/administration_route")

### administration\_route Type

`string`

### administration\_route Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"oral"`        |             |
| `"iv"`          |             |
| `"transdermal"` |             |
| `"inhalation"`  |             |
