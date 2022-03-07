# README
## Input validation

User input is validated using [JSON-schema draft-07](http://json-schema.org/draft-07/schema). 
For the full documentation of the user input validation [click here](./docs/README.md).
The input is required to have the following structure and data types:
```json
   {
     "profile_info": "object",
     "reference_info": "object",
     "compounds_and_analytes": "array",
     "drug_administrations": ["array", "null"],
     "meal_administrations": ["array", "null"],
     "demographic_infos": ["array", "null"],
     "genetic_infos": ["array", "null"],
     "observations": ["array", "null"],
     "biomarkers_and_covariates": ["array", "null"],
     "nca_values": ["array", "null"],
     "interaction_ratios": ["array", "null"]
   }
```
## Top-level Schemas
Top level schemas are given below:
*   [compounds\_and\_analytes](./compounds_and_analytes.md "Array of information for all analytes and administered compounds of a given profile") – `json_schema/compounds_and_analytes`

*   [demographics](./demographics.md "Array storing all demographic parameters for a study population") – `json_schema/demographics`

*   [drug\_administrations](./drug_administrations.md "Array of all drug administration protocol of a given profile") – `json_schema/drug_administration_protocol`

*   [genetic\_info](./genetic_info.md "Array of genetic information for the respective study population") – `json_schema/genetic_info`

*   [interaction\_ratios](./interaction_ratios.md "Array of interaction ratios for the given profile") – `json_schema/interaction_ratios`

*   [meal\_administrations](./meal_administrations.md "Array of all meal administrations") – `json_schema/meal_administration_protocol`

*   [nca\_values](./nca_values.md "Array of NCA values for the given profile") – `json_schema/nca_values`

*   [observations](./observations.md "Array of all observations of the given profile") – `json_schema/observations`

*   [profile\_info](./profile_info.md "Object for basic information on the profile") – `json_schema/profile_info`

*   [reference\_info](./reference_info.md "Object containing information about the source document") – `json_schema/reference_info`