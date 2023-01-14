import { isPositiveNumber } from "../src";

const value = 2;

const result = {
  value,
  isPositiveNumber: isPositiveNumber(value),
};

console.log(result);
