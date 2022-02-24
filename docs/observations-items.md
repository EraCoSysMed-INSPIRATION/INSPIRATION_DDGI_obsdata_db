# Untitled object in observations Schema

```txt
json_schema/observations#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [observations.schema.json\*](../out/observations.schema.json "open original schema") |

## items Type

`object` ([Details](observations-items.md))

# items Properties

| Property                                             | Type     | Required | Nullable       | Defined by                                                                                                                                    |
| :--------------------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [analyte](#analyte)                                  | `string` | Required | can be null    | [observations](observations-items-properties-analyte.md "json_schema/observations#/items/properties/analyte")                                 |
| [observations](#observations)                        | `array`  | Required | cannot be null | [observations](observations-items-properties-observations.md "json_schema/observations#/items/properties/observations")                       |
| [time\_unit](#time_unit)                             | `string` | Required | cannot be null | [observations](observations-items-properties-time_unit.md "json_schema/observations#/items/properties/time_unit")                             |
| [observation\_unit](#observation_unit)               | `string` | Required | can be null    | [observations](observations-items-properties-observation_unit.md "json_schema/observations#/items/properties/observation_unit")               |
| [error\_type](#error_type)                           | `string` | Required | can be null    | [observations](observations-items-properties-error_type.md "json_schema/observations#/items/properties/error_type")                           |
| [compartment](#compartment)                          | `string` | Required | can be null    | [observations](observations-items-properties-compartment.md "json_schema/observations#/items/properties/compartment")                         |
| [organ](#organ)                                      | `string` | Required | can be null    | [observations](observations-items-properties-organ.md "json_schema/observations#/items/properties/organ")                                     |
| [matrix](#matrix)                                    | `string` | Required | can be null    | [observations](observations-items-properties-matrix.md "json_schema/observations#/items/properties/matrix")                                   |
| [lloq](#lloq)                                        | `number` | Required | can be null    | [observations](observations-items-properties-lloq.md "json_schema/observations#/items/properties/lloq")                                       |
| [observation\_description](#observation_description) | `string` | Required | can be null    | [observations](observations-items-properties-observation_description.md "json_schema/observations#/items/properties/observation_description") |

## analyte



`analyte`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-analyte.md "json_schema/observations#/items/properties/analyte")

### analyte Type

`string`

## observations

Array of all observations of the given profile.

`observations`

*   is required

*   Type: `object[]` ([observation](observations-items-properties-observations-observation.md))

*   cannot be null

*   defined in: [observations](observations-items-properties-observations.md "json_schema/observations#/items/properties/observations")

### observations Type

`object[]` ([observation](observations-items-properties-observations-observation.md))

### observations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## time\_unit

Unit of time point for the observations.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [observations](observations-items-properties-time_unit.md "json_schema/observations#/items/properties/time_unit")

### time\_unit Type

`string`

## observation\_unit

Unit of  the observations.

`observation_unit`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-observation_unit.md "json_schema/observations#/items/properties/observation_unit")

### observation\_unit Type

`string`

## error\_type

Type of the error..

`error_type`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-error_type.md "json_schema/observations#/items/properties/error_type")

### error\_type Type

`string`

### error\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"sd"`  |             |
| `"gsd"` |             |

## compartment

Compartment, where observations were made.

`compartment`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-compartment.md "json_schema/observations#/items/properties/compartment")

### compartment Type

`string`

## organ

Organ or tissue, where observations were made.

`organ`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-organ.md "json_schema/observations#/items/properties/organ")

### organ Type

`string`

## matrix

Matrix where observations were made.

`matrix`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-matrix.md "json_schema/observations#/items/properties/matrix")

### matrix Type

`string`

## lloq

Lower limit of quantification in the same unit as the observations.

`lloq`

*   is required

*   Type: `number`

*   can be null

*   defined in: [observations](observations-items-properties-lloq.md "json_schema/observations#/items/properties/lloq")

### lloq Type

`number`

## observation\_description

Description of the observation. I.e., Measurements of heart rate.

`observation_description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-items-properties-observation_description.md "json_schema/observations#/items/properties/observation_description")

### observation\_description Type

`string`