# Untitled string in drug\_administrations Schema

```txt
json_schema/drug_administration_protocol#/items/properties/administration_route
```

Route of the administration, e.g., oral.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [drug\_administrations.schema.json\*](../../out/schemas/sub-schemas/drug_administrations.schema.json "open original schema") |

## administration\_route Type

`string`

## administration\_route Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation                          |
| :-------------- | :----------------------------------- |
| `"oral"`        | Drug was administered per os.        |
| `"iv"`          | Drug was administered intravenously. |
| `"transdermal"` | Drug was administered via the skin.  |
| `"inhalation"`  | Drug was inhaled.                    |
