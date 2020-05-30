// object are not immuted in js
//but in redux you must use immutibility

const person = { name: "john", age: 55 };

const updated = Object.assign({}, person, { age: 30 });

//another way :spreas operator
const updated2 = { ...person };
// oerrite a property
const updated3 = { ...person, name: "joe" };

const people = { name: "bob", address: { city: "newyork", country: "usa" } };

const updated_people = {
  ...people,
  address: { ...people.address, city: "miami" },
};

updated_people.address.country = "france";

console.log(people);
console.log(updated_people);

//array
const numbers = [1, 2, 3];

//adding
const added = [...numbers, 4];
console.log(added);

//add in specific
const index = numbers.indexOf(2);
const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added2);

//remove
const remove = numbers.filter((n) => n !== 2);
console.log(remove);

//update
const update_num = numbers.map((n) => (n === 2 ? 20 : n));
console.log(update_num);
