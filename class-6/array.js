const allItems = [
  "apple",
  "banana",
  "orange",
  true,
  false,
  "mango",
  "grapes",
  // "pineapple"
  0,
  NaN,
  "",
  { name: "Ridoy", age: 27 },
  undefined,
  null,
  null,
];

// console.log(allItems);

const fruits = [
  "apple",
  "banana",
  "orange",
  "mango",
  "grapes",
  { name: "guava", color: "green" },
];

// console.log(fruits);
// console.log("item lenth", fruits.length); // array lenth
// console.log(fruits[5].color); //access array element

// array methods

const animals = [
  "cat",
  "dog",
  "giraffe",
  "tiger",
  "elephant",
  "monkey",
  "sheep",
];

animals.push("lion"); // add element at the end of the array
// console.log(animals);

animals.pop(); // remove element from the end of the array
// console.log(animals);

animals.unshift("ass"); // add element at the start of the array
// console.log(animals);

animals.shift(); // remove element from the start of the array
// console.log(animals);

const moreAnimals = ["cow", "goat", "frog", "horse"];

// console.log(moreAnimals + animals); //  wrong approach

// marge two array
const newAnimals = animals.concat(moreAnimals); // right approach

// console.log(newAnimals);

//slice - copy a portion an array
let slice = newAnimals.slice(0, 3);
// console.log(slice);

// console.log(moreAnimals);

// splice (start index, delet count, items1, items2, items3, ....)
// splice - remove or replace elements from an array

const vegetables = ["carrot", "potato", "onion", "cabbage", "spinach", "Dates"];

let splice = vegetables.splice(3, 3, "capsicum", "tomato");

// console.log(vegetables);

// sorting
// const numbers = [5, 4, 14, 3, 2, 1, 10, 13, 7, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19, 20,]; aiman vai k bolbo,,,,,,,, ata hoy na kno?????

const numbers = [5, 4, 3, 2, 1, 7, 6, 8, 9];

vegetables.sort(); // a-z
vegetables.reverse(); // z-a
// console.log(vegetables);

// array looping - for loop

const users = [
  { name: "Jhon", age: 28 },
  { name: "Don", age: 27 },
  { name: "Ridoy", age: 25 },
  { name: "Rayhan", age: 30 },
  { name: "Rafiq", age: 29 },
];
// console.log(users[0].name);
// console.log(users[1].name);
// console.log(users[2].name);

const vegetable = ["carrot", "potato", "onion", "cabbage", "spinach", "Dates"];

for (let i = 0; i < vegetable.length; i++) {
  //   console.log(vegetable[i]);
}

// for loop
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name, users[i].age);
  console.log(users[i].age, users[i].name);
}
// for each loop
users.forEach(function (user) {
  console.log(user.name, user.age);
});

// array looping - forEach
// vegetable.forEach(function (item) {
//   console.log(item);
// });
