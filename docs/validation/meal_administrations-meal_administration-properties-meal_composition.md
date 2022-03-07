# meal\_composition Schema

```txt
profile/meal_administrations#/items/properties/meal_composition
```

Composition of the meal in percentages.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [meal\_administrations.schema.json\*](../../out/meal_administrations.schema.json "open original schema") |

## meal\_composition Type

`object` ([meal\_composition](meal_administrations-meal_administration-properties-meal_composition.md))

# meal\_composition Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                          |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [carbohydrates](#carbohydrates) | `number` | Optional | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-carbohydrates.md "profile/meal_administrations#/items/properties/meal_composition/properties/carbohydrates") |
| [protein](#protein)             | `number` | Optional | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-protein.md "profile/meal_administrations#/items/properties/meal_composition/properties/protein")             |
| [fat](#fat)                     | `number` | Optional | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-fat.md "profile/meal_administrations#/items/properties/meal_composition/properties/fat")                     |
| [fiber](#fiber)                 | `number` | Optional | cannot be null | [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-fiber.md "profile/meal_administrations#/items/properties/meal_composition/properties/fiber")                 |
| Additional Properties           | Any      | Optional | can be null    |                                                                                                                                                                                                                     |

## carbohydrates

Percentage of carbohydrates.

`carbohydrates`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-carbohydrates.md "profile/meal_administrations#/items/properties/meal_composition/properties/carbohydrates")

### carbohydrates Type

`number`

## protein

Percentage of protein.

`protein`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-protein.md "profile/meal_administrations#/items/properties/meal_composition/properties/protein")

### protein Type

`number`

## fat

Percentage of fat.

`fat`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-fat.md "profile/meal_administrations#/items/properties/meal_composition/properties/fat")

### fat Type

`number`

## fiber

Percentage of fiber.

`fiber`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [meal\_administration](meal_administrations-meal_administration-properties-meal_composition-properties-fiber.md "profile/meal_administrations#/items/properties/meal_composition/properties/fiber")

### fiber Type

`number`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
