// temp - 20 < temp is normal
// temp - 20 > temp is cold
// temp - 28 < temp is hot

const temp = 19;

if (temp >= 28) {
  console.log("temp is hot");
} else if (temp >= 20) {
  console.log("temp is normal");
} else {
  console.log("temp is cold");
}

// 90+ --> Grade A+
// 80+ --> Grade A
// 70+ --> Grade B
// 60+ --> Grade C+
// 50+ --> Grade D+
// below 50 -> Fail

let Maths = 90;
let English = 7;
let Bangla = 8;

let total = Maths + English + Bangla;
let average = total / 3;

console.log(`
  Total Mark (3 subjects): ${total}
  Average: ${average}
`);

if (average >= 90) {
  console.log("Grade A+");
} else if (average >= 80) {
  console.log("Grade A");
} else if (average >= 70) {
  console.log("Grade B");
} else if (average >= 60) {
  console.log("Grade C+");
} else if (average >= 50) {
  console.log("Grade D+");
} else {
  console.log("Failed!");
}

// Logical Operator
// OR --> ||
// AND --> &&
// NOT --> !

// || it's so loose
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(false || false || true || false);

// && it's so strick
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(false && false && true && false);

let userName = "Rayhan";
let password = "rayhan510";
let pincode = "5100";

console.log("user:", userName == "Rayhan");
console.log("password:", password == "rayhan510");
console.log("pincode:", pincode == "5100");

if (userName == "Rayhan" && password == "rayhan51df0" && pincode == "5100") {
  console.log("Login successful! ✅");
} else {
  console.log("Invalid credentials!🚫");
}

let point = false;
if (point) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

//falsey values in Javascript

// undefined
// null
// 0
// Nan
// ""
// false

// Ternary Operator
// condition ? true : false

let darkMode = true;
darkMode ? console.log("DarkMode is on!") : console.log("DarkMode is off!");

const age = 39;

// if (age >= 40) {
//   console.log("he is a old guy");
// } else {
//   console.log("person is not old enough");
// }

age >= 40
  ? console.log("he is a old guy")
  : console.log("person is not old enough");
