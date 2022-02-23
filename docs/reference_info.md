# referenceInfo Schema

```txt
undefined
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [reference\_info.schema.json](../out/reference_info.schema.json "open original schema") |

## referenceInfo Type

`object` ([referenceInfo](reference_info.md))

# referenceInfo Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                            |
| :---------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------- |
| [doi](#doi)                         | `string`  | Optional | cannot be null | [referenceInfo](reference_info-properties-doi.md "undefined#/properties/doi")                         |
| [alternativeId](#alternativeid)     | `string`  | Optional | cannot be null | [referenceInfo](reference_info-properties-alternativeid.md "undefined#/properties/alternativeId")     |
| [pmid](#pmid)                       | `integer` | Optional | cannot be null | [referenceInfo](reference_info-properties-pmid.md "undefined#/properties/pmid")                       |
| [docTitle](#doctitle)               | `string`  | Optional | cannot be null | [referenceInfo](reference_info-properties-doctitle.md "undefined#/properties/docTitle")               |
| [firstAuthor](#firstauthor)         | `string`  | Optional | cannot be null | [referenceInfo](reference_info-properties-firstauthor.md "undefined#/properties/firstAuthor")         |
| [publicationYear](#publicationyear) | `integer` | Optional | cannot be null | [referenceInfo](reference_info-properties-publicationyear.md "undefined#/properties/publicationYear") |
| [referenceType](#referencetype)     | `string`  | Optional | cannot be null | [referenceInfo](reference_info-properties-referencetype.md "undefined#/properties/referenceType")     |

## doi

Document object identifier

`doi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-doi.md "undefined#/properties/doi")

### doi Type

`string`

### doi Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## alternativeId

Alternative identifier of the document, i.e., link to the document

`alternativeId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-alternativeid.md "undefined#/properties/alternativeId")

### alternativeId Type

`string`

### alternativeId Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## pmid

Pubmed identifier

`pmid`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-pmid.md "undefined#/properties/pmid")

### pmid Type

`integer`

### pmid Constraints

**maximum**: the value of this number must smaller than or equal to: `10000000`

**minimum**: the value of this number must greater than or equal to: `1`

## docTitle

Title of the document

`docTitle`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-doctitle.md "undefined#/properties/docTitle")

### docTitle Type

`string`

### docTitle Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## firstAuthor

First author of the document

`firstAuthor`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-firstauthor.md "undefined#/properties/firstAuthor")

### firstAuthor Type

`string`

### firstAuthor Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `4`

## publicationYear

Year of the publication of the document

`publicationYear`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-publicationyear.md "undefined#/properties/publicationYear")

### publicationYear Type

`integer`

### publicationYear Constraints

**maximum**: the value of this number must smaller than or equal to: `2022`

**minimum**: the value of this number must greater than or equal to: `1850`

## referenceType

Type of the document, e.g., journal article.

`referenceType`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [referenceInfo](reference_info-properties-referencetype.md "undefined#/properties/referenceType")

### referenceType Type

`string`

### referenceType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"journal article"` |             |
| `"book chapter"`    |             |
| `"drug label"`      |             |
| `"nda"`             |             |
