# meal\_administration Schema

```txt
/meal_administrations#/items
```

Meal administration protocol. One object per type of meal.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meal\_administrations.schema.json\*](../../out/meal_administrations.schema.json "open original schema") |

## items Type

`object` ([meal\_administration](meal_administrations-meal_administration.md))

# items Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                          |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [administrations](#administrations)             | `array`  | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-administrations.md "/meal_administrations#/items/properties/administrations")           |
| [meal\_composition](#meal_composition)          | `object` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition.md "/meal_administrations#/items/properties/meal_composition")         |
| [meal\_description](#meal_description)          | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-meal_description.md "/meal_administrations#/items/properties/meal_description")         |
| [volume](#volume)                               | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-volume.md "/meal_administrations#/items/properties/volume")                             |
| [volume\_unit](#volume_unit)                    | `string` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-volume_unit.md "/meal_administrations#/items/properties/volume_unit")                   |
| [fraction\_solid](#fraction_solid)              | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-fraction_solid.md "/meal_administrations#/items/properties/fraction_solid")             |
| [time\_unit](#time_unit)                        | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-time_unit.md "/meal_administrations#/items/properties/time_unit")                       |
| [calorific\_value\_unit](#calorific_value_unit) | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-calorific_value_unit.md "/meal_administrations#/items/properties/calorific_value_unit") |

## administrations

Array of meal administrations per administration protocol. One per type of administered meal.

`administrations`

*   is optional

*   Type: `object[]` ([administration](meal_administrations-meal_administration-properties-administrations-administration.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-administrations.md "/meal_administrations#/items/properties/administrations")

### administrations Type

`object[]` ([administration](meal_administrations-meal_administration-properties-administrations-administration.md))

## meal\_composition

Composition of the meal in percentages.

`meal_composition`

*   is optional

*   Type: `object` ([meal\_composition](meal_administrations-meal_administration-properties-meal_composition.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition.md "/meal_administrations#/items/properties/meal_composition")

### meal\_composition Type

`object` ([meal\_composition](meal_administrations-meal_administration-properties-meal_composition.md))

## meal\_description

Description of the meal, i.e. 'light meal'.

`meal_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-meal_description.md "/meal_administrations#/items/properties/meal_description")

### meal\_description Type

`string`

## volume

Volume of the meal.

`volume`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-volume.md "/meal_administrations#/items/properties/volume")

### volume Type

`number`

## volume\_unit

Unit of the meal volume.

`volume_unit`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-volume_unit.md "/meal_administrations#/items/properties/volume_unit")

### volume\_unit Type

`string`

## fraction\_solid

Solid fraction of the meal.

`fraction_solid`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-fraction_solid.md "/meal_administrations#/items/properties/fraction_solid")

### fraction\_solid Type

`number`

## time\_unit

Unit of the time.

`time_unit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-time_unit.md "/meal_administrations#/items/properties/time_unit")

### time\_unit Type

`string`

## calorific\_value\_unit

Unit of the administered caloric.

`calorific_value_unit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-calorific_value_unit.md "/meal_administrations#/items/properties/calorific_value_unit")

### calorific\_value\_unit Type

`string`
