// Type Conversion

let money = 100;
console.log(money, typeof money);

// Convert string to number
let moneyString = "100";
moneyString = parseInt(moneyString);
moneyString = +moneyString;
moneyString = Number(moneyString);

console.log(moneyString, typeof moneyString);

// Convert number to string
let moneyNumber = 100;
moneyNumber = moneyNumber.toString();
moneyNumber = String(moneyNumber);

console.log(moneyNumber, typeof moneyNumber);

// Convert string to decimal

let moneyDecimal = "100.50";
moneyDecimal = parseFloat(moneyDecimal);
moneyDecimal = +moneyDecimal;
moneyDecimal = Number(moneyDecimal);

console.log(moneyDecimal, typeof moneyDecimal);