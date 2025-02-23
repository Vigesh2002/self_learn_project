*) JavaScript Data Types

In JavaScript, each value has a data type, defining its nature (e.g., Number, String, Boolean) and operations. Data types are categorized into Primitive (e.g., String, Number) and Non-Primitive (e.g., Objects, Arrays).

*) Primitive Data Type

1. Number:

The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.

let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

Output:
2
1.3
Infinity
NaN

2. String:

A String in JavaScript is a series of characters that are surrounded by quotes. There are three types of quotes in JavaScript, which are.

let s1 = "Hello There";
console.log(s); 

let s2 = 'Single quotes work fine';
console.log(s1); 

let s3 = `can embed ${s}`;
console.log(s2); 

Output:
Hello There
Single quotes work fine
can embed Hello There

There’s no difference between ‘single’ and “double” quotes in JavaScript. Backticks provide extra functionality as with their help of them we can embed variables inside them.

3. Boolean:

The boolean type has only two values i.e. true and false.

let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);  

Output:
true
false

4. Null:

The special null value does not belong to any of the default data types. It forms a separate type of its own which contains only the null value.

let age = null;
console.log(age)

Output:
null

The ‘null’ data type defines a special value that represents nothing, or empty value.

5. Undefined:

A variable that has been declared but not initialized with a value is automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it.

let a;
console.log(a);

Output:
undefined

6. Symbol (Introduced in ES6):

Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.

let s1 = Symbol("Vigesh");
let s2 = Symbol("Vigesh");
console.log(s1 == s2);

Output:
false

7. BigInt (Introduced in ES2020):

BigInt is a built-in object that provides a way to represent whole numbers greater than 253. The largest number that JavaScript can reliably represent with the Number primitive is 253, which is represented by the MAX_SAFE_INTEGER constant.

let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);

Output:
11430854655n

----------------------------------------------------------

*) Non-Primitive Data Types

The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.

1. Object:

JavaScript objects are key-value pairs used to store data, created with {} or the new keyword. They are fundamental as nearly everything in JavaScript is an object.

let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

Output:
Company

2. Arrays:

An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.

let a1 = [1, 2, 3, 4, 5];
console.log(a);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

Output:
[ 1, 2, 3, 4, 5 ]
[ 1, 'two', { name: 'Object' }, [ 3, 4, 5 ] ]

3. Function:

A function in JavaScript is a block of reusable code designed to perform a specific task when called.


function greet(name) { return "Hello, " + name + "!"; }

console.log(greet("Alice"));

Output:
Hello, Alice!

4. Date Object:

The Date object in JavaScript is used to work with dates and times, allowing for date creation, manipulation, and formatting.

// Creating a new Date object for the current date and time
let currentDate = new Date();
// Displaying the current date and time
console.log(currentDate); 

Output:
2025-02-23T15:16:37.155Z

5. Regular Expression:

A RegExp (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.

// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
let result = pattern.test("Hello, world!"); 
console.log(result); 

Output:
false