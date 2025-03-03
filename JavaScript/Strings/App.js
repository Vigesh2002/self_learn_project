// Strings

let firstName = "Vigesh";
let secondName = "Viki";

let result = firstName + " " + secondName;
console.log(result);

// Concatenation

let a = firstName.concat(" ", secondName);
console.log(a);

// Append
firstName += " Web Developer";
console.log(firstName);

// Length
console.log(firstName.length);

// Change case
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// slice
console.log(firstName.slice(0, 6));

// Split & Join
console.log(firstName.split(" ").join("- "));

// Includes
console.log(firstName.includes("0"));

// Trim
let b = "   Hello World   ";
console.log(b.trim());

// Template Literals
let c = `Hello ${firstName}`;
console.log(c);

// Coding Time

let favActorFirstName = "Vigesh";
let favActorLastName = "Viki";
let fullName = favActorFirstName.concat(" ", favActorLastName);

console.log(fullName.toUpperCase());

let message = `My favorite actor is ${fullName}`;

message += ", His best movie is 3 idiots";
console.log(message);