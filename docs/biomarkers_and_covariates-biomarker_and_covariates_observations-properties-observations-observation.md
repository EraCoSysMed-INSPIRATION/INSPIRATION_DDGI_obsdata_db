# observation Schema

```txt
json_schema/biomarkers_and_covariates#/items/properties/observations/items
```

Object describing a single biomarker or covariate observation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [biomarkers\_and\_covariates.schema.json\*](../out/biomarkers_and_covariates.schema.json "open original schema") |

## items Type

`object` ([observation](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation.md))

# items Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                   |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [time](#time)                                             | `number`  | Optional | cannot be null | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-time.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/time")                                           |
| [observation\_numeric](#observation_numeric)              | `number`  | Optional | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_numeric.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_numeric")             |
| [observation\_numeric\_error](#observation_numeric_error) | `number`  | Optional | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_numeric_error.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_numeric_error") |
| [observation\_blq](#observation_blq)                      | `boolean` | Optional | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_blq.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_blq")                     |
| [observation\_string](#observation_string)                | `string`  | Optional | can be null    | [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_string.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_string")               |

## time

Time point of the biomarker or covariate observation.

`time`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-time.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/time")

### time Type

`number`

### time Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## observation\_numeric

Numeric value of the biomarker or covariate observation.

`observation_numeric`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_numeric.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_numeric")

### observation\_numeric Type

`number`

### observation\_numeric Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## observation\_numeric\_error

Error of the value of the biomarker or covariate observation.

`observation_numeric_error`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_numeric_error.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_numeric_error")

### observation\_numeric\_error Type

`number`

### observation\_numeric\_error Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## observation\_blq

Biomarker or covariate observation is below the LLOQ.

`observation_blq`

*   is optional

*   Type: `boolean`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_blq.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_blq")

### observation\_blq Type

`boolean`

## observation\_string

Non-numeric value of the biomarker or covariate observation.

`observation_string`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [biomarkers\_and\_covariates](biomarkers_and_covariates-biomarker_and_covariates_observations-properties-observations-observation-properties-observation_string.md "json_schema/biomarkers_and_covariates#/items/properties/observations/items/properties/observation_string")

### observation\_string Type

`string`
