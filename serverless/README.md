# Serverless
This folder is for exploring Lambda and other serverless offerings


## Mapping of data types across inputs

| HTML Input Type   | Pydantic Type                | DynamoDB Data Type  | Description                                            |
|-------------------|------------------------------|---------------------|--------------------------------------------------------|
| text              | `str`                        | `S` (String)        | For general text input                                 |
| password          | `str`                        | `S` (String)        | For password input (should be handled securely)        |
| email             | `pydantic.EmailStr`          | `S` (String)        | For email addresses                                    |
| url               | `pydantic.AnyUrl`            | `S` (String)        | For URLs                                               |
| number            | `int`, `float`, `Decimal`    | `N` (Number)        | For numeric inputs                                     |
| range             | `int`, `float`               | `N` (Number)        | For numeric inputs within a range                      |
| checkbox          | `bool`                       | `BOOL` (Boolean)    | For boolean values                                     |
| radio             | `str`, `Enum`                | `S` (String)        | For selecting one option from a set                    |
| date              | `datetime.date`              | `S` (String)        | For date inputs (ISO 8601 format recommended)          |
| time              | `datetime.time`              | `S` (String)        | For time inputs (ISO 8601 format recommended)          |
| datetime-local    | `datetime.datetime`          | `S` (String)        | For date and time inputs (ISO 8601 format recommended) |
| month             | `pydantic.constr(regex=...)` | `S` (String)        | For month inputs (formatted string)                    |
| week              | `pydantic.constr(regex=...)` | `S` (String)        | For week inputs (formatted string)                     |
| tel               | `str`                        | `S` (String)        | For telephone numbers                                  |
| color             | `str`                        | `S` (String)        | For color values (hex format)                          |
| file              | `bytes`                      | `B` (Binary)        | For file uploads (binary data)                         |

