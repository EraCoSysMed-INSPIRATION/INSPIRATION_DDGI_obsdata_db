# Untitled string in nca\_values Schema

```txt
json_schema/nca_values#/items/properties/parameter
```

NCA parameter name.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [nca\_values.schema.json\*](../out/nca_values.schema.json "open original schema") |

## parameter Type

`string`

## parameter Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation                |
| :------- | :------------------------- |
| `"AUC"`  | Area under the curve       |
| `"Cmax"` | Peak concentration         |
| `"Css"`  | Steady-state concentration |
