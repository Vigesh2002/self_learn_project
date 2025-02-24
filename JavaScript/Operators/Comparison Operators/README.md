*) JavaScript Comparison Operators

JavaScript comparison operators are essential tools for checking conditions and making decisions in your code.

1. Equality Operator (==)

The Equality operator is used to compare the equality of two operands.

// Illustration of (==) operator
let x = 5;
let y = '5';

// Checking of operands
console.log(x == 5);
console.log(y == 5);        
console.log(x == y);

console.log();

// Check against special values
console.log(NaN == NaN);
console.log(0 == false);   
console.log(0 == null);

Output:
true
true
true

false
true
false

2. Inequality Operator (!=)

The Inequality Operator is used to compare the inequality of two operands.

// Illustration of (!=) operator
let x = 5;
let y = '5';

// Checking of operands
console.log(x != 6);
console.log(y != '5');        
console.log(x != y);

console.log();

// Check against special values
console.log(0 != false);   
console.log(0 != null);
console.log(NaN != NaN);

Output:
true
false
false

false
true
true

3. Strict equality Operator (===)

The Strict equality Operator is used to compare the equality of two operands with type.

// Illustration of (===) operator
let x = 5;
let y = '5';

// Checking of operands
console.log(x === 6);
console.log(y === '5');        
console.log(x === y);

console.log();

// Check against special values
console.log(NaN === NaN);   
console.log(0 === false);   
console.log(0 === null);

Output:
false
true
false

false
false
false

4. Strict inequality Operator (!==)

The Strict inequality Operator is used to compare the inequality of two operands with type.

// Illustration of (!==) operator
let x = 5;
let y = '5';

// Checking of operands
console.log(x !== 6);
console.log(y !== '5');        
console.log(x !== y);

console.log();

// Check against null and boolean value
console.log(0 !== false);   
console.log(0 !== null);
console.log(NaN !== NaN);

Output:
true
false
true

true
true
true

5. Greater than Operator (>)

The Greater than Operator is used to check whether the left-side value is greater than the right-side value.

// Illustration of (>) operator
let x = 5;
let y = "5";

// Checking of operands
console.log(x > 0);
console.log(y > "10");        
console.log(x > "10");
console.log(y > 0);

Output:
true
true
false
true

6. Greater than or equal Operator (>=)

The Greater than or equal Operator is used to check whether the left side operand is greater than or equal to the right side operand.

// Illustration of (>=) operator
let x = 5;
let y = "5";

// Checking of operands
console.log(x >= 5);
console.log(y >= "15");        
console.log(x >= "5");
console.log(y >= 15);

Output:
true
true
true
false

7. Less than Operator (<)

The Less than Operator is used to check whether the left-side value is less than the right-side value.

// Illustration of (<) operator
let x = 5;
let y = "5";

// Checking of operands
console.log(x < 15);
console.log(y < "0");        
console.log(x < "0");
console.log(y < 15);

Output:
true
false
false
true

8. Less than or equal Operator (<=)

The Less than or equal Operator is used to check whether the left side operand value is less than or equal to the right side operand value.

// Illustration of (<=) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 <= 15);
console.log(val2 <= "0");        
console.log(val1 <= "0");
console.log(val2 <= 15);

Output:
true
false
false
true