# compound\_info Schema

```txt
json_schema/compound_info#/items
```

Compound information block. Create one for all compounds (analytes and administered compounds).

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [compound\_info.schema.json\*](../out/compound_info.schema.json "open original schema") |

## items Type

`object` ([compound\_info](compound_info-compound_info.md))

# items Properties

| Property                           | Type      | Required | Nullable       | Defined by                                                                                                                               |
| :--------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [compound\_name](#compound_name)   | `string`  | Required | can be null    | [compound\_infos](compound_info-compound_info-properties-compound_name.md "json_schema/compound_info#/items/properties/compound_name")   |
| [compound\_alias](#compound_alias) | `string`  | Optional | can be null    | [compound\_infos](compound_info-compound_info-properties-compound_alias.md "json_schema/compound_info#/items/properties/compound_alias") |
| [compound\_mw](#compound_mw)       | `number`  | Required | cannot be null | [compound\_infos](compound_info-compound_info-properties-compound_mw.md "json_schema/compound_info#/items/properties/compound_mw")       |
| [pubchem\_id](#pubchem_id)         | `integer` | Required | can be null    | [compound\_infos](compound_info-compound_info-properties-pubchem_id.md "json_schema/compound_info#/items/properties/pubchem_id")         |

## compound\_name

Name of the compound, use INN where available

`compound_name`

*   is required

*   Type: `string`

*   can be null

*   defined in: [compound\_infos](compound_info-compound_info-properties-compound_name.md "json_schema/compound_info#/items/properties/compound_name")

### compound\_name Type

`string`

### compound\_name Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `1`

## compound\_alias

Alias of the compound. Enter when no INN is available or compound name is confidential

`compound_alias`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [compound\_infos](compound_info-compound_info-properties-compound_alias.md "json_schema/compound_info#/items/properties/compound_alias")

### compound\_alias Type

`string`

### compound\_alias Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `1`

## compound\_mw

Molecular weight of the compound

`compound_mw`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [compound\_infos](compound_info-compound_info-properties-compound_mw.md "json_schema/compound_info#/items/properties/compound_mw")

### compound\_mw Type

`number`

### compound\_mw Constraints

**minimum**: the value of this number must greater than or equal to: `3`

## pubchem\_id

Pubchem identifier

`pubchem_id`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [compound\_infos](compound_info-compound_info-properties-pubchem_id.md "json_schema/compound_info#/items/properties/pubchem_id")

### pubchem\_id Type

`integer`

### pubchem\_id Constraints

**maximum**: the value of this number must smaller than or equal to: `10000000`

**minimum**: the value of this number must greater than or equal to: `1`
