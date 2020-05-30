import { compose, pipe } from "lodash/fp";

// higher order function : afunction wich give a function as argument or return a function or both

//like map()
// let numbers = [1, 2, 3, 4];
// console.log(numbers);
// numbers_new = numbers.map((number) => number * 2);
// console.log(numbers_new);

// setTimeout(() => console.log("hello after 4s", 4000));

// function composition

let input = "   Javascript   ";
//let output = "<div>" + input.trim() + "</div>";

//trim
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

let result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

//use lodash

// const transform = compose(wrapInDiv, toLowerCase, trim);
//you can use pipe wich the order of function is opposite
const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input);
