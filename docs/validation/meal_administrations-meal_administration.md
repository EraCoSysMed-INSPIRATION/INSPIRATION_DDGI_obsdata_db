# meal\_administration Schema

```txt
profile/meal_administrations#/items
```

Meal administration protocol. One object per type of meal.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meal\_administrations.schema.json\*](../../out/meal_administrations.schema.json "open original schema") |

## items Type

`object` ([meal\_administration](meal_administrations-meal_administration.md))

# items Properties

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [administrations](#administrations)    | `array`  | Required | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-administrations.md "profile/meal_administrations#/items/properties/administrations")   |
| [meal\_composition](#meal_composition) | `object` | Optional | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-meal_composition.md "profile/meal_administrations#/items/properties/meal_composition") |
| [meal\_description](#meal_description) | `string` | Optional | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-meal_description.md "profile/meal_administrations#/items/properties/meal_description") |
| [volume](#volume)                      | `number` | Optional | can be null    | [meal\_administration](meal_administrations-meal_administration-properties-volume.md "profile/meal_administrations#/items/properties/volume")                     |
| [volume\_unit](#volume_unit)           | `string` | Optional | can be null    | [meal\_administration](meal_administrations-meal_administration-properties-volume_unit.md "profile/meal_administrations#/items/properties/volume_unit")           |
| [fraction\_solid](#fraction_solid)     | `number` | Optional | can be null    | [meal\_administration](meal_administrations-meal_administration-properties-fraction_solid.md "profile/meal_administrations#/items/properties/fraction_solid")     |

## administrations

Array of meal administrations per administration protocol. One per type of administered meal.

`administrations`

*   is required

*   Type: `object[]` ([administration](meal_administrations-meal_administration-properties-administrations-administration.md))

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-administrations.md "profile/meal_administrations#/items/properties/administrations")

### administrations Type

`object[]` ([administration](meal_administrations-meal_administration-properties-administrations-administration.md))

## meal\_composition

Composition of the meal in percentages.

`meal_composition`

*   is optional

*   Type: `object` ([meal\_composition](meal_administrations-meal_administration-properties-meal_composition.md))

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-meal_composition.md "profile/meal_administrations#/items/properties/meal_composition")

### meal\_composition Type

`object` ([meal\_composition](meal_administrations-meal_administration-properties-meal_composition.md))

## meal\_description

Description of the meal, i.e. 'light meal'.

`meal_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-meal_description.md "profile/meal_administrations#/items/properties/meal_description")

### meal\_description Type

`string`

## volume

Volume of the meal.

`volume`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-volume.md "profile/meal_administrations#/items/properties/volume")

### volume Type

`number`

## volume\_unit

Unit of the meal volume.

`volume_unit`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-volume_unit.md "profile/meal_administrations#/items/properties/volume_unit")

### volume\_unit Type

`string`

## fraction\_solid

Solid fraction of the meal.

`fraction_solid`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-fraction_solid.md "profile/meal_administrations#/items/properties/fraction_solid")

### fraction\_solid Type

`number`
