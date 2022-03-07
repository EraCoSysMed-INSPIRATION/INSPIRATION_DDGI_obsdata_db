# administration Schema

```txt
json_schema/meal_administration_protocol#/items/properties/administrations/items
```

Object describing a single meal administration.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meal\_administration\_protocol.schema.json\*](../out/meal_administration_protocol.schema.json "open original schema") |

## items Type

`object` ([administration](meal_administration_protocol-meal_administration-properties-administrations-administration.md))

# items Properties

| Property                               | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                        |
| :------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [time](#time)                          | `number` | Required | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-time.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/time")                         |
| [calorific\_value](#calorific_value)   | `number` | Optional | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-calorific_value.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/calorific_value")   |
| [meal\_composition](#meal_composition) | `object` | Optional | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_composition.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/meal_composition") |
| [meal\_description](#meal_description) | `string` | Optional | cannot be null | [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_description.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/meal_description") |

## time

Time point of the drug administration.

`time`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-time.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/time")

### time Type

`number`

## calorific\_value

Dose of the drug administration.

`calorific_value`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-calorific_value.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/calorific_value")

### calorific\_value Type

`number`

## meal\_composition

Composition of the meal in percentages.

`meal_composition`

*   is optional

*   Type: `object` ([meal\_composition](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_composition.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_composition.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/meal_composition")

### meal\_composition Type

`object` ([meal\_composition](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_composition.md))

## meal\_description

Description of the meal, i.e. 'light meal'.

`meal_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [meal\_administrations](meal_administration_protocol-meal_administration-properties-administrations-administration-properties-meal_description.md "json_schema/meal_administration_protocol#/items/properties/administrations/items/properties/meal_description")

### meal\_description Type

`string`
