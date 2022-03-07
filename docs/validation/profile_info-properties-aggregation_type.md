# Untitled string in profile\_info Schema

```txt
#/properties/profile_info#/properties/aggregation_type
```

Type of aggregation, i.e. individual, typical or aggregated.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile\_info.schema.json\*](../../out/schemas/sub-schemas/profile_info.schema.json "open original schema") |

## aggregation\_type Type

`string`

## aggregation\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation                     |
| :------------- | :------------------------------ |
| `"aggregated"` | Aggregated (e.g., mean) profile |
| `"individual"` | Individual profile              |
| `"typical"`    | Typical profile                 |
