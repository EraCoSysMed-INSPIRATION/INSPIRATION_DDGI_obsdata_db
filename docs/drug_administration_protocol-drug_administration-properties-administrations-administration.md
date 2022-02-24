# administration Schema

```txt
json_schema/drug_administration_protocol#/items/properties/administrations/items
```

Object describing a single drug administration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [drug\_administration\_protocol.schema.json\*](../out/drug_administration_protocol.schema.json "open original schema") |

## items Type

`object` ([administration](drug_administration_protocol-drug_administration-properties-administrations-administration.md))

# items Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                        |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [time](#time)         | `number`  | Required | cannot be null | [drug\_administrations](drug_administration_protocol-drug_administration-properties-administrations-administration-properties-time.md "json_schema/drug_administration_protocol#/items/properties/administrations/items/properties/time")         |
| [dose](#dose)         | `number`  | Required | cannot be null | [drug\_administrations](drug_administration_protocol-drug_administration-properties-administrations-administration-properties-dose.md "json_schema/drug_administration_protocol#/items/properties/administrations/items/properties/dose")         |
| [duration](#duration) | `integer` | Required | can be null    | [drug\_administrations](drug_administration_protocol-drug_administration-properties-administrations-administration-properties-duration.md "json_schema/drug_administration_protocol#/items/properties/administrations/items/properties/duration") |

## time

Time point of the drug administration.

`time`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-drug_administration-properties-administrations-administration-properties-time.md "json_schema/drug_administration_protocol#/items/properties/administrations/items/properties/time")

### time Type

`number`

## dose

Dose of the drug administration.

`dose`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [drug\_administrations](drug_administration_protocol-drug_administration-properties-administrations-administration-properties-dose.md "json_schema/drug_administration_protocol#/items/properties/administrations/items/properties/dose")

### dose Type

`number`

## duration

Duration of the drug administration i.e., in case of infusions.

`duration`

*   is required

*   Type: `integer`

*   can be null

*   defined in: [drug\_administrations](drug_administration_protocol-drug_administration-properties-administrations-administration-properties-duration.md "json_schema/drug_administration_protocol#/items/properties/administrations/items/properties/duration")

### duration Type

`integer`
