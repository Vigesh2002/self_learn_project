// (reserved keyword) (variable name) (type of value)

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

// JavaScript var keyword

var d = "Vigesh";
var e = 10;

console.log(d);
console.log(e);

// JavaScript let keyword

let f = "Vigesh Viki";
let g = 20;

console.log(f);
console.log(g);

// JavaScript const keyword

const h = "Vigesh D";
const i = 30;

console.log(h);
console.log(i);

// Global Scope

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am global too";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Function Scope

function myFunction() {
  var localVar = "I am local";
  let localLet =
    "I am also local, but I can't be accessed outside of this function";
  const localConst =
    "I am local too, but I can't be accessed outside of this function";
  console.log(localVar);
  console.log(localLet);
  console.log(localConst);
}

// console.log(localVar);
// console.log(localLet);
// console.log(localConst);

myFunction();

// Block Scope

{
  var blockVar = "I am block scope";
  let blockLet = "I am also block scope";
  const blockConst = "I am block scope too";
  console.log(blockVar);
  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

//  Coding Time

let name = "Vigesh";
let WhatDoYouWannaBecomeInYourLife = "Full Stack Developer";
let gender = "Male"
let twitterHandle = "@vigesh_viki";

console.log(`Name: ${name}`);
console.log(`WhatDoYouWannaBecomeInYourLife: ${WhatDoYouWannaBecomeInYourLife}`);
console.log(`gender: ${gender}`);
console.log(`twitterHandle: ${twitterHandle}`);