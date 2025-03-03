// Callback Function

function callbackHell(callback) {
    setTimeout(() => {
        const data = "Inside (callbackHell) function";
        console.log(data);
        callback(data);
    }, 2000);
}

function firstFunction(data, callback){
    setTimeout(() => {
        const processedData = `${data} - Processed First`;
        console.log(`Inside (firstFunction) Function`);
        callback(processedData);
    }, 1000);
}

function secondFunction(data, callback){
    setTimeout(() => {
        const processedData = `${data} - Processed Second`;
        console.log(`Inside (secondFunction) Function`);
        callback(processedData);
    }, 1500);
}

// Callback Hell
callbackHell((data) => {
    firstFunction(data, (processedData1) => {
        secondFunction(processedData1, (processedData2) => {
            console.log(`Final result of all functions: ${processedData2}`);
        });
    });
});

// Callback is not always asynchronous

console.log("start");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((n) => console.log(n));

console.log("end");

// Coding Time

console.log("Start");

function getUserDataFromDB(name, callback){
    setTimeout(() => {
        console.log("Getting User Name...");
        callback(name);
    }, 2000);
}

function getUserHobbies(name, callback){
    setTimeout(() => {
        console.log("Getting User Hobbies...");
        callback(["Reading", "Coding", "Playing"]);
    }, 2000);
}

getUserDataFromDB("Vigesh", (data) => {
    console.log(data);
    getUserHobbies(data, (hobby) => {
        console.log(hobby);
    })
});

console.log("End");