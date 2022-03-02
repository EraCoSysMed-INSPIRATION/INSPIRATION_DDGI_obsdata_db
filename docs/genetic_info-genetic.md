# genetic Schema

```txt
json_schema/genetic_info#/items
```

Compound information block. Create one for all compounds (analytes and administered compounds).

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [genetic\_info.schema.json\*](../out/genetic_info.schema.json "open original schema") |

## items Type

`object` ([genetic](genetic_info-genetic.md))

# items Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [ncbi\_gene\_id](#ncbi_gene_id) | `integer` | Required | can be null    | [genetic\_info](genetic_info-genetic-properties-ncbi_gene_id.md "json_schema/genetic_info#/items/properties/ncbi_gene_id") |
| [gene\_name](#gene_name)        | `string`  | Required | cannot be null | [genetic\_info](genetic_info-genetic-properties-gene_name.md "json_schema/genetic_info#/items/properties/gene_name")       |
| [parameter](#parameter)         | `string`  | Required | cannot be null | [genetic\_info](genetic_info-genetic-properties-parameter.md "json_schema/genetic_info#/items/properties/parameter")       |
| [value](#value)                 | `string`  | Required | cannot be null | [genetic\_info](genetic_info-genetic-properties-value.md "json_schema/genetic_info#/items/properties/value")               |
| [percentage](#percentage)       | `number`  | Required | cannot be null | [genetic\_info](genetic_info-genetic-properties-percentage.md "json_schema/genetic_info#/items/properties/percentage")     |
| [method](#method)               | `string`  | Required | can be null    | [genetic\_info](genetic_info-genetic-properties-method.md "json_schema/genetic_info#/items/properties/method")             |
| [comment](#comment)             | `string`  | Required | can be null    | [genetic\_info](genetic_info-genetic-properties-comment.md "json_schema/genetic_info#/items/properties/comment")           |

## ncbi\_gene\_id

NCBI gene identifier

`ncbi_gene_id`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-ncbi_gene_id.md "json_schema/genetic_info#/items/properties/ncbi_gene_id")

### ncbi\_gene\_id Type

`integer`

### ncbi\_gene\_id Constraints

**maximum**: the value of this number must smaller than or equal to: `20`

**minimum**: the value of this number must greater than or equal to: `1`

## gene\_name

Conventional gene name, e.g., CYP2D6.

`gene_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-gene_name.md "json_schema/genetic_info#/items/properties/gene_name")

### gene\_name Type

`string`

### gene\_name Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `1`

## parameter

Parameter: phenotype, diplotype or haplotype

`parameter`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-parameter.md "json_schema/genetic_info#/items/properties/parameter")

### parameter Type

`string`

### parameter Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"phenotype"` | phenotype   |
| `"diplotype"` | diplotype   |
| `"haplotype"` | haplotype   |

## value

Value of the parameter. E.g., 'PM', '\*1/\*2' or 'rs4244285'.

`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-value.md "json_schema/genetic_info#/items/properties/value")

### value Type

`string`

## percentage

Percentage of the population possessing the respective genotype or phenotype.

`percentage`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-percentage.md "json_schema/genetic_info#/items/properties/percentage")

### percentage Type

`number`

## method

Method of determination for the genetic parameter. E.g., 'dextromethorphan/dextrorphan urinary metabolic ratio' or 'PCR-RFLP'.

`method`

*   is required

*   Type: `string`

*   can be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-method.md "json_schema/genetic_info#/items/properties/method")

### method Type

`string`

## comment

Comment regarding the provided value.

`comment`

*   is required

*   Type: `string`

*   can be null

*   defined in: [genetic\_info](genetic_info-genetic-properties-comment.md "json_schema/genetic_info#/items/properties/comment")

### comment Type

`string`
