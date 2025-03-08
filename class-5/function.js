// let num1 = 100;
// let num2 = 200;

// let num3 = 200;
// let num4 = 400;

// let num5 = 400;
// let num6 = 400;

// console.log(num3 + num4);

// console.log(num5 + num6);

// console.log(num1 + num2);

function Addition(num1, num2) {
  console.log(num1 + num2);
}

function calculation(num1, num2) {
  console.log("Addition", num1 + num2);
  console.log("Subtraction", num1 - num2);
  console.log("Division", num1 / num2);
  console.log("Multiplication", num1 * num2);
}

// addition(100, 200); // call / invoke
// addition(300, 400);
// addition(12, 45);

calculation(10, 40);
calculation(50, 40);
calculation(500, 40);

function greeting(name) {
  console.log("Hello", name);
}

greeting("Ridoy");

// for (let count = 4; count <= 10; count++) {
//   console.log(count);
// }

function forLoop(start, end, increment) {
  for (let count = start; count <= end; count = count + increment) {
    console.log(count);
  }
}

forLoop(5, 10, 3);
forLoop(25, 40, 5);
forLoop(10, 40, 10);

// find the work "hello" is present or not in the sentence

// write a function to find a specific word in a sentence

// let sentence = "Hello, I am a Developer";
// console.log(sentence.toLocaleLowerCase());

function searchWord(search, sentence) {
  let searchValue = sentence.toLowerCase().includes(search.toLowerCase());

  console.log(searchValue);
  if (searchValue == true) {
    console.log(search, "has been found in the sentence");
  } else {
    console.log(search, "has not been found in the sentence");
  }
}

searchWord("designer", "Hello, I am a Developer");
searchWord("bangladesh", "Bangladesh is a beautiful country");

let search = "hello";
let sentence = "Hello, I am a Developer";

let searchValue = sentence.toLowerCase().includes(search.toLowerCase());

console.log(searchValue);
if (searchValue == true) {
  console.log(search, "has been found in the sentence");
} else {
  console.log(search, "has not been found in the sentence");
}

