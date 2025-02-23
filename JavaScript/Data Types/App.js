// Primitive Data Type

// Number

let num = 10;
console.log(num);

let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

// String

let str = "Hello World";
console.log(str);

let str2 = 'This is a "double quoted" string';
console.log(str2);

let str3 = `can embed ${str}`;
console.log(str3);

// Boolean

let bool = true;
console.log(bool);

let bool2 = false;
console.log(bool2);

// Null

let nul = null;
console.log(nul);

// Undefined

let und;
console.log(und);

// Symbol

let sym = Symbol('foo');
console.log(sym);

let s1 = Symbol("Vigesh");
let s2 = Symbol("Vigesh");
console.log(s1 == s2);

// BigInt

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// Non-Primitive Data Types

// Object

let obj = {
    name: 'Vigesh',
    age: 23
};
console.log(obj);
console.log(typeof obj);

// Array

let arr = [1, 2, 3, 4, 5];
console.log(arr);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

// Function

let func = function () {
    return "Hello World";
};
console.log(func);

function greet(name) { return "Hello, " + name + "!"; }
console.log(greet("Vigesh"));

// Date

let date = new Date();
console.log(date);

// Regular Expression

let reg = /W3Schools/i;
console.log(reg);

let pattern = /hello/;
let result = pattern.test("Hello, world!");
console.log(result);