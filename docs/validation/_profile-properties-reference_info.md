# reference\_info Schema

```txt
profile/reference_info#/properties/reference_info
```

Object containing information about the source document. See [properties](#referenceinfo-properties) for information and requirements on the object properties.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [\_profile.schema.json\*](../../out/_profile.schema.json "open original schema") |

## reference\_info Type

`object` ([reference\_info](_profile-properties-reference_info.md))

# reference\_info Properties

| Property                               | Type      | Required | Nullable       | Defined by                                                                                                             |
| :------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [doi](#doi)                            | `string`  | Optional | can be null    | [reference\_info](reference_info-properties-doi.md "profile/reference_info#/properties/doi")                           |
| [alternative\_id](#alternative_id)     | `string`  | Optional | can be null    | [reference\_info](reference_info-properties-alternative_id.md "profile/reference_info#/properties/alternative_id")     |
| [pmid](#pmid)                          | `integer` | Optional | can be null    | [reference\_info](reference_info-properties-pmid.md "profile/reference_info#/properties/pmid")                         |
| [doctitle](#doctitle)                  | `string`  | Required | cannot be null | [reference\_info](reference_info-properties-doctitle.md "profile/reference_info#/properties/doctitle")                 |
| [first\_author](#first_author)         | `string`  | Optional | can be null    | [reference\_info](reference_info-properties-first_author.md "profile/reference_info#/properties/first_author")         |
| [publication\_year](#publication_year) | `integer` | Required | cannot be null | [reference\_info](reference_info-properties-publication_year.md "profile/reference_info#/properties/publication_year") |
| [reference\_type](#reference_type)     | `string`  | Required | cannot be null | [reference\_info](reference_info-properties-reference_type.md "profile/reference_info#/properties/reference_type")     |

## doi

Document object identifier

`doi`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [reference\_info](reference_info-properties-doi.md "profile/reference_info#/properties/doi")

### doi Type

`string`

### doi Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## alternative\_id

Alternative identifier of the document, i.e., link to the document

`alternative_id`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [reference\_info](reference_info-properties-alternative_id.md "profile/reference_info#/properties/alternative_id")

### alternative\_id Type

`string`

### alternative\_id Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## pmid

Pubmed identifier

`pmid`

*   is optional

*   Type: `integer`

*   can be null

*   defined in: [reference\_info](reference_info-properties-pmid.md "profile/reference_info#/properties/pmid")

### pmid Type

`integer`

### pmid Constraints

**maximum**: the value of this number must smaller than or equal to: `10000000`

**minimum**: the value of this number must greater than or equal to: `1`

## doctitle

Title of the document

`doctitle`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [reference\_info](reference_info-properties-doctitle.md "profile/reference_info#/properties/doctitle")

### doctitle Type

`string`

### doctitle Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## first\_author

First author of the document

`first_author`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [reference\_info](reference_info-properties-first_author.md "profile/reference_info#/properties/first_author")

### first\_author Type

`string`

### first\_author Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## publication\_year

Year of the publication of the document

`publication_year`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [reference\_info](reference_info-properties-publication_year.md "profile/reference_info#/properties/publication_year")

### publication\_year Type

`integer`

### publication\_year Constraints

**maximum**: the value of this number must smaller than or equal to: `2022`

**minimum**: the value of this number must greater than or equal to: `1850`

## reference\_type

Type of the document, e.g., journal article.

`reference_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [reference\_info](reference_info-properties-reference_type.md "profile/reference_info#/properties/reference_type")

### reference\_type Type

`string`

### reference\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation                          |
| :------------------ | :----------------------------------- |
| `"journal article"` | Published original article or review |
| `"book chapter"`    | Book chapter                         |
| `"drug label"`      | Drug label                           |
| `"nda"`             | New drug application                 |
