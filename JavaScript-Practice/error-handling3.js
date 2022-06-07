function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
}

function ageValidator(age) {
    try {
        if (age < 18) {
            throw new ValidationError(`${age}, Is not valid age`);
        } else {
            console.log("Welcome to vote, your age is valid , ", age);
        }
    } catch (error) {
        console.log("Error : ", error.name);
        console.log("Message : ", error.message);
    }
}

ageValidator(20);
console.log("--------------");
ageValidator(10);
console.log("--------------");
ageValidator(50);