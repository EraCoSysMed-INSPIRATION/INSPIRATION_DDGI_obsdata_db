# observation Schema

```txt
json_schema/observations#/items/properties/observations/items
```

Object describing a single observation.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [observations.schema.json\*](../../out/schemas/sub-schemas/observations.schema.json "open original schema") |

## items Type

`object` ([observation](observations-observations-properties-observations-observation.md))

# items Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                 |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [time](#time)                                             | `number`  | Optional | cannot be null | [observations](observations-observations-properties-observations-observation-properties-time.md "json_schema/observations#/items/properties/observations/items/properties/time")                                           |
| [observation\_numeric](#observation_numeric)              | `number`  | Optional | can be null    | [observations](observations-observations-properties-observations-observation-properties-observation_numeric.md "json_schema/observations#/items/properties/observations/items/properties/observation_numeric")             |
| [observation\_numeric\_error](#observation_numeric_error) | `number`  | Optional | can be null    | [observations](observations-observations-properties-observations-observation-properties-observation_numeric_error.md "json_schema/observations#/items/properties/observations/items/properties/observation_numeric_error") |
| [observation\_blq](#observation_blq)                      | `boolean` | Optional | can be null    | [observations](observations-observations-properties-observations-observation-properties-observation_blq.md "json_schema/observations#/items/properties/observations/items/properties/observation_blq")                     |
| [observation\_string](#observation_string)                | `string`  | Optional | can be null    | [observations](observations-observations-properties-observations-observation-properties-observation_string.md "json_schema/observations#/items/properties/observations/items/properties/observation_string")               |

## time

Time point of the observation.

`time`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [observations](observations-observations-properties-observations-observation-properties-time.md "json_schema/observations#/items/properties/observations/items/properties/time")

### time Type

`number`

## observation\_numeric

Numeric value of the observation.

`observation_numeric`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [observations](observations-observations-properties-observations-observation-properties-observation_numeric.md "json_schema/observations#/items/properties/observations/items/properties/observation_numeric")

### observation\_numeric Type

`number`

## observation\_numeric\_error

Error of the value of the observation.

`observation_numeric_error`

*   is optional

*   Type: `number`

*   can be null

*   defined in: [observations](observations-observations-properties-observations-observation-properties-observation_numeric_error.md "json_schema/observations#/items/properties/observations/items/properties/observation_numeric_error")

### observation\_numeric\_error Type

`number`

## observation\_blq

Observation is below the LLOQ.

`observation_blq`

*   is optional

*   Type: `boolean`

*   can be null

*   defined in: [observations](observations-observations-properties-observations-observation-properties-observation_blq.md "json_schema/observations#/items/properties/observations/items/properties/observation_blq")

### observation\_blq Type

`boolean`

## observation\_string

Non-numeric value of the observation.

`observation_string`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [observations](observations-observations-properties-observations-observation-properties-observation_string.md "json_schema/observations#/items/properties/observations/items/properties/observation_string")

### observation\_string Type

`string`
