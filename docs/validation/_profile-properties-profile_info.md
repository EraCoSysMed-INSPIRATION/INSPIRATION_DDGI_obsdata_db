# profile\_info Schema

```txt
profile/profile_info#/properties/profile_info
```

Object for basic information on the profile.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [\_profile.schema.json\*](../../out/_profile.schema.json "open original schema") |

## profile\_info Type

`object` ([profile\_info](_profile-properties-profile_info.md))

# profile\_info Properties

| Property                               | Type      | Required | Nullable       | Defined by                                                                                                       |
| :------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------- |
| [is\_DDI](#is_ddi)                     | `boolean` | Required | cannot be null | [profile\_info](profile_info-properties-is_ddi.md "profile/profile_info#/properties/is_DDI")                     |
| [is\_DGI](#is_dgi)                     | `boolean` | Required | cannot be null | [profile\_info](profile_info-properties-is_dgi.md "profile/profile_info#/properties/is_DGI")                     |
| [is\_DFI](#is_dfi)                     | `boolean` | Required | cannot be null | [profile\_info](profile_info-properties-is_dfi.md "profile/profile_info#/properties/is_DFI")                     |
| [start\_clocktime](#start_clocktime)   | `string`  | Required | can be null    | [profile\_info](profile_info-properties-start_clocktime.md "profile/profile_info#/properties/start_clocktime")   |
| [profile\_type](#profile_type)         | `string`  | Required | cannot be null | [profile\_info](profile_info-properties-profile_type.md "profile/profile_info#/properties/profile_type")         |
| [aggregation\_type](#aggregation_type) | `string`  | Required | cannot be null | [profile\_info](profile_info-properties-aggregation_type.md "profile/profile_info#/properties/aggregation_type") |

## is\_DDI

The profile is a DDI-profile (i.e., a perpetrator is administered).

`is_DDI`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [profile\_info](profile_info-properties-is_ddi.md "profile/profile_info#/properties/is_DDI")

### is\_DDI Type

`boolean`

## is\_DGI

The profile is a DGI-profile (i.e., the effect of a variant phenotype or genotype on the PK or PD of a compound is analyzed).

`is_DGI`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [profile\_info](profile_info-properties-is_dgi.md "profile/profile_info#/properties/is_DGI")

### is\_DGI Type

`boolean`

## is\_DFI

The profile is a DFI-profile (i.e., the effect of food administration is analyzed).

`is_DFI`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [profile\_info](profile_info-properties-is_dfi.md "profile/profile_info#/properties/is_DFI")

### is\_DFI Type

`boolean`

## start\_clocktime

Clocktime of the start of the study, i.e., time of the first drug administration. All time points (e.g., observations, administrations) should be relative to this time point. Given as hh:mm:ss.

`start_clocktime`

*   is required

*   Type: `string`

*   can be null

*   defined in: [profile\_info](profile_info-properties-start_clocktime.md "profile/profile_info#/properties/start_clocktime")

### start\_clocktime Type

`string`

### start\_clocktime Constraints

**maximum length**: the maximum number of characters for this string is: `8`

**minimum length**: the minimum number of characters for this string is: `8`

**time**: the string must be a time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## profile\_type

Type of the profile, i.e., 'PK' or 'PD'

`profile_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [profile\_info](profile_info-properties-profile_type.md "profile/profile_info#/properties/profile_type")

### profile\_type Type

`string`

### profile\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation     |
| :----- | :-------------- |
| `"pk"` | pharmacokinetic |
| `"pd"` | pharmacodynamic |

## aggregation\_type

Type of aggregation, i.e. individual, typical or aggregated.

`aggregation_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [profile\_info](profile_info-properties-aggregation_type.md "profile/profile_info#/properties/aggregation_type")

### aggregation\_type Type

`string`

### aggregation\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation                     |
| :------------- | :------------------------------ |
| `"aggregated"` | Aggregated (e.g., mean) profile |
| `"individual"` | Individual profile              |
| `"typical"`    | Typical profile                 |
