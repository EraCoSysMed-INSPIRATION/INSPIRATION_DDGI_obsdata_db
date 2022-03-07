# Untitled string in interaction\_ratios Schema

```txt
json_schema/interaction_ratios#/items/properties/interaction_type
```

Type of interaction.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [interaction\_ratios.schema.json\*](../out/interaction_ratios.schema.json "open original schema") |

## interaction\_type Type

`string`

## interaction\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation           |
| :------ | :-------------------- |
| `"DDI"` | Drug-drug interaction |
| `"DGI"` | Drug-gene interaction |
| `"DFI"` | Drug-food interaction |
