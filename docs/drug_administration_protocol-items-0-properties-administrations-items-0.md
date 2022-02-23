# Untitled object in drugAdministrations Schema

```txt
undefined#/items/0/properties/administrations/items/0
```

Time point of the drug administration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [drug\_administration\_protocol.schema.json\*](../out/drug_administration_protocol.schema.json "open original schema") |

## 0 Type

`object` ([Details](drug_administration_protocol-items-0-properties-administrations-items-0.md))

# 0 Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :-------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [time](#time)         | `number`  | Required | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0-properties-time.md "undefined#/items/0/properties/administrations/items/0/properties/time")         |
| [dose](#dose)         | `number`  | Required | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0-properties-dose.md "undefined#/items/0/properties/administrations/items/0/properties/dose")         |
| [duration](#duration) | `integer` | Required | cannot be null | [drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0-properties-duration.md "undefined#/items/0/properties/administrations/items/0/properties/duration") |

## time



`time`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0-properties-time.md "undefined#/items/0/properties/administrations/items/0/properties/time")

### time Type

`number`

## dose

Dose of the drug administration.

`dose`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0-properties-dose.md "undefined#/items/0/properties/administrations/items/0/properties/dose")

### dose Type

`number`

## duration

Duration of the drug administration i.e., in case of infusions.

`duration`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [drugAdministrations](drug_administration_protocol-items-0-properties-administrations-items-0-properties-duration.md "undefined#/items/0/properties/administrations/items/0/properties/duration")

### duration Type

`integer`
