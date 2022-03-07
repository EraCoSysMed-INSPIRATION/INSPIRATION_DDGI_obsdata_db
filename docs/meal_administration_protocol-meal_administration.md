# meal\_administration Schema

```txt
json_schema/meal_administration_protocol#/items
```

Meal administration protocol. One per administered meal.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meal\_administration\_protocol.schema.json\*](../out/meal_administration_protocol.schema.json "open original schema") |

## items Type

`object` ([meal\_administration](meal_administration_protocol-meal_administration.md))

# items Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :---------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [administrations](#administrations)             | `array`  | Required | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations.md "json_schema/meal_administration_protocol#/items/properties/administrations")           |
| [time\_unit](#time_unit)                        | `string` | Required | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-time_unit.md "json_schema/meal_administration_protocol#/items/properties/time_unit")                       |
| [calorific\_value\_unit](#calorific_value_unit) | `string` | Required | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-calorific_value_unit.md "json_schema/meal_administration_protocol#/items/properties/calorific_value_unit") |

## administrations

Array of meal administrations per administration protocol. One per administered meal.

`administrations`

*   is required

*   Type: `object[]` ([administration](meal_administration_protocol-meal_administration-properties-administrations-administration.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations.md "json_schema/meal_administration_protocol#/items/properties/administrations")

### administrations Type

`object[]` ([administration](meal_administration_protocol-meal_administration-properties-administrations-administration.md))

## time\_unit

Unit of the time.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-time_unit.md "json_schema/meal_administration_protocol#/items/properties/time_unit")

### time\_unit Type

`string`

## calorific\_value\_unit

Unit of the administered caloric.

`calorific_value_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-calorific_value_unit.md "json_schema/meal_administration_protocol#/items/properties/calorific_value_unit")

### calorific\_value\_unit Type

`string`
