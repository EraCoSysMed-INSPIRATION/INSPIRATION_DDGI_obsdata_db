# administration Schema

```txt
json_schema/meal_administration_protocol#/properties/administrations/items
```

Object describing a single meal administration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meal\_administrations.schema.json\*](../../out/schemas/sub-schemas/meal_administrations.schema.json "open original schema") |

## items Type

`object` ([administration](meal_administrations-properties-administrations-administration.md))

# items Properties

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                      |
| :------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [time](#time)                          | `number` | Required | cannot be null | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-time.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/time")                         |
| [calorific\_value](#calorific_value)   | `number` | Optional | cannot be null | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-calorific_value.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/calorific_value")   |
| [meal\_composition](#meal_composition) | `object` | Optional | cannot be null | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-meal_composition.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/meal_composition") |
| [meal\_description](#meal_description) | `string` | Optional | cannot be null | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-meal_description.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/meal_description") |
| [volume](#volume)                      | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-volume.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/volume")                     |
| [volume\_unit](#volume_unit)           | `string` | Optional | can be null    | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-volume_unit.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/volume_unit")           |
| [fraction\_solid](#fraction_solid)     | `number` | Optional | can be null    | [meal\_administrations](meal_administrations-properties-administrations-administration-properties-fraction_solid.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/fraction_solid")     |

## time

Time point of the drug administration.

`time`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-time.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/time")

### time Type

`number`

## calorific\_value

Dose of the drug administration.

`calorific_value`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-calorific_value.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/calorific_value")

### calorific\_value Type

`number`

## meal\_composition

Composition of the meal in percentages.

`meal_composition`

*   is optional

*   Type: `object` ([meal\_composition](meal_administrations-properties-administrations-administration-properties-meal_composition.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-meal_composition.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/meal_composition")

### meal\_composition Type

`object` ([meal\_composition](meal_administrations-properties-administrations-administration-properties-meal_composition.md))

## meal\_description

Description of the meal, i.e. 'light meal'.

`meal_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-meal_description.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/meal_description")

### meal\_description Type

`string`

## volume

Volume of the meal.

`volume`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-volume.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/volume")

### volume Type

`number`

## volume\_unit

Unit of the meal volume.

`volume_unit`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-volume_unit.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/volume_unit")

### volume\_unit Type

`string`

## fraction\_solid

Solid fraction of the meal.

`fraction_solid`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [meal\_administrations](meal_administrations-properties-administrations-administration-properties-fraction_solid.md "json_schema/meal_administration_protocol#/properties/administrations/items/properties/fraction_solid")

### fraction\_solid Type

`number`
