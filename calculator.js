let num1 = 100;
let num2 = 100;

if (num1 === num2) {
    console.log("Value is equal");
} else {
    console.log("Value is not equal");
}

function calculator(calcType) {

    if (calcType === 'add') {
        if (typeof num1 == 'number' && typeof num2 == 'number') {
            return num1 + num2;
        }
        return Number(num1) + Number(num2);
    } else if (calcType === 'sub') {
        return num1 - num2;
    } else if (calcType === 'mul') {
        return num1 * num2;
    } else if (calcType === 'div') {
        return num1 / num2;
    } else {
        return "Invalid Operation";
    }
}

console.log(`${num1} + ${num2} = ${calculator("add")}`);
console.log(`${num1} - ${num2} = ${calculator("sub")}`);
console.log(`${num1} * ${num2} = ${calculator("mul")}`);
console.log(`${num1} / ${num2} = ${calculator("div")}`);
console.log(`${num1} avg ${num2} = ${calculator("avg")}`);
console.log(`${num1}  ${num2} = ${calculator("")}`);
