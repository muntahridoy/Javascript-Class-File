const car1 = {
  brand: "Ford",
  model: "Mustan",
  year: 1964,
  color: "red",
  weight: "1550",
};

const car2 = {
  brand: "BMW",
  model: "7 Series",
  year: 1964,
  color: "White",
  weight: "1440",
};

const person = {
  name: "Jhon",
  age: 25,
  height: 180,
  weight: 80,
  isMarried: false,
};

console.table(typeof person);

// using Dot notation
console.log(
  person.name,
  person.age,
  person.height,
  person.weight,
  person.isMarried
);

// using Bracket notation
console.log(
  person["name"],
  person["age"],
  person["height"],
  person["weight"],
  person["isMarried"]
);

person.name = "Ridoy";
car1.brand = "Toyota";
console.log(person.name);
console.log(car1);

person.address = "Dhaka";
console.table(person);

delete person.age;
console.table(person);
