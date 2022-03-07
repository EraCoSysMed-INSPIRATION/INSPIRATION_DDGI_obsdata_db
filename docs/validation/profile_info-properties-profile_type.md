# Untitled string in profile\_info Schema

```txt
#/properties/profile_info#/properties/profile_type
```

Type of the profile, i.e., 'PK' or 'PD'

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile\_info.schema.json\*](../../out/schemas/sub-schemas/profile_info.schema.json "open original schema") |

## profile\_type Type

`string`

## profile\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation     |
| :----- | :-------------- |
| `"pk"` | pharmacokinetic |
| `"pd"` | pharmacodynamic |
