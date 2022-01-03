import { parse_number, parse_string } from "./index.js";

console.log(parse_string("1"));
console.log(parse_string("1k"));
console.log(parse_string("1m"));
console.log(parse_string("1g"));

console.log(parse_number(1));
console.log(parse_number(10));
console.log(parse_number(100));
console.log(parse_number(1000));

console.log(parse_string("1.234k"));
console.log(parse_string("1.05m"));
console.log(parse_number(10));
console.log(parse_number(10000));
console.log(parse_number(12345, 3));
