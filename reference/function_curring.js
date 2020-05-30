import { compose, pipe } from "lodash/fp";

// higher order function : afunction wich give a function as argument or return a function or both

// function composition

let input = "   Javascript   ";
//let output = "<div>" + input.trim() + "</div>";

//trim
const trim = (str) => str.trim();
//const wrapInDiv = (str, type) => `<${type}>${str}</${type}>`;
const wrapInDiv = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

//console.log(result);

const transform = pipe(trim, toLowerCase, wrapInDiv("div"));
console.log(transform(input));

//curring  function with n argument to n function with 1 arguent
const add = function (a, b) {
  return a + b;
};

const add2 = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log(add2(1)(2));

// arrow
const add3 = (a) => (b) => (c) => a + b + c;
console.log(add3(1)(2)(3));
console.log(Math.random());
