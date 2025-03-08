const carModel = 2024;
console.log(typeof carModel); //round number / nature number / integer number

const decimalNumber = 134.5056778886; // decimal number / floating point number

let addition = decimalNumber + 400;
console.log("$" + addition.toFixed(2));

let value = 99.9;

// Math.round
let roundNum = Math.round(value);
console.log("round number:", roundNum);

// Math.ceil
let ceilNum = Math.ceil(value);
console.log("ceil number:", ceilNum);

// Math.floor
let floorNum = Math.floor(value);
console.log("floor number:", floorNum);

// Math.abs
let absValue = -39.45;
console.log(Math.abs(absValue));

let productPrice = 400;
let VAT = 40.45677;
let newVAT = VAT.toFixed(2);

console.log(parseInt(newVAT)); // remove decimal and convert string to number
console.log(parseFloat(newVAT)); // keeps decimal and convert string to number
let totalPrice = productPrice + parseFloat(newVAT);
console.log(totalPrice);

const random = Math.random(); // random number generator between 0 - 1
console.log(random);

// DICE -->  1 - 6
const ROLL_DICE = Math.floor(Math.random() * 7 + 1);
console.log("Dice:", ROLL_DICE);

// generate an OTP 4 digit
const OTP = Math.floor(Math.random() * 9000 + 1000); // 0 -9999
console.log(OTP);

// Find the smallest number in the list
const min = Math.min(66, 7, 98, 12, 100, 45);
console.log(min);

// Find the largest number in the list
const max = Math.max(66, 7, 98, 12, 100, 45);
console.log(max);

// conditional checking
let newValue = 43 * "test";
console.log(Number.isInteger(newValue));
console.log(Number.isNaN(newValue));

