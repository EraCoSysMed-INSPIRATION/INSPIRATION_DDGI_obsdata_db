# Untitled string in demographics Schema

```txt
undefined#/items/0/properties/value_type
```

Type of the parameter value, e.g., 'mean'.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [demographics.schema.json\*](../out/demographics.schema.json "open original schema") |

## value\_type Type

`string`

## value\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"mean"`        |             |
| `"median"`      |             |
| `"range_lower"` |             |
| `"range_upper"` |             |
| `"percentage"`  |             |
| `"single"`      |             |
| `"sd"`          |             |
| `"gsd"`         |             |
| `"count"`       |             |
