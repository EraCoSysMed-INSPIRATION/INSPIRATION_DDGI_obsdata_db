# Untitled string in compounds\_and\_analytes Schema

```txt
json_schema/compounds_and_analytes#/items/properties/category
```

Category of the analyte.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [compounds\_and\_analytes.schema.json\*](../out/compounds_and_analytes.schema.json "open original schema") |

## category Type

`string`

## category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation                                                     |
| :------------------------ | :-------------------------------------------------------------- |
| `"compound (exogenous)"`  | The analyte is a xenobiotic, such as metoprolol.                |
| `"compound (endogenous)"` | The analyte is an endogenous compound, such as CRP.             |
| `"pd parameter"`          | The analyte is a pharmacodynamic parameter, such as heart rate. |
| `"covariate"`             | The analyte is a covariate such as creatinine clearance.        |
