# profile Schema

```txt
profile
```

JSON Object for a single profile. A profile is defined as a series of measurements for a single analyte for a given study population. Measurements of multiple analytes require separate profiles. The structure of a profile is defined below.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [\_profile.schema.json](../../out/_profile.schema.json "open original schema") |

## profile Type

`object` ([profile](_profile.md))

# profile Properties

| Property                                            | Type     | Required | Nullable       | Defined by                                                                                                            |
| :-------------------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [profile\_info](#profile_info)                      | `object` | Required | cannot be null | [profile](_profile-properties-profile_info.md "/profile_info#/properties/profile_info")                               |
| [reference\_info](#reference_info)                  | `object` | Required | cannot be null | [profile](_profile-properties-reference_info.md "/reference_info#/properties/reference_info")                         |
| [compounds\_and\_analytes](#compounds_and_analytes) | `array`  | Optional | cannot be null | [profile](_profile-properties-compounds_and_analytes.md "/compounds_and_analytes#/properties/compounds_and_analytes") |
| [demographics](#demographics)                       | `array`  | Optional | can be null    | [profile](_profile-properties-demographics.md "/demographics#/properties/demographics")                               |
| [genetic\_info](#genetic_info)                      | `array`  | Optional | can be null    | [profile](_profile-properties-genetic_info.md "/genetic_info#/properties/genetic_info")                               |
| [drug\_administrations](#drug_administrations)      | `array`  | Optional | cannot be null | [profile](_profile-properties-drug_administrations.md "/drug_administrations#/properties/drug_administrations")       |
| [meal\_administrations](#meal_administrations)      | `array`  | Optional | can be null    | [profile](_profile-properties-meal_administrations.md "/meal_administrations#/properties/meal_administrations")       |
| [interaction\_ratios](#interaction_ratios)          | `array`  | Optional | can be null    | [profile](_profile-properties-interaction_ratios.md "/interaction_ratios#/properties/interaction_ratios")             |
| [nca\_values](#nca_values)                          | `array`  | Optional | can be null    | [profile](_profile-properties-nca_values.md "/nca_values#/properties/nca_values")                                     |
| [observations](#observations)                       | `object` | Optional | cannot be null | [profile](_profile-properties-observations.md "/observations#/properties/observations")                               |

## profile\_info

Object for basic information on the profile.

`profile_info`

*   is required

*   Type: `object` ([profile\_info](_profile-properties-profile_info.md))

*   cannot be null

*   defined in: [profile](_profile-properties-profile_info.md "/profile_info#/properties/profile_info")

### profile\_info Type

`object` ([profile\_info](_profile-properties-profile_info.md))

## reference\_info

Object containing information about the source document. See [properties](#referenceinfo-properties) for information and requirements on the object properties.

`reference_info`

*   is required

*   Type: `object` ([reference\_info](_profile-properties-reference_info.md))

*   cannot be null

*   defined in: [profile](_profile-properties-reference_info.md "/reference_info#/properties/reference_info")

### reference\_info Type

`object` ([reference\_info](_profile-properties-reference_info.md))

## compounds\_and\_analytes

Array of all compounds and analytes for a given profile.

`compounds_and_analytes`

*   is optional

*   Type: `object[]` ([compound\_analyte](compounds_and_analytes-compound_analyte.md))

*   cannot be null

*   defined in: [profile](_profile-properties-compounds_and_analytes.md "/compounds_and_analytes#/properties/compounds_and_analytes")

### compounds\_and\_analytes Type

`object[]` ([compound\_analyte](compounds_and_analytes-compound_analyte.md))

## demographics

Array of all demographic parameters for the profile.

`demographics`

*   is optional

*   Type: `object[]` ([demographic\_parameter](demographics-demographic_parameter.md))

*   can be null

*   defined in: [profile](_profile-properties-demographics.md "/demographics#/properties/demographics")

### demographics Type

`object[]` ([demographic\_parameter](demographics-demographic_parameter.md))

### demographics Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## genetic\_info

Array of genetic information for the respective study population.

`genetic_info`

*   is optional

*   Type: `object[]` ([genetic](genetic_info-genetic.md))

*   can be null

*   defined in: [profile](_profile-properties-genetic_info.md "/genetic_info#/properties/genetic_info")

### genetic\_info Type

`object[]` ([genetic](genetic_info-genetic.md))

### genetic\_info Constraints

**minimum number of items**: the minimum number of items for this array is: `0`

## drug\_administrations

Array of all drug administration protocol of a given profile. Contains one [object per administration protocol](./drug_administrations-drug_administration.md)

`drug_administrations`

*   is optional

*   Type: `object[]` ([drug\_administration](drug_administrations-drug_administration.md))

*   cannot be null

*   defined in: [profile](_profile-properties-drug_administrations.md "/drug_administrations#/properties/drug_administrations")

### drug\_administrations Type

`object[]` ([drug\_administration](drug_administrations-drug_administration.md))

### drug\_administrations Constraints

**minimum number of items**: the minimum number of items for this array is: `0`

## meal\_administrations

Array containing all meal administrations for a given profile.

`meal_administrations`

*   is optional

*   Type: `object[]` ([meal\_administration](meal_administrations-meal_administration.md))

*   can be null

*   defined in: [profile](_profile-properties-meal_administrations.md "/meal_administrations#/properties/meal_administrations")

### meal\_administrations Type

`object[]` ([meal\_administration](meal_administrations-meal_administration.md))

## interaction\_ratios

Array of interaction ratios for the given profile.

`interaction_ratios`

*   is optional

*   Type: `object[]` ([interaction\_ratio](interaction_ratios-interaction_ratio.md))

*   can be null

*   defined in: [profile](_profile-properties-interaction_ratios.md "/interaction_ratios#/properties/interaction_ratios")

### interaction\_ratios Type

`object[]` ([interaction\_ratio](interaction_ratios-interaction_ratio.md))

## nca\_values

Array of NCA values for the given profile.

`nca_values`

*   is optional

*   Type: `object[]` ([nca\_value](nca_values-nca_value.md))

*   can be null

*   defined in: [profile](_profile-properties-nca_values.md "/nca_values#/properties/nca_values")

### nca\_values Type

`object[]` ([nca\_value](nca_values-nca_value.md))

## observations

Array of all observations of the given profile.

`observations`

*   is optional

*   Type: `object` ([observations](_profile-properties-observations.md))

*   cannot be null

*   defined in: [profile](_profile-properties-observations.md "/observations#/properties/observations")

### observations Type

`object` ([observations](_profile-properties-observations.md))
