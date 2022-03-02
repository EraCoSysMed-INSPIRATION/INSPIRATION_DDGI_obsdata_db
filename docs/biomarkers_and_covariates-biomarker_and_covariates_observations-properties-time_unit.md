# Untitled string in biomarkers\_and\_covariates Schema

```txt
json_schema/biomarkers_and_covariates#/items/properties/time_unit
```

Unit of time point for the biomarker or covariate observations.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [biomarkers\_and\_covariates.schema.json\*](../out/biomarkers_and_covariates.schema.json "open original schema") |

## time\_unit Type

`string`

## time\_unit Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"s"`   | seconds     |
| `"min"` | minutes     |
| `"h"`   | hours       |
| `"d"`   | days        |
| `"m"`   | months      |
| `"y"`   | years       |
