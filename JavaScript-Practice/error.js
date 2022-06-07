// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred

let number = 100.112345;
console.log("Statement 1");
try {
    number.toPrecision(4);
    console.log(number.toPrecision(500)); // to precisition() argunment must be between 1 to 100
} catch (error) {
    console.log("Error : ", error.name);
    console.log("Message : ", error.message);
}

console.log("Statement 10");
console.log("-----------------------");
console.log("Statement 19");

try {
    number.toUpperCase();
} catch (ex) {
    console.log("Error : ", ex.name);
    console.log("Message : ", ex.message);
}
console.log("Statement 26");


console.log("-----------------------");

console.log("Statement 31");

try {
    eval("'hi");
} catch (ex) {
    console.log("Error : ", ex.name);
    console.log("Message : ", ex.message);
}
console.log("Statement 38");