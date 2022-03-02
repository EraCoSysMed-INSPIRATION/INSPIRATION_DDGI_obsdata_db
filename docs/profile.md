# profile Schema

```txt
json_schema/profile
```

Top level object containing all information about a given profile.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [profile.schema.json](../out/profile.schema.json "open original schema") |

## profile Type

`object` ([profile](profile.md))

# profile Properties

| Property                           | Type     | Required | Nullable       | Defined by                                                                                              |
| :--------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------ |
| [profile\_info](#profile_info)     | `object` | Optional | cannot be null | [profile](profile-properties-profile_info.md "json_schema/profile_info#/properties/profile_info")       |
| [reference\_info](#reference_info) | `object` | Optional | cannot be null | [profile](profile-properties-reference_info.md "json_schema/reference_info#/properties/reference_info") |
| [compound\_infos](#compound_infos) | `array`  | Optional | can be null    | [profile](profile-properties-compound_infos.md "json_schema/compound_info#/properties/compound_infos")  |
| [demographics](#demographics)      | `array`  | Optional | cannot be null | [profile](profile-properties-demographics.md "json_schema/demographics#/properties/demographics")       |

## profile\_info

Object for basic information on the profile.

`profile_info`

*   is optional

*   Type: `object` ([profile\_info](profile-properties-profile_info.md))

*   cannot be null

*   defined in: [profile](profile-properties-profile_info.md "json_schema/profile_info#/properties/profile_info")

### profile\_info Type

`object` ([profile\_info](profile-properties-profile_info.md))

## reference\_info

Object containing information about the source document.

`reference_info`

*   is optional

*   Type: `object` ([reference\_info](profile-properties-reference_info.md))

*   cannot be null

*   defined in: [profile](profile-properties-reference_info.md "json_schema/reference_info#/properties/reference_info")

### reference\_info Type

`object` ([reference\_info](profile-properties-reference_info.md))

## compound\_infos

Array of compound information for all profile compounds.

`compound_infos`

*   is optional

*   Type: `object[]` ([compound\_info](compound_info-compound_info.md))

*   can be null

*   defined in: [profile](profile-properties-compound_infos.md "json_schema/compound_info#/properties/compound_infos")

### compound\_infos Type

`object[]` ([compound\_info](compound_info-compound_info.md))

### compound\_infos Constraints

**minimum number of items**: the minimum number of items for this array is: `0`

## demographics

Array storing all demographic parameter for a study population.

`demographics`

*   is optional

*   Type: `object[]` ([demographic](demographics-demographic.md))

*   cannot be null

*   defined in: [profile](profile-properties-demographics.md "json_schema/demographics#/properties/demographics")

### demographics Type

`object[]` ([demographic](demographics-demographic.md))

### demographics Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
