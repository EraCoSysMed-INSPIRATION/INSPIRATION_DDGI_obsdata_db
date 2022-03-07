# README

## Top-level Schemas

*   [compounds\_and\_analytes](./compounds_and_analytes.md "Array of information for all profile analytes and administered compounds") – `json_schema/compounds_and_analytes`

*   [demographics](./demographics.md "Array storing all demographic parameters for a study population") – `json_schema/demographics`

*   [drug\_administrations](./drug_administration_protocol.md "Array of all drug administration protocols") – `json_schema/drug_administration_protocol`

*   [genetic\_info](./genetic_info.md "Array of genetic information for the respective study population") – `json_schema/genetic_info`

*   [interaction\_ratios](./interaction_ratios.md "Array of interaction ratios for the given profile") – `json_schema/interaction_ratios`

*   [meal\_administrations](./meal_administration_protocol.md "Array of all meal administration protocols") – `json_schema/meal_administration_protocol`

*   [nca\_values](./nca_values.md "Array of NCA values for the given profile") – `json_schema/nca_values`

*   [observations](./observations.md "Array of all observations of the given profile") – `json_schema/observations`

*   [profile\_info](./profile_info.md "Object for basic information on the profile") – `json_schema/profile_info`

*   [reference\_info](./reference_info.md "Object containing information about the source document") – `json_schema/reference_info`

## Other Schemas

### Objects

*   [administration](./drug_administration_protocol-drug_administration-properties-administrations-administration.md "Object describing a single drug administration") – `json_schema/drug_administration_protocol#/items/properties/administrations/items`

*   [administration](./meal_administration_protocol-meal_administration-properties-administrations-administration.md "Object describing a single meal administration") – `json_schema/meal_administration_protocol#/items/properties/administrations/items`

*   [compound\_and\_analyte\_entry](./compounds_and_analytes-compound_and_analyte_entry.md "Object describing all analytes and administered compounds for a given profile") – `json_schema/compounds_and_analytes#/items`

*   [demographic](./demographics-demographic.md "Object storing a singular demographic parameter") – `json_schema/demographics#/items`

*   [drug\_administration](./drug_administration_protocol-drug_administration.md "Drug administration protocol") – `json_schema/drug_administration_protocol#/items`

*   [genetic](./genetic_info-genetic.md "Compound information block") – `json_schema/genetic_info#/items`

*   [interaction\_ratio](./interaction_ratios-interaction_ratio.md) – `json_schema/interaction_ratios#/items`

*   [meal\_administration](./meal_administration_protocol-meal_administration.md "Meal administration protocol") – `json_schema/meal_administration_protocol#/items`

*   [meal\_composition](./meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_composition.md "Composition of the meal in percentages") – `json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/meal_composition`

*   [nca\_value](./nca_values-nca_value.md) – `json_schema/nca_values#/items`

*   [observation](./observations-observations-properties-observations-observation.md "Object describing a single observation") – `json_schema/observations#/items/properties/observations/items`

*   [observations](./observations-observations.md) – `json_schema/observations#/items`

### Arrays

*   [administrations](./drug_administration_protocol-drug_administration-properties-administrations.md "Array of drug administrations per administration protocol") – `json_schema/drug_administration_protocol#/items/properties/administrations`

*   [administrations](./meal_administration_protocol-meal_administration-properties-administrations.md "Array of meal administrations per administration protocol") – `json_schema/meal_administration_protocol#/items/properties/administrations`

*   [observations](./observations-observations-properties-observations.md "Array of all observations of the given profile") – `json_schema/observations#/items/properties/observations`
