# Untitled undefined type in biomarkers\_and\_covariates Schema

```txt
json_schema/biomarkers_and_covariates#/items/properties/error_type
```

Type of the error.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [biomarkers\_and\_covariates.schema.json\*](../out/biomarkers_and_covariates.schema.json "open original schema") |

## error\_type Type

`string`

## error\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation                   |
| :------ | :---------------------------- |
| `"sd"`  | Arithmetic standard deviation |
| `"gsd"` | Geometric standard deviation  |
