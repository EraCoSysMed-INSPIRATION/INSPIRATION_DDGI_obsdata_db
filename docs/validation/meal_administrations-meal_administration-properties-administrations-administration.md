# administration Schema

```txt
/meal_administrations#/items/properties/administrations/items
```

Object describing a single meal administration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meal\_administrations.schema.json\*](../../out/meal_administrations.schema.json "open original schema") |

## items Type

`object` ([administration](meal_administrations-meal_administration-properties-administrations-administration.md))

# items Properties

| Property                             | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                           |
| :----------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [time](#time)                        | `number` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-administrations-administration-properties-time.md "/meal_administrations#/items/properties/administrations/items/properties/time")                       |
| [calorific\_value](#calorific_value) | `number` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-administrations-administration-properties-calorific_value.md "/meal_administrations#/items/properties/administrations/items/properties/calorific_value") |

## time

Time point of the drug administration.

`time`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-administrations-administration-properties-time.md "/meal_administrations#/items/properties/administrations/items/properties/time")

### time Type

`number`

## calorific\_value

Dose of the drug administration.

`calorific_value`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-administrations-administration-properties-calorific_value.md "/meal_administrations#/items/properties/administrations/items/properties/calorific_value")

### calorific\_value Type

`number`
