# drug\_administration Schema

```txt
json_schema/drug_administration_protocol#/items
```

Drug administration protocol. One per administered compound and respective formulation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [drug\_administrations.schema.json\*](../../out/schemas/sub-schemas/drug_administrations.schema.json "open original schema") |

## items Type

`object` ([drug\_administration](drug_administrations-drug_administration.md))

# items Properties

| Property                                         | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :----------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [administrations](#administrations)              | `array`  | Required | cannot be null | [drug\_administrations](drug_administrations-drug_administration-properties-administrations.md "json_schema/drug_administration_protocol#/items/properties/administrations")             |
| [time\_unit](#time_unit)                         | `string` | Required | cannot be null | [drug\_administrations](drug_administrations-drug_administration-properties-time_unit.md "json_schema/drug_administration_protocol#/items/properties/time_unit")                         |
| [dose\_unit](#dose_unit)                         | `string` | Required | cannot be null | [drug\_administrations](drug_administrations-drug_administration-properties-dose_unit.md "json_schema/drug_administration_protocol#/items/properties/dose_unit")                         |
| [duration\_unit](#duration_unit)                 | `string` | Required | can be null    | [drug\_administrations](drug_administrations-drug_administration-properties-duration_unit.md "json_schema/drug_administration_protocol#/items/properties/duration_unit")                 |
| [administered\_compound](#administered_compound) | `string` | Required | cannot be null | [drug\_administrations](drug_administrations-drug_administration-properties-administered_compound.md "json_schema/drug_administration_protocol#/items/properties/administered_compound") |
| [formulation](#formulation)                      | `string` | Required | can be null    | [drug\_administrations](drug_administrations-drug_administration-properties-formulation.md "json_schema/drug_administration_protocol#/items/properties/formulation")                     |
| [formulation\_comment](#formulation_comment)     | `string` | Required | can be null    | [drug\_administrations](drug_administrations-drug_administration-properties-formulation_comment.md "json_schema/drug_administration_protocol#/items/properties/formulation_comment")     |
| [administration\_route](#administration_route)   | `string` | Required | cannot be null | [drug\_administrations](drug_administrations-drug_administration-properties-administration_route.md "json_schema/drug_administration_protocol#/items/properties/administration_route")   |

## administrations

Array of drug administrations per administration protocol. One per administered dose.

`administrations`

*   is required

*   Type: `object[]` ([administration](drug_administrations-drug_administration-properties-administrations-administration.md))

*   cannot be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-administrations.md "json_schema/drug_administration_protocol#/items/properties/administrations")

### administrations Type

`object[]` ([administration](drug_administrations-drug_administration-properties-administrations-administration.md))

## time\_unit

Unit of the time.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-time_unit.md "json_schema/drug_administration_protocol#/items/properties/time_unit")

### time\_unit Type

`string`

## dose\_unit

Unit of the administered dose.

`dose_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-dose_unit.md "json_schema/drug_administration_protocol#/items/properties/dose_unit")

### dose\_unit Type

`string`

## duration\_unit

Unit of the dosing duration.

`duration_unit`

*   is required

*   Type: `string`

*   can be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-duration_unit.md "json_schema/drug_administration_protocol#/items/properties/duration_unit")

### duration\_unit Type

`string`

## administered\_compound

Compound name of the administered compound. Must match compound\_name or compound\_alias of compoundInfo.

`administered_compound`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-administered_compound.md "json_schema/drug_administration_protocol#/items/properties/administered_compound")

### administered\_compound Type

`string`

## formulation

Formulation of the administered doses, e.g., immediate release tablet

`formulation`

*   is required

*   Type: `string`

*   can be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-formulation.md "json_schema/drug_administration_protocol#/items/properties/formulation")

### formulation Type

`string`

## formulation\_comment

Additional information about the formulation, e.g., brand name.

`formulation_comment`

*   is required

*   Type: `string`

*   can be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-formulation_comment.md "json_schema/drug_administration_protocol#/items/properties/formulation_comment")

### formulation\_comment Type

`string`

## administration\_route

Route of the administration, e.g., oral.

`administration_route`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [drug\_administrations](drug_administrations-drug_administration-properties-administration_route.md "json_schema/drug_administration_protocol#/items/properties/administration_route")

### administration\_route Type

`string`

### administration\_route Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation                          |
| :-------------- | :----------------------------------- |
| `"oral"`        | Drug was administered per os.        |
| `"iv"`          | Drug was administered intravenously. |
| `"transdermal"` | Drug was administered via the skin.  |
| `"inhalation"`  | Drug was inhaled.                    |
