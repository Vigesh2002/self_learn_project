Arrays in JavaScript
An array is a data structure that stores multiple values in a single variable. It can hold different data types like numbers, strings, objects, or even other arrays.

Array Creation
You can create an array in JavaScript using:

Array literal ([]) – Most common way.
Array constructor (new Array()) – Less commonly used.

// Creating an array using an array literal
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Creating an array using the Array constructor
let numbers = new Array(10, 20, 30);
console.log(numbers); // Output: [10, 20, 30]

*) Array Manipulation Methods

*) Adding Elements to an Array

push() – Adds an element at the end

let fruits = ["Apple", "Banana"];
fruits.push("Cherry"); 

console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

unshift() – Adds an element at the beginning

let fruits = ["Banana", "Cherry"];
fruits.unshift("Apple");

console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

*) Removing Elements from an Array

pop() – Removes the last element

let fruits = ["Apple", "Banana", "Cherry"];
let lastFruit = fruits.pop();

console.log(fruits); // Output: ["Apple", "Banana"]
console.log(lastFruit); // Output: "Cherry"

shift() – Removes the first element

let fruits = ["Apple", "Banana", "Cherry"];
let firstFruit = fruits.shift();

console.log(fruits); // Output: ["Banana", "Cherry"]
console.log(firstFruit); // Output: "Apple"

*) Modifying Elements in an Array

splice() – Add/Remove elements at a specific index

let colors = ["Red", "Green", "Blue"];

// Add "Yellow" at index 1
colors.splice(1, 0, "Yellow"); 
console.log(colors); // Output: ["Red", "Yellow", "Green", "Blue"]

// Remove 1 element at index 2
colors.splice(2, 1);
console.log(colors); // Output: ["Red", "Yellow", "Blue"]

*) Extracting Parts of an Array

slice() – Returns a new sub-array

let numbers = [10, 20, 30, 40, 50];

// Extract from index 1 to 3 (3 is excluded)
let subArray = numbers.slice(1, 3);

console.log(subArray); // Output: [20, 30]
console.log(numbers); // Original array remains unchanged

*) Summary of Methods

Method	    Action

push()	    Add at the end
pop()	    Remove from the end
unshift()	Add at the beginning
shift()	    Remove from the beginning
splice()	Add/Remove at a specific index
slice()	    Extract part of an array