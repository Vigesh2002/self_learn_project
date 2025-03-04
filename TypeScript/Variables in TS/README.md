Variables in TypeScript are used to store data values, acting as named memory locations that can hold numbers, strings, booleans, or other types of data.

Variables can be declared using let, const, or var depending on the use case.

They provide type safety by allowing you to define specific data types like string, number, or boolean.

TypeScript supports both explicitly typed and type-inferred variable declarations.

Variable Declaration in TypeScript

In TypeScript, variables are used to store data values, with modern declarations offering strong typing and better scoping rules. Let’s explore how variables are declared in TypeScript.

1. Declare Type and Value in a Single Statement

let name: string = 'Amit';
const age: number = 25;

Type and value are defined together.
name is a variable of type string.
age is a constant of type number.

2. Declare Type Without Value

let city: string;
console.log(city); // Output: undefined

Only the type is defined; the value is undefined by default.

3. Declare Value Without Type

let country = 'India';
console.log(country); // Output: India

The type is any, and the value is initialized to undefined.

Keywords for Variable Declaration

1. var
Traditionally used in JavaScript, var is function-scoped and can lead to unexpected behavior due to hoisting.

var globalVar: number = 10;
console.log(globalVar); // Output: 10

Accessible throughout the function in which it’s declared.
Prone to issues like variable hoisting and unintended redeclarations.

2. let
Introduced to provide block-level scoping, let confines the variable’s scope to the block in which it’s defined.

let blockScoped: string = 'TypeScript';
console.log(blockScoped); // Output: TypeScript

Prevents redeclaration within the same scope.
Reduces errors related to variable hoisting.

3. const
Similar to let in terms of block scoping, const is used for variables that should not be reassigned after their initial assignment.

const PI: number = 3.14;
console.log(PI); // Output: 3.14

Ensures the variable’s value remains constant.
Attempting to reassign will result in a compile-time error.

Note:
Variable names can contains alphabets both Upper-case as well as Lower-case and digits also.
Variable names can’t start with a digit.
We can use _ and $ special characters only, apart from these other special characters are not allowed.

Type Annotations in TypeScript

TypeScript allows explicit type definitions, enhancing code clarity and type safety.

let employeeName: string = 'John Doe';
let employeeAge: number = 30;
const company: string = 'TechCorp';

Explicit types help catch errors during development.
Improves code readability and maintainability.

Variable Scopes in TypeScript

1. Local Scope
Variables declared within a function or block are accessible only within that function or block.

function example() {
    let localVar: number = 42;
    console.log(localVar); // Output: 42
}

Prevents unintended access from outside the block.

2. Global Scope
Variables declared outside any function or block are accessible throughout the entire program.

let globalVar: string = 'Accessible everywhere';
console.log(globalVar); // Output: Accessible everywhere

Useful for values that need to be accessed across multiple functions or modules.

3. Class Scope
Variables declared within a class are accessible to all members (methods) of that class.

class Employee {
    salary: number = 50000;
    printSalary(): void {
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee();
emp.printSalary(); // Output: Salary: 50000

Example of Variables in TypeScript

let globalVar: number = 10;

class Geeks {
    private classVar: number = 11;

    assignNum(): void {
        let localVar: number = 12;
        console.log('Local Variable: ' + localVar);
    }
}

console.log('Global Variable: ' + globalVar);

let obj = new Geeks();
obj.assignNum(); 

globalVar is a global variable, accessible throughout the program.
classVar is a private class-level variable, accessible only within the Geeks class.
localVar is a local variable, accessible only within the assignNum method.

Output:

Global Variable: 10
Local Variable: 12

Variables in TypeScript – FAQs

How does TypeScript handle variable type inference?

TypeScript infers a variable’s type based on the assigned value, eliminating the need for explicit type declarations.


What is the difference between let and const in TypeScript?

let allows variable reassignment, whereas const declares variables that cannot be reassigned after their initial assignment.


Can you change the type of a variable after it’s been declared in TypeScript?

No, once a variable’s type is inferred or annotated, it cannot be changed. TypeScript enforces strict type assignments to maintain type safety.


How do you declare variables with union types in TypeScript?

Union types allow a variable to hold multiple types, declared using the | operator, e.g., let value: string | number = ‘hello’;.


What are the scoping rules for variables in TypeScript?

let and const provide block-level scoping, meaning variables are confined to the block in which they are declared, while var offers function-level scoping.