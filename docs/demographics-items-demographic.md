# demographic Schema

```txt
undefined#/items/0
```

Object storing a singular demographic parameter.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [demographics.schema.json\*](../out/demographics.schema.json "open original schema") |

## 0 Type

`object` ([demographic](demographics-items-demographic.md))

# 0 Properties

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                               |
| :------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [parameter](#parameter)          | `string` | Required | cannot be null | [demographics](demographics-items-demographic-properties-parameter.md "undefined#/items/0/properties/parameter")         |
| [value\_type](#value_type)       | `string` | Required | cannot be null | [demographics](demographics-items-demographic-properties-value_type.md "undefined#/items/0/properties/value_type")       |
| [value\_numeric](#value_numeric) | `number` | Required | cannot be null | [demographics](demographics-items-demographic-properties-value_numeric.md "undefined#/items/0/properties/value_numeric") |
| [value\_string](#value_string)   | `string` | Required | cannot be null | [demographics](demographics-items-demographic-properties-value_string.md "undefined#/items/0/properties/value_string")   |
| [value\_unit](#value_unit)       | `string` | Required | cannot be null | [demographics](demographics-items-demographic-properties-value_unit.md "undefined#/items/0/properties/value_unit")       |
| [value\_comment](#value_comment) | `string` | Required | cannot be null | [demographics](demographics-items-demographic-properties-value_comment.md "undefined#/items/0/properties/value_comment") |

## parameter

Name of the parameter, e.g., 'age'.

`parameter`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-items-demographic-properties-parameter.md "undefined#/items/0/properties/parameter")

### parameter Type

`string`

## value\_type

Type of the parameter value, e.g., 'mean'.

`value_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-items-demographic-properties-value_type.md "undefined#/items/0/properties/value_type")

### value\_type Type

`string`

### value\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"mean"`        |             |
| `"median"`      |             |
| `"range_lower"` |             |
| `"range_upper"` |             |
| `"percentage"`  |             |
| `"single"`      |             |
| `"sd"`          |             |
| `"gsd"`         |             |
| `"count"`       |             |

## value\_numeric

Numeric value of the parameter value, e.g., 'mean'.

`value_numeric`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [demographics](demographics-items-demographic-properties-value_numeric.md "undefined#/items/0/properties/value_numeric")

### value\_numeric Type

`number`

## value\_string

Non-numeric value of the parameter value.

`value_string`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-items-demographic-properties-value_string.md "undefined#/items/0/properties/value_string")

### value\_string Type

`string`

## value\_unit

Unit of the parameter value, e.g., 'years'.

`value_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-items-demographic-properties-value_unit.md "undefined#/items/0/properties/value_unit")

### value\_unit Type

`string`

## value\_comment

Additional information about the parameter.

`value_comment`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [demographics](demographics-items-demographic-properties-value_comment.md "undefined#/items/0/properties/value_comment")

### value\_comment Type

`string`
