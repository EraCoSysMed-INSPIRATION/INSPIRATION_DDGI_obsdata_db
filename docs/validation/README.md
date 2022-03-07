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
  "nca_values": ["array", "null"],
  "interaction_ratios": ["array", "null"]
}
```

## Top-level Schemas

| Top-level Schema                                      | Description                                                                            | Required |
| :---------------------------------------------------- | :------------------------------------------------------------------------------------- | :------- |
| [profile_info](./profile_info.md)                     | "Object for basic information on the profile"                                          | Required |
| [compounds_and_analytes](./compounds_and_analytes.md) | "Array of information for all analytes and administered compounds of a given profile") | Optional |
| [demographics](./demographics.md)                     | "Array storing all demographic parameters for a study population")                     | Required |
| [drug_administrations](./drug_administrations.md)     | "Array of all drug administration protocol of a given profile"                         | Optional |
| [genetic_info](./genetic_info.md)                     | "Array of genetic information for the respective study population"                     | Optional |
| [interaction_ratios](./interaction_ratios.md)         | "Array of interaction ratios for the given profile"                                    | Optional |
| [meal_administrations](./meal_administrations.md)     | "Array of all meal administrations"                                                    | Optional |
| [nca_values](./nca_values.md)                         | "Array of NCA values for the given profile"                                            | Optional |
| [observations](./observations.md)                     | "Array of all observations of the given profile"                                       | Optional |
| [reference_info](./reference_info.md)                 | "Object containing information about the source document"                              | Optional |
