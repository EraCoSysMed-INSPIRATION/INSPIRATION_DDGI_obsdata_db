# Untitled undefined type in profile\_info Schema

```txt
#/properties/profile_info#/properties/start_clocktime
```

Clocktime of the start of the study, i.e., time of the first drug administration. All time points (e.g., observations, administrations) should be relative to this time point. Given as hh:mm:ss.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [profile\_info.schema.json\*](../../out/schemas/sub-schemas/profile_info.schema.json "open original schema") |

## start\_clocktime Type

`string`

## start\_clocktime Constraints

**maximum length**: the maximum number of characters for this string is: `8`

**minimum length**: the minimum number of characters for this string is: `8`

**time**: the string must be a time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
