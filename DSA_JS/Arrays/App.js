// Arrays in JavaScript

let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

console.log(fruits);

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Array Manipulation Methods

// Adding Elements to an Array

// push() – Adds an element at the end

fruits.push('Grapes');
console.log(fruits);

// unshift() – Adds an element at the beginning

fruits.unshift('Strawberry');
console.log(fruits);

// Removing Elements from an Array

// pop() – Removes the last element

fruits.pop();
console.log(fruits);

// shift() – Removes the first element

fruits.shift();
console.log(fruits);

// Modifying Elements in an Array

// splice() – Add/Remove elements at a specific index

fruits.splice(1, 0, 'Kiwi');
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// Extracting Parts of an Array

// slice() – Returns a new sub-array

let result = fruits.slice(1, 3);
console.log(result);