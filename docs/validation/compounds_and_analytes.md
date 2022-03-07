# compounds\_and\_analytes Schema

```txt
json_schema/compounds_and_analytes
```

Array of information for all analytes and administered compounds of a given profile. Contains one [object per analyte and administered compound](./docs/compounds_and_analytes-compound_and_analyte.md).

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [compounds\_and\_analytes.schema.json](../../out/schemas/sub-schemas/compounds_and_analytes.schema.json "open original schema") |

## compounds\_and\_analytes Type

`object[]` ([compound\_and\_analyte](compounds_and_analytes-compound_and_analyte.md))

## compounds\_and\_analytes Constraints

**minimum number of items**: the minimum number of items for this array is: `0`
