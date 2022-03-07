# meal\_administrations Schema

```txt
json_schema/meal_administration_protocol
```

Array of all meal administrations.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meal\_administrations.schema.json](../../out/meal_administrations.schema.json "open original schema") |

## meal\_administrations Type

`object` ([meal\_administrations](meal_administrations.md))

# meal\_administrations Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                   |
| :---------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [administrations](#administrations)             | `array`  | Required | cannot be null | [meal\_administrations](meal_administrations-properties-administrations.md "json_schema/meal_administration_protocol#/properties/administrations")           |
| [time\_unit](#time_unit)                        | `string` | Required | cannot be null | [meal\_administrations](meal_administrations-properties-time_unit.md "json_schema/meal_administration_protocol#/properties/time_unit")                       |
| [calorific\_value\_unit](#calorific_value_unit) | `string` | Required | cannot be null | [meal\_administrations](meal_administrations-properties-calorific_value_unit.md "json_schema/meal_administration_protocol#/properties/calorific_value_unit") |

## administrations

Array of meal administrations per administration protocol. One per administered meal.

`administrations`

*   is required

*   Type: `object[]` ([administration](meal_administrations-properties-administrations-administration.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations.md "json_schema/meal_administration_protocol#/properties/administrations")

### administrations Type

`object[]` ([administration](meal_administrations-properties-administrations-administration.md))

## time\_unit

Unit of the time.

`time_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-time_unit.md "json_schema/meal_administration_protocol#/properties/time_unit")

### time\_unit Type

`string`

## calorific\_value\_unit

Unit of the administered caloric.

`calorific_value_unit`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-calorific_value_unit.md "json_schema/meal_administration_protocol#/properties/calorific_value_unit")

### calorific\_value\_unit Type

`string`
