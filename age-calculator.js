function ageCalculator(yearOfBirth) {
    let currentYear = 2022;
    if (typeof yearOfBirth == 'number') {
        return currentYear - yearOfBirth;
    } else {
        return "Invalid year to born";
    }
}

let age = ageCalculator(2001);
console.log("The calculated age is : " + age);

let age2 = ageCalculator();
console.log("The calculted age is : " + age2);

let age3 = ageCalculator("c21","39");
console.log("The calculated age is : " + age3);