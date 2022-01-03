# Abbreviated Number Parser

This library allows you to convert an abbreviated string to a number and vice versa.

## Installation

```
npm install @adrastopoulos/number-parser
```

## Usage

```ts
import { parse_string, parse_number } from "number-parser";

console.log(parse_string("1.234k"));
//=> 1234

console.log(parse_string("1m"));
//=> 1000000

console.log(parse_number(10));
//=> "10"

console.log(parse_number(10000));
//=> "10.00k"

console.log(parse_number(12345, 3));
//=> "12.345k"
```
