// A function expression is  a syntax to declare a function with assignment to varaible.
// function expression : 1) Labled function expression 2) Anonymous function expression


// syntax :
// let variableName = function functionName(x, y) { statements... return (z) };

// 1) Labled function expression

let caculateAge = function calculate(yearOfBirth) {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hi Your calculated age is : ${age}`);
    return age;
}

// 2) Anonymous function expression

let calculateAge2 = function (yearOfBirth) {
    let currentYear = 2022;
    let age = currentYear - yearOfBirth;
    console.log(`Hi your calculated age is  : ${age}`);
}

let calculateRetirement = function (yearOfBirth = 1880) {
    let age = caculateAge(yearOfBirth);
    if (age > 60) {
        console.log(`You are Retired.`);
    } else {
        console.log(`you have ${60 - age} remaining year for retirement`);
    }
    return 60 - age;
}

console.log(caculateAge);
// calculate(1990);  //  Uncaught ReferenceError: calculate is not defined
// Note : you can not call a function with function label if it is a function expression syntax.
// calculateAge(); // Nan
// calculateAge(1890);
calculateAge2(1800);
calculateAge2();
calculateRetirement();