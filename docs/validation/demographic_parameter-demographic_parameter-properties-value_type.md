# Untitled string in demographics Schema

```txt
profile/demographics#/items/properties/value_type
```

Type of the parameter value, e.g., 'mean'.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [demographic\_parameter.schema.json\*](../../out/demographic_parameter.schema.json "open original schema") |

## value\_type Type

`string`

## value\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation                       |
| :-------------- | :-------------------------------- |
| `"mean"`        | arithmetic mean                   |
| `"geomean"`     | geometric mean                    |
| `"sd"`          | arithmetic standard deviation     |
| `"gsd"`         | geometric standard deviation      |
| `"median"`      | median                            |
| `"mode"`        | mode                              |
| `"range_lower"` | lower boundary of the value range |
| `"range_upper"` | upper boundary of the value range |
| `"percentage"`  | percentage                        |
| `"single"`      | single value for individuals      |
| `"count"`       | count                             |
