# compound\_and\_analyte Schema

```txt
json_schema/compounds_and_analytes#/items
```

Object describing all analytes and administered compounds for a given profile. Includes pharmacodynamic parameters and covariates

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [compounds\_and\_analytes.schema.json\*](../../out/schemas/sub-schemas/compounds_and_analytes.schema.json "open original schema") |

## items Type

`object` ([compound\_and\_analyte](compounds_and_analytes-compound_and_analyte.md))

# items Properties

| Property                               | Type      | Required | Nullable       | Defined by                                                                                                                                                                     |
| :------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                          | `string`  | Required | can be null    | [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-name.md "json_schema/compounds_and_analytes#/items/properties/name")                         |
| [alias](#alias)                        | `string`  | Required | can be null    | [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-alias.md "json_schema/compounds_and_analytes#/items/properties/alias")                       |
| [category](#category)                  | `string`  | Required | cannot be null | [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-category.md "json_schema/compounds_and_analytes#/items/properties/category")                 |
| [molecular\_weight](#molecular_weight) | `number`  | Required | cannot be null | [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-molecular_weight.md "json_schema/compounds_and_analytes#/items/properties/molecular_weight") |
| [pubchem\_id](#pubchem_id)             | `integer` | Required | can be null    | [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-pubchem_id.md "json_schema/compounds_and_analytes#/items/properties/pubchem_id")             |

## name

Name of the analyte or administered compound, use INN where available

`name`

*   is required

*   Type: `string`

*   can be null

*   defined in: [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-name.md "json_schema/compounds_and_analytes#/items/properties/name")

### name Type

`string`

### name Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `1`

## alias

Alias of the analyte or administered compound. Enter when compound name is confidential.

`alias`

*   is required

*   Type: `string`

*   can be null

*   defined in: [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-alias.md "json_schema/compounds_and_analytes#/items/properties/alias")

### alias Type

`string`

### alias Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `1`

## category

Category of the analyte.

`category`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-category.md "json_schema/compounds_and_analytes#/items/properties/category")

### category Type

`string`

### category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation                                                     |
| :------------------------ | :-------------------------------------------------------------- |
| `"compound (exogenous)"`  | The analyte is a xenobiotic, such as metoprolol.                |
| `"compound (endogenous)"` | The analyte is an endogenous compound, such as CRP.             |
| `"pd parameter"`          | The analyte is a pharmacodynamic parameter, such as heart rate. |
| `"covariate"`             | The analyte is a covariate such as creatinine clearance.        |

## molecular\_weight

Molecular weight in case the analyte is a compound.

`molecular_weight`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-molecular_weight.md "json_schema/compounds_and_analytes#/items/properties/molecular_weight")

### molecular\_weight Type

`number`

### molecular\_weight Constraints

**minimum**: the value of this number must greater than or equal to: `3`

## pubchem\_id

Pubchem identifier in case the analyte is a compound.

`pubchem_id`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [compounds\_and\_analytes](compounds_and_analytes-compound_and_analyte-properties-pubchem_id.md "json_schema/compounds_and_analytes#/items/properties/pubchem_id")

### pubchem\_id Type

`integer`

### pubchem\_id Constraints

**maximum**: the value of this number must smaller than or equal to: `1000000000`

**minimum**: the value of this number must greater than or equal to: `1`
