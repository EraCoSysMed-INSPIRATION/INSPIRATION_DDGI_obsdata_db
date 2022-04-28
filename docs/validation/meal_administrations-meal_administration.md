# meal\_administration Schema

```txt
/meal_administrations#/items
```

Meal administration protocol. One per type of meal administration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meal\_administrations.schema.json\*](../../out/meal_administrations.schema.json "open original schema") |

## items Type

`object` ([meal\_administration](meal_administrations-meal_administration.md))

# items Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                          |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [time\_value](#time_value)                      | `number` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-time_value.md "/meal_administrations#/items/properties/time_value")                     |
| [time\_unit](#time_unit)                        | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-time_unit.md "/meal_administrations#/items/properties/time_unit")                       |
| [calorific\_value](#calorific_value)            | `number` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-calorific_value.md "/meal_administrations#/items/properties/calorific_value")           |
| [calorific\_value\_unit](#calorific_value_unit) | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-calorific_value_unit.md "/meal_administrations#/items/properties/calorific_value_unit") |
| [meal\_composition](#meal_composition)          | `object` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition.md "/meal_administrations#/items/properties/meal_composition")         |
| [meal\_description](#meal_description)          | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-meal_description.md "/meal_administrations#/items/properties/meal_description")         |
| [volume](#volume)                               | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-volume.md "/meal_administrations#/items/properties/volume")                             |
| [volume\_unit](#volume_unit)                    | `string` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-volume_unit.md "/meal_administrations#/items/properties/volume_unit")                   |
| [fraction\_solid](#fraction_solid)              | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-fraction_solid.md "/meal_administrations#/items/properties/fraction_solid")             |
| [fraction\_liquid](#fraction_liquid)            | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-meal_administration-properties-fraction_liquid.md "/meal_administrations#/items/properties/fraction_liquid")           |
| [comment](#comment)                             | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-comment.md "/meal_administrations#/items/properties/comment")                           |

## time\_value

Time point of the drug administration.

`time_value`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-time_value.md "/meal_administrations#/items/properties/time_value")

### time\_value Type

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

## calorific\_value

Dose of the drug administration.

`calorific_value`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-calorific_value.md "/meal_administrations#/items/properties/calorific_value")

### calorific\_value Type

`number`

## calorific\_value\_unit

Unit of the administered caloric.

`calorific_value_unit`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-calorific_value_unit.md "/meal_administrations#/items/properties/calorific_value_unit")

### calorific\_value\_unit Type

`string`

## meal\_composition

Composition of the meal in percentages. Broken down by liquid and solid fractions.

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

## fraction\_liquid

Liquid fraction of the meal.

`fraction_liquid`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-fraction_liquid.md "/meal_administrations#/items/properties/fraction_liquid")

### fraction\_liquid Type

`number`

## comment



`comment`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-comment.md "/meal_administrations#/items/properties/comment")

### comment Type

`string`
