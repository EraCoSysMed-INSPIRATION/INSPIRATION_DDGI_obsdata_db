# nca\_value Schema

```txt
/nca_values#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [nca\_values.schema.json\*](../../out/nca_values.schema.json "open original schema") |

## items Type

`object` ([nca\_value](nca_values-nca_value.md))

# items Properties

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                    |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------ |
| [parameter](#parameter)          | `string` | Required | cannot be null | [nca\_values](nca_values-nca_value-properties-parameter.md "/nca_values#/items/properties/parameter")         |
| [value\_numeric](#value_numeric) | `number` | Required | can be null    | [nca\_values](nca_values-nca_value-properties-value_numeric.md "/nca_values#/items/properties/value_numeric") |
| [error\_value](#error_value)     | `number` | Required | can be null    | [nca\_values](nca_values-nca_value-properties-error_value.md "/nca_values#/items/properties/error_value")     |
| [value\_unit](#value_unit)       | `string` | Required | can be null    | [nca\_values](nca_values-nca_value-properties-value_unit.md "/nca_values#/items/properties/value_unit")       |
| [error\_type](#error_type)       | `string` | Required | can be null    | [nca\_values](nca_values-nca_value-properties-error_type.md "/nca_values#/items/properties/error_type")       |
| [comment](#comment)              | `string` | Required | can be null    | [nca\_values](nca_values-nca_value-properties-comment.md "/nca_values#/items/properties/comment")             |

## parameter

NCA parameter name such as AUC.

`parameter`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [nca\_values](nca_values-nca_value-properties-parameter.md "/nca_values#/items/properties/parameter")

### parameter Type

`string`

## value\_numeric

Value of the NCA-parameter.

`value_numeric`

*   is required

*   Type: `number`

*   can be null

*   defined in: [nca\_values](nca_values-nca_value-properties-value_numeric.md "/nca_values#/items/properties/value_numeric")

### value\_numeric Type

`number`

## error\_value

Error of the NCA-parameter value.

`error_value`

*   is required

*   Type: `number`

*   can be null

*   defined in: [nca\_values](nca_values-nca_value-properties-error_value.md "/nca_values#/items/properties/error_value")

### error\_value Type

`number`

## value\_unit

Unit of the NCA-parameter.

`value_unit`

*   is required

*   Type: `string`

*   can be null

*   defined in: [nca\_values](nca_values-nca_value-properties-value_unit.md "/nca_values#/items/properties/value_unit")

### value\_unit Type

`string`

## error\_type

Type of the error..

> also used in observations, biomarkers\_and\_covariates, interaction\_ratio

`error_type`

*   is required

*   Type: `string`

*   can be null

*   defined in: [nca\_values](nca_values-nca_value-properties-error_type.md "/nca_values#/items/properties/error_type")

### error\_type Type

`string`

### error\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation                   |
| :------ | :---------------------------- |
| `"sd"`  | Arithmetic standard deviation |
| `"gsd"` | Geometric standard deviation  |
| `"sem"` | standard error of the mean    |
| `"p95"` | 95th percentile               |
| `"cv"`  | Coefficient of variation      |

## comment

Description of the nca value.

`comment`

*   is required

*   Type: `string`

*   can be null

*   defined in: [nca\_values](nca_values-nca_value-properties-comment.md "/nca_values#/items/properties/comment")

### comment Type

`string`
