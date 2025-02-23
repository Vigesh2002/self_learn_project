*) Variables

Variables in JavaScript can be declared using var, let, or const. JavaScript is dynamically typed, so variable types are determined at runtime without explicit type definitions.

var a = 10     // Old style
let b = 20;    // Prferred for non-const
const c = 30;  // Preferred for const (cannot be changed)

console.log(a);
console.log(b);
console.log(c);

Output:
10
20
30

*) Declaring Variables in JavaScript

1. JavaScript var keyword

var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

var a = "Hello Geeks";
var b = 10;
console.log(a);
console.log(b);

Output:
Hello Geeks
10

2. JavaScript let keyword

let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables

let a = 12
let b = "gfg";
console.log(a);
console.log(b);

Output:
12
gfg

3. JavaScript const keyword

const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can’t be reassigned, though objects can still be mutated.

const a = 5
let b = "gfg";
console.log(a);
console.log(b);

Output:
5
gfg

*) Rules for Naming Variables

When naming variables in JavaScript, follow these rules

Variable names must begin with a letter, underscore (_), or dollar sign ($).

Subsequent characters can be letters, numbers, underscores, or dollar signs.

Variable names are case-sensitive (e.g., age and Age are different variables).

Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

let userName = "Suman";  // Valid
let $price = 100;         // Valid
let _temp = 0;            // Valid
let 123name = "Ajay";    // Invalid
let function = "gfg"; // Invalid

---------------------------------------------------------------------------

*) Variable Scope in JavaScript

Scope determines the accessibility of variables in your code. JavaScript supports the following types of scope

1. Global Scope

Variables declared outside any function or block are globally scoped. While var, let, and const can all have global scope when declared outside a function, their behavior differs:

var is added to the window object in browsers.

let and const do not attach to the window object, making them safer for modern usage.

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am global too";

2. Function Scope

Variables declared inside a function are accessible only within that function. This applies to var, let, and const:


function test() {
    var localVar = "I am local";
    let localLet = "I am also local";
    const localConst = "I am local too";
}
console.log(localVar); // Error: not defined

3. Block Scope

Variables declared with let or const inside a block (e.g., inside {}) are block-scoped, meaning they cannot be accessed outside the block. var, however, is not block-scoped and will leak outside the block.


{
    let blockVar = "I am block-scoped";
    const blockConst = "I am block-scoped too";
}
console.log(blockVar); // Error: not defined

---------------------------------------------------------------------------

*) Interesting Facts about Variables in JavaScript

1. let or const are preferred over var: Initially, all the variables in JavaScript were written using the var keyword but in ES6 the keywords let and const were introduced. The main issue with var is, scoping.

2. var is function scoped: Can be accessed outside block if within the function.

if (true) {
  var x = 10; 
}

// Accessible outside the block
// because we are in same function
console.log(x);

Output:
10

3. let and const are block scoped : Cannot be accessed outside block even if inside the same function

if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ReferenceError

Output:
Hangup (SIGHUP)
/home/guest/sandbox/Solution.js:5
console.log(y, z); // ReferenceError

4. var can be redeclared in the same scope, but let and const cannot be

var x = 10;
var x = 20; // Allowed

let y = 30;
let y = 40; // SyntaxError

const z = 50;
const z = 60; // SyntaxError

Output:
SyntaxError: Identifier 'y' has already been declared

5. We can change elements of array or objects even if declared as const.

const ob = { a: 10 };
ob.a = 20; // Allowed

const arr = [10, 20, 30]
arr[2] = 40
console.log(arr)  // Allowed

/* TypeError in the below lines
obj = { b: 30 }; 
arr = [50, 100] */

Output:
[ 10, 20, 40 ]

*) When to Use var, let, or const

We declare variables using const if the value should not be changed

We should use let if we want mutable value or we can not use const

We use var only if we support old browser.