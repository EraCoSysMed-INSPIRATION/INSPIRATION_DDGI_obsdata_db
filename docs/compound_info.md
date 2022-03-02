# compound\_infos Schema

```txt
json_schema/compound_info
```

Array of compound information for all profile compounds. One of [compound\_name](https://github.com/EraCoSysMed-INSPIRATION/INSPIRATION_DDGI_obsdata_db/blob/master/docs/compound_info-compound_info.md#compound_name), [compound\_alias](https://github.com/EraCoSysMed-INSPIRATION/INSPIRATION_DDGI_obsdata_db/blob/master/docs/compound_info-compound_info.md#compound_alias) or [pubchem\_id](https://github.com/EraCoSysMed-INSPIRATION/INSPIRATION_DDGI_obsdata_db/blob/master/docs/compound_info-compound_info.md#pubchem_id) is required to be not null.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [compound\_info.schema.json](../out/compound_info.schema.json "open original schema") |

## compound\_infos Type

`object[]` ([compound\_info](compound_info-compound_info.md))

## compound\_infos Constraints

**minimum number of items**: the minimum number of items for this array is: `0`
