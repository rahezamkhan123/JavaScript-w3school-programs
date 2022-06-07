// arithmetic operations
let calculator = function (num1, num2, calcType) {
    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType === "sub") {
        return num1 - num2;
    } else if (calcType === "mul") {
        return num1 * num2;
    } else if (calcType === "div") {
        return num1 / num2;
    } else {
        return "Invalid Operations";
    }
}

let x = 1000;
let y = 500;

console.log(`The addition of ${x} + ${y} = ${calculator(x, y, "add")}`);
console.log(`The substraction of ${x} - ${y} = ${calculator(x, y, "sub")}`);
console.log(`The multiplication of ${x} * ${y} = ${calculator(x, y, "mul")}`);
console.log(`The division of ${x} / ${y} = ${calculator(x, y, "div")}`);