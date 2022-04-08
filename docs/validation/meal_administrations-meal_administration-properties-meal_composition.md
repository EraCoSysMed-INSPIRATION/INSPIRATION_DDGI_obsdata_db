# meal\_composition Schema

```txt
/meal_administrations#/items/properties/meal_composition
```

Composition of the meal in percentages. Broken down by liquid and solid fractions.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [meal\_administrations.schema.json\*](../../out/meal_administrations.schema.json "open original schema") |

## meal\_composition Type

`object` ([meal\_composition](meal_administrations-meal_administration-properties-meal_composition.md))

# meal\_composition Properties

| Property                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :----------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [composition\_liquid](#composition_liquid) | `object` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_liquid.md "/meal_administrations#/items/properties/meal_composition/properties/composition_liquid") |
| [composition\_solid](#composition_solid)   | `object` | Optional | cannot be null | [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_solid.md "/meal_administrations#/items/properties/meal_composition/properties/composition_solid")   |

## composition\_liquid

Liquid composition of the meal in percentages.

`composition_liquid`

*   is optional

*   Type: `object` ([meal\_composition\_liquid](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_liquid.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_liquid.md "/meal_administrations#/items/properties/meal_composition/properties/composition_liquid")

### composition\_liquid Type

`object` ([meal\_composition\_liquid](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_liquid.md))

## composition\_solid

Solid composition of the meal in percentages.

`composition_solid`

*   is optional

*   Type: `object` ([meal\_composition\_solid](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_solid.md))

*   cannot be null

*   defined in: [meal\_administrations](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_solid.md "/meal_administrations#/items/properties/meal_composition/properties/composition_solid")

### composition\_solid Type

`object` ([meal\_composition\_solid](meal_administrations-meal_administration-properties-meal_composition-properties-meal_composition_solid.md))
