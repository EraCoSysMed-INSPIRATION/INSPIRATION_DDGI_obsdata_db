# README

## Top-level Schemas

*   [compound\_infos](./compound_info.md "Array of compound information for all profile compounds") – `json_schema/compound_info`

*   [demographics](./demographics.md "Array storing all demographic parameter for a study population") – `json_schema/demographics`

*   [drug\_administrations](./drug_administration_protocol.md "Array of all drug administration protocols") – `json_schema/drug_administration_protocol`

*   [observations](./observations.md "Array of all observations of the given profile") – `json_schema/observations`

*   [profile\_info](./profile_info.md "Object for basic information on the profile") – `json_schema/profile_info`

*   [reference\_info](./reference_info.md "Object containing information about the source document") – `json_schema/reference_info`

## Other Schemas

### Objects

*   [Untitled object in observations](./observations-items.md) – `json_schema/observations#/items`

*   [administration](./drug_administration_protocol-drug_administration-properties-administrations-administration.md "Object describing a single drug administration") – `json_schema/drug_administration_protocol#/items/properties/administrations/items`

*   [compound\_info](./compound_info-compound_info.md "Compound information block") – `json_schema/compound_info#/items`

*   [demographic](./demographics-demographic.md "Object storing a singular demographic parameter") – `json_schema/demographics#/items`

*   [drug\_administration](./drug_administration_protocol-drug_administration.md "Drug administration protocol") – `json_schema/drug_administration_protocol#/items`

*   [observation](./observations-items-properties-observations-observation.md "Object describing a single observation") – `json_schema/observations#/items/properties/observations/items`

### Arrays

*   [administrations](./drug_administration_protocol-drug_administration-properties-administrations.md "Array of drug administrations per administration protocol") – `json_schema/drug_administration_protocol#/items/properties/administrations`

*   [observations](./observations-items-properties-observations.md "Array of all observations of the given profile") – `json_schema/observations#/items/properties/observations`
