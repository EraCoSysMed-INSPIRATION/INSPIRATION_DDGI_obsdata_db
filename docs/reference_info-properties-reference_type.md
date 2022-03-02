# Untitled string in reference\_info Schema

```txt
json_schema/reference_info#/properties/reference_type
```

Type of the document, e.g., journal article.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [reference\_info.schema.json\*](../out/reference_info.schema.json "open original schema") |

## reference\_type Type

`string`

## reference\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation                          |
| :------------------ | :----------------------------------- |
| `"journal article"` | Published original article or review |
| `"book chapter"`    | Book chapter                         |
| `"drug label"`      | Drug label                           |
| `"nda"`             | New drug application                 |
