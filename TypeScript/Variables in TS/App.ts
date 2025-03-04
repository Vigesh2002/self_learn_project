// 1. Declare Type and Value in a Single Statement

let myName:string = "Vigesh";
const age:number = 23;

console.log(myName);
console.log(age);

// Type and value are defined together.
// name is a variable of type string.
// age is a constant of type number.

// 2. Declare Type Without Value

let city:string;
// console.log(city); 
// Output: undefined

// Only the type is defined; the value is undefined by default.

// 3. Declare Value Without Type

let country = "India";
console.log(country);

// The type is any, and the value is initialized to undefined.

// Keywords for Variable Declaration

// 1. var

var globalVar: number = 10;
console.log(globalVar);

// 2. let

let blockScoped: string = "TypeScript";
console.log(blockScoped);

// 3. const

const PI: number = 3.14;
console.log(PI);

// Type Annotations in TypeScript

let employeeName: string = "Vigesh";
let employeeAge: number = 23;
const company: string = "TechCorp";

// Variable Scopes in TypeScript

// 1. Local Scope

function example() {
    let localVar: number = 42;
    console.log(localVar);
}

// 2. Global Scope

let globalVar2: string = "Accessible everywhere";
console.log(globalVar2);

// 3. Class Scope

class Employee {
    salary: number = 50000;
    printSalary(): void {
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee();
emp.printSalary();

// Example of Variables in TypeScript

let globalVar3: number = 10;

class Geeks {
    private classVar: number = 11;

    assignNum(): void{
        let localVar: number = 12;
        console.log("Local variable: " + localVar);
    }
}

console.log("Global variable: " + globalVar3);

let obj = new Geeks();
obj.assignNum();