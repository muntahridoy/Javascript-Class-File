// Rull of naming variable
// Rules of naming variables.
// 1. first we should define variable with "var"
// 2. first letter should be smaller
// 3. writing variables in camel case or snake case
// 4. name should be meaningful (avoid using x, y, z,a, b etc)
// we cannot use a number beginning of a variable name
// 1. variable name can not be number
// 2. variable name can not be keyword (var, let, const)
// 3. variable name can not be javascript reserved keyword (if, else, for, while, function etc)
// 4. variable name can not contain space
// 5. variable name can not contain - (hyphen)
// 6. variable name can not contain . (dot)
// 7. variable name must be start with letter (a-z, A-Z) or underscore (_)
// 8. variable name must be unique

// var product1Price = 100; // এটাকে  number বলে
// var product2Price = 300;
// console.log(product1Price + product2Price);

// var box1 = 'apple'; //এটাকে string বলে
// var box2 = 'banana';
// var box3 = 'Egg';
// var loginDetailsOfUser = 'ridoy'; // camel case
// var login_details_of_user = 'hasan'; // snake case
// var API_KEY = 'e12345+_$4$£*&%2£';
// var $productName = 'Apple 16 pro MAX';

// var programming_language = 'python';
// var programmingLanguage = 'javascript';

// // SPECIAL CASE

// var Num1 = 100; // wrong approch
// var num2 = '200'; // string / text / characters
// var userName = 'ridoy';

var age, personName, dateOfBirth, schoolName;

age = 27;
age = 28;
// console.log(age);


personName = "Ridoy";
// console.log(personName);

// ES6+
// let & const

let season = "winter";
// console.log(season);
season = "summer";
// console.log(season);

season = "rainy season";
// console.log(season);

// const - constant

const API_KEY = "e12345+_$4$£*&%2£";
// API_KEY = 'e12345+_$4$';
// console.log(API_KEY);

const carName = "bmw";
// carName = 'posia';

season = "autumn";
age = 30;
// console.log(season, age);

// let & var
// Difference 01 - Hosting

// message = "Good Morning";
// var message;
// console.log(message);

// movie = 'avengers';
// let movie;
// console.log(movie);

// Difference 02 - Hosting

// let language = 'bangla'; //  global variable

// {
//   let language = 'english'; // local variable
//   console.log('Scope:', language);
// }
// console.log(language);

// var games = 'Fifa 23'; //  global variable

// {
//   var games = 'NFS'; // local variable
//   console.log('Scope:', games);
// }
// console.log(games);
