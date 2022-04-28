# interaction\_ratio Schema

```txt
/interaction_ratios#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [interaction\_ratios.schema.json\*](../../out/interaction_ratios.schema.json "open original schema") |

## items Type

`object` ([interaction\_ratio](interaction_ratios-interaction_ratio.md))

# items Properties

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                          |
| :------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ratio\_type](#ratio_type)             | `string` | Required | cannot be null | [interaction\_ratios](interaction_ratios-interaction_ratio-properties-ratio_type.md "/interaction_ratios#/items/properties/ratio_type")             |
| [interaction\_type](#interaction_type) | `string` | Required | cannot be null | [interaction\_ratios](interaction_ratios-interaction_ratio-properties-interaction_type.md "/interaction_ratios#/items/properties/interaction_type") |
| [value](#value)                        | `number` | Required | can be null    | [interaction\_ratios](interaction_ratios-interaction_ratio-properties-value.md "/interaction_ratios#/items/properties/value")                       |
| [error\_value](#error_value)           | `number` | Required | can be null    | [interaction\_ratios](interaction_ratios-interaction_ratio-properties-error_value.md "/interaction_ratios#/items/properties/error_value")           |
| [error\_type](#error_type)             | `string` | Required | can be null    | [interaction\_ratios](interaction_ratios-interaction_ratio-properties-error_type.md "/interaction_ratios#/items/properties/error_type")             |
| [description](#description)            | `string` | Required | can be null    | [interaction\_ratios](interaction_ratios-interaction_ratio-properties-description.md "/interaction_ratios#/items/properties/description")           |

## ratio\_type

Type of ratio.

`ratio_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [interaction\_ratios](interaction_ratios-interaction_ratio-properties-ratio_type.md "/interaction_ratios#/items/properties/ratio_type")

### ratio\_type Type

`string`

### ratio\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation          |
| :------- | :------------------- |
| `"AUC"`  | Area under the curve |
| `"Cmax"` | Peak concentration   |

## interaction\_type

Type of interaction.

`interaction_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [interaction\_ratios](interaction_ratios-interaction_ratio-properties-interaction_type.md "/interaction_ratios#/items/properties/interaction_type")

### interaction\_type Type

`string`

### interaction\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation           |
| :------ | :-------------------- |
| `"DDI"` | Drug-drug interaction |
| `"DGI"` | Drug-gene interaction |
| `"DFI"` | Drug-food interaction |

## value

Value of the NCA-parameter.

`value`

*   is required

*   Type: `number`

*   can be null

*   defined in: [interaction\_ratios](interaction_ratios-interaction_ratio-properties-value.md "/interaction_ratios#/items/properties/value")

### value Type

`number`

## error\_value

Error of the NCA-parameter value.

`error_value`

*   is required

*   Type: `number`

*   can be null

*   defined in: [interaction\_ratios](interaction_ratios-interaction_ratio-properties-error_value.md "/interaction_ratios#/items/properties/error_value")

### error\_value Type

`number`

## error\_type

Type of the error.

> also used in observations, biomarkers\_and\_covariates, interaction\_ratio

`error_type`

*   is required

*   Type: `string`

*   can be null

*   defined in: [interaction\_ratios](interaction_ratios-interaction_ratio-properties-error_type.md "/interaction_ratios#/items/properties/error_type")

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

## description

Description of the nca value.

`description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [interaction\_ratios](interaction_ratios-interaction_ratio-properties-description.md "/interaction_ratios#/items/properties/description")

### description Type

`string`
