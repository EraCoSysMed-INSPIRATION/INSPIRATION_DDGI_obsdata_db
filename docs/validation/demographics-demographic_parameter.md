# demographic\_parameter Schema

```txt
profile/demographics#/items
```

Object storing a singular demographic parameter.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [demographics.schema.json\*](../../out/demographics.schema.json "open original schema") |

## items Type

`object` ([demographic\_parameter](demographics-demographic_parameter.md))

## items Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

# items Properties

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                                            |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| [parameter](#parameter)          | `string` | Required | cannot be null | [demographics](demographics-demographic_parameter-properties-parameter.md "profile/demographics#/items/properties/parameter")         |
| [value\_type](#value_type)       | `string` | Required | cannot be null | [demographics](demographics-demographic_parameter-properties-value_type.md "profile/demographics#/items/properties/value_type")       |
| [value\_numeric](#value_numeric) | `number` | Required | can be null    | [demographics](demographics-demographic_parameter-properties-value_numeric.md "profile/demographics#/items/properties/value_numeric") |
| [value\_unit](#value_unit)       | `number` | Required | can be null    | [demographics](demographics-demographic_parameter-properties-value_unit.md "profile/demographics#/items/properties/value_unit")       |
| [value\_string](#value_string)   | `string` | Required | can be null    | [demographics](demographics-demographic_parameter-properties-value_string.md "profile/demographics#/items/properties/value_string")   |
| [unit](#unit)                    | `string` | Optional | can be null    | [demographics](demographics-demographic_parameter-properties-unit.md "profile/demographics#/items/properties/unit")                   |
| [description](#description)      | `string` | Required | can be null    | [demographics](demographics-demographic_parameter-properties-description.md "profile/demographics#/items/properties/description")     |

## parameter

Name of the parameter, e.g., 'age'.

`parameter`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-demographic_parameter-properties-parameter.md "profile/demographics#/items/properties/parameter")

### parameter Type

`string`

## value\_type

Type of the parameter value, e.g., 'mean'.

`value_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-demographic_parameter-properties-value_type.md "profile/demographics#/items/properties/value_type")

### value\_type Type

`string`

### value\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation                       |
| :-------------- | :-------------------------------- |
| `"mean"`        | arithmetic mean                   |
| `"geomean"`     | geometric mean                    |
| `"sd"`          | arithmetic standard deviation     |
| `"gsd"`         | geometric standard deviation      |
| `"median"`      | median                            |
| `"mode"`        | mode                              |
| `"range_lower"` | lower boundary of the value range |
| `"range_upper"` | upper boundary of the value range |
| `"percentage"`  | percentage                        |
| `"single"`      | single value for individuals      |
| `"count"`       | count                             |

## value\_numeric

Numeric value of the parameter value, e.g., 'mean'.

`value_numeric`

*   is required

*   Type: `number`

*   can be null

*   defined in: [demographics](demographics-demographic_parameter-properties-value_numeric.md "profile/demographics#/items/properties/value_numeric")

### value\_numeric Type

`number`

## value\_unit

Unit of the parameter value, e.g., 'years'.

`value_unit`

*   is required

*   Type: `number`

*   can be null

*   defined in: [demographics](demographics-demographic_parameter-properties-value_unit.md "profile/demographics#/items/properties/value_unit")

### value\_unit Type

`number`

## value\_string

Non-numeric value of the parameter value.

`value_string`

*   is required

*   Type: `string`

*   can be null

*   defined in: [demographics](demographics-demographic_parameter-properties-value_string.md "profile/demographics#/items/properties/value_string")

### value\_string Type

`string`

## unit

Unit of the parameter value, e.g., 'years'.

`unit`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [demographics](demographics-demographic_parameter-properties-unit.md "profile/demographics#/items/properties/unit")

### unit Type

`string`

## description

Additional information about the parameter.

`description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [demographics](demographics-demographic_parameter-properties-description.md "profile/demographics#/items/properties/description")

### description Type

`string`
