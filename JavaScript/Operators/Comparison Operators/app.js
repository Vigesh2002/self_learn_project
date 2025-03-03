// JavaScript Comparison Operators

// Equality Operator (==)

let x = 5;
let y = "5";

console.log(x == 5);
console.log(y == 5);
console.log(x == y);
console.log(NaN == NaN);
console.log(0 == false);
console.log(0 == null);

// Inequality Operator (!=)

let a = 5;
let b = "5";

console.log(x != 6);
console.log(y != 6);
console.log(x != 5);
console.log(x != y);
console.log(x != 6);
console.log(NaN != NaN);
console.log(0 != false);
console.log(0 != null);

// Strict Equality Operator (===)

let c = 5;
let d = "5";

console.log(c === 6);
console.log(d === "5");
console.log(c === d);
console.log(NaN === NaN);
console.log(0 === false);
console.log(0 === null);

// Strict Inequality Operator (!==)

let e = 5;
let f = "5";

console.log(c !== 6);
console.log(d !== "5");
console.log(c !== d);
console.log(NaN !== NaN);
console.log(0 !== false);
console.log(0 !== null);

// Greater Than Operator (>)

let g = 5;
let h = 6;

console.log(g > 6);
console.log(h > "5");
console.log(g > "15");
console.log(g > h);

// Greater Than or Equal Operator (>=)

let i = 5;
let j = 6;

console.log(i >= 6);
console.log(j >= "15");
console.log(i >= "5");
console.log(i >= j);

// Less Than Operator (<)

let k = 5;
let l = 6;

console.log(k < 6);
console.log(l < "5");
console.log(k < "15");
console.log(k < l);

// Less Than or Equal Operator (<=)

let m = 5;
let n = 6;

console.log(m <= 6);
console.log(n <= "15");
console.log(m <= "5");
console.log(m <= n);

// Coding Time

let firstFavNumber = 21;
let secondFavNumber = 10;

console.log(firstFavNumber > secondFavNumber);
console.log(firstFavNumber >= secondFavNumber);
console.log(firstFavNumber < secondFavNumber);
console.log(firstFavNumber <= secondFavNumber);
console.log(firstFavNumber == secondFavNumber);
console.log(firstFavNumber != secondFavNumber);
console.log(firstFavNumber === secondFavNumber);
console.log(firstFavNumber !== secondFavNumber);