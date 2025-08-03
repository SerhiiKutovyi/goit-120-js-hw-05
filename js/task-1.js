// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest('Mango', greet);

// registerGuest('Mango', notify);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', eatPizza(pizzaName));

// _______________________________________________

// function makeSandwich(sandwichName, callback) {
//   callback(sandwichName);
// }

// makeSandwich('Club Sandwich', function serveSandwich(sandwichName) {
//   console.log(`Serving sandwich: ${sandwichName}`);
// });

// function processOrder(orderId, callback) {
//   callback(orderId);
// }

// processOrder(101, function logOrder(orderId) {
//   console.log(`Processing order ${orderId}`);
// });

// function makeSmoothie(flavor, callback) {
//   callback(flavor);
// }

// makeSmoothie('Mango', function drinkSmoothie(flavor) {
//   console.log(`Drinking ${flavor} smoothie!`);
// });

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Vasya', age: 25 },
//   { name: 'Petya', age: 34 },
//   { name: 'Seryii', age: 50 },
//   { name: 'Yana', age: 34 },
// ];

// const grouped = Object.groupBy(people, p => p.age);

// console.log(grouped);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index, array) {
//   console.log(`Index ${index}, value ${number}`, array);
// });

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };

// console.log(calculateTotalPrice([164, 48, 291]));

// function filterArray(numbers, value) {
//   const array = [];
//   numbers.forEach(element => {
//     if (element > value) {
//       array.push(element);
//     }
//   });
//   return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3));
