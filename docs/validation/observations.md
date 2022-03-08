# observations Schema

```txt
/observations
```

Array of all observations of the given profile.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [observations.schema.json](../../out/observations.schema.json "open original schema") |

## observations Type

`object` ([observations](observations.md))

# observations Properties

| Property                                             | Type     | Required | Nullable       | Defined by                                                                                                             |
| :--------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [analyte](#analyte)                                  | `string` | Required | can be null    | [observations](observations-properties-analyte.md "/observations#/properties/analyte")                                 |
| [observations](#observations)                        | `array`  | Required | cannot be null | [observations](observations-properties-observations.md "/observations#/properties/observations")                       |
| [time\_unit](#time_unit)                             | `string` | Required | cannot be null | [observations](observations-properties-time_unit.md "/observations#/properties/time_unit")                             |
| [observation\_unit](#observation_unit)               | `string` | Required | can be null    | [observations](observations-properties-observation_unit.md "/observations#/properties/observation_unit")               |
| [error\_type](#error_type)                           | `string` | Required | can be null    | [observations](observations-properties-error_type.md "/observations#/properties/error_type")                           |
| [compartment](#compartment)                          | `string` | Required | can be null    | [observations](observations-properties-compartment.md "/observations#/properties/compartment")                         |
| [organ](#organ)                                      | `string` | Required | can be null    | [observations](observations-properties-organ.md "/observations#/properties/organ")                                     |
| [matrix](#matrix)                                    | `string` | Required | can be null    | [observations](observations-properties-matrix.md "/observations#/properties/matrix")                                   |
| [lloq](#lloq)                                        | `number` | Required | can be null    | [observations](observations-properties-lloq.md "/observations#/properties/lloq")                                       |
| [observation\_description](#observation_description) | `string` | Required | can be null    | [observations](observations-properties-observation_description.md "/observations#/properties/observation_description") |

## analyte

Name of the analyte. Must be part of compound\_info as [compound\_name](https://github.com/EraCoSysMed-INSPIRATION/INSPIRATION_DDGI_obsdata_db/blob/master/docs/compound_info-compound_info.md#compound_name) or compound\_alias.

`analyte`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-analyte.md "/observations#/properties/analyte")

### analyte Type

`string`

## observations

Array of all observations of the given profile.

`observations`

*   is required

*   Type: `object[]` ([observation](observations-properties-observations-observation.md))

*   cannot be null

*   defined in: [observations](observations-properties-observations.md "/observations#/properties/observations")

### observations Type

`object[]` ([observation](observations-properties-observations-observation.md))

### observations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## time\_unit

Unit of time point for the observations.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [observations](observations-properties-time_unit.md "/observations#/properties/time_unit")

### time\_unit Type

`string`

### time\_unit Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"s"`   | seconds     |
| `"min"` | minutes     |
| `"h"`   | hours       |
| `"d"`   | days        |
| `"m"`   | months      |
| `"y"`   | years       |

## observation\_unit

Unit of  the observations.

`observation_unit`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-observation_unit.md "/observations#/properties/observation_unit")

### observation\_unit Type

`string`

## error\_type

Type of the error..

`error_type`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-error_type.md "/observations#/properties/error_type")

### error\_type Type

`string`

### error\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation                   |
| :------ | :---------------------------- |
| `"sd"`  | Arithmetic standard deviation |
| `"gsd"` | Geometric standard deviation  |

## compartment

Compartment, where observations were made.

`compartment`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-compartment.md "/observations#/properties/compartment")

### compartment Type

`string`

## organ

Organ or tissue, where observations were made.

`organ`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-organ.md "/observations#/properties/organ")

### organ Type

`string`

## matrix

Matrix where observations were made.

`matrix`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-matrix.md "/observations#/properties/matrix")

### matrix Type

`string`

## lloq

Lower limit of quantification in the same unit as the observations.

`lloq`

*   is required

*   Type: `number`

*   can be null

*   defined in: [observations](observations-properties-lloq.md "/observations#/properties/lloq")

### lloq Type

`number`

## observation\_description

Description of the observation. I.e., Measurements of heart rate.

`observation_description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [observations](observations-properties-observation_description.md "/observations#/properties/observation_description")

### observation\_description Type

`string`
