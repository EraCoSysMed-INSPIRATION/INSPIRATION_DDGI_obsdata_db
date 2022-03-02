# biomarker\_and\_covariates\_observations Schema

```txt
json_schema/biomarkers_and_covariates#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [biomarkers\_and\_covariates.schema.json\*](../out/biomarkers_and_covariates.schema.json "open original schema") |

## items Type

`object` ([biomarker\_and\_covariates\_observations](biomarkers_and_covariates-biomarker_and_covariates_observations.md))

# items Properties

| Property                                             | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                             |
| :--------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [biomarker](#biomarker)                              | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-biomarker.md "json_schema/biomarkers_and_covariates#/items/properties/biomarker")                             |
| [observations](#observations)                        | `array`  | Required | cannot be null | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations.md "json_schema/biomarkers_and_covariates#/items/properties/observations")                       |
| [time\_unit](#time_unit)                             | `string` | Required | cannot be null | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-time_unit.md "json_schema/biomarkers_and_covariates#/items/properties/time_unit")                             |
| [observation\_unit](#observation_unit)               | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observation_unit.md "json_schema/biomarkers_and_covariates#/items/properties/observation_unit")               |
| [error\_type](#error_type)                           | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-error_type.md "json_schema/biomarkers_and_covariates#/items/properties/error_type")                           |
| [compartment](#compartment)                          | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-compartment.md "json_schema/biomarkers_and_covariates#/items/properties/compartment")                         |
| [organ](#organ)                                      | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-organ.md "json_schema/biomarkers_and_covariates#/items/properties/organ")                                     |
| [matrix](#matrix)                                    | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-matrix.md "json_schema/biomarkers_and_covariates#/items/properties/matrix")                                   |
| [lloq](#lloq)                                        | `number` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-lloq.md "json_schema/biomarkers_and_covariates#/items/properties/lloq")                                       |
| [observation\_description](#observation_description) | `string` | Required | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observation_description.md "json_schema/biomarkers_and_covariates#/items/properties/observation_description") |

## biomarker

Name of the biomarker or covariate.

`biomarker`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-biomarker.md "json_schema/biomarkers_and_covariates#/items/properties/biomarker")

### biomarker Type

`string`

## observations

Array of all biomarker and covariate observations of the given profile.

`observations`

*   is required

*   Type: `object[]` ([observation](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation.md))

*   cannot be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations.md "json_schema/biomarkers_and_covariates#/items/properties/observations")

### observations Type

`object[]` ([observation](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation.md))

### observations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## time\_unit

Unit of time point for the biomarker or covariate observations.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-time_unit.md "json_schema/biomarkers_and_covariates#/items/properties/time_unit")

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

Unit of  the biomarker or covariate observations.

`observation_unit`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observation_unit.md "json_schema/biomarkers_and_covariates#/items/properties/observation_unit")

### observation\_unit Type

`string`

## error\_type

Type of the error.

`error_type`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-error_type.md "json_schema/biomarkers_and_covariates#/items/properties/error_type")

### error\_type Type

`string`

### error\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation                   |
| :------ | :---------------------------- |
| `"sd"`  | Arithmetic standard deviation |
| `"gsd"` | Geometric standard deviation  |

## compartment

Compartment, where the biomarker or covariate observations were made.

`compartment`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-compartment.md "json_schema/biomarkers_and_covariates#/items/properties/compartment")

### compartment Type

`string`

## organ

Organ or tissue, where the biomarker or covariate observations were made.

`organ`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-organ.md "json_schema/biomarkers_and_covariates#/items/properties/organ")

### organ Type

`string`

## matrix

Matrix where the biomarker or covariate observations were made.

`matrix`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-matrix.md "json_schema/biomarkers_and_covariates#/items/properties/matrix")

### matrix Type

`string`

## lloq

Lower limit of quantification in the same unit as the biomarker or covariate observations.

`lloq`

*   is required

*   Type: `number`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-lloq.md "json_schema/biomarkers_and_covariates#/items/properties/lloq")

### lloq Type

`number`

## observation\_description

Description of the biomarker or covariate observation. I.e., Measurements of heart rate.

`observation_description`

*   is required

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observation_description.md "json_schema/biomarkers_and_covariates#/items/properties/observation_description")

### observation\_description Type

`string`
