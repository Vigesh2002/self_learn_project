// Synchronous code

function myFun() {
    console.log("Inside Function");
}

console.log("Start");
myFun();
console.log("End");

// Asynchronous code

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");

// Sync and Async

// In synchronous execution, JavaScript executes code line by line in a blocking manner. This means each task must complete before moving to the next one.

// In asynchronous execution, JavaScript executes code line by line in a non-blocking manner. This means that the next task can start before the previous one finishes.

