# Untitled undefined type in interaction\_ratios Schema

```txt
json_schema/interaction_ratios#/items/properties/error_type
```

Type of the error.

> also used in observations, biomarkers\_and\_covariates, interaction\_ratio

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [interaction\_ratios.schema.json\*](../../out/interaction_ratios.schema.json "open original schema") |

## error\_type Type

`string`

## error\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation                   |
| :------ | :---------------------------- |
| `"sd"`  | Arithmetic standard deviation |
| `"gsd"` | Geometric standard deviation  |
| `"sem"` | standard error of the mean    |
| `"p95"` | 95th percentile               |
| `"cv"`  | Coefficient of variation      |
