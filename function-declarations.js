// 1. A JavaScript function is a block of code designed to perform a particular task.
// 2. A JavaScript function is executed when "something" invokes it (calls it).
// 3. Functions are one of the fundamental building blocks in JavaScript. 

//1. Non parametrised function

function showMessage() {
    let message = "Welcome to JavaScript.";
    console.log("Hello, Today is a good day.");
    console.log(message);
}

// function calling
showMessage();
console.log("--------------------");

//2. One parametrised function
function showData(data) {
    console.log("Hi, Today is a 'Greate' day");
    console.log(data);
}

showData();
console.log("-------------------");
showData("Hello");
console.log("-------------------");
showData(2324);
console.log("-------------------");
let user = {
    id: 4323, name: "john", age: 50
}
showData(user);

//3. Multi parametrised function
function fetchUser(name, age, gender) {
    console.log(`The user ${name} and its age is ${age} and gender ${gender}`);
}
fetchUser();
fetchUser("Ava", 60);
fetchUser("Ava", 60, "Female");

//4. One pamertired (obj) method
function fetchEmployee(emplooyee) {
    console.log(`The Employee : 
     Id : ${emplooyee.id}
     Name : ${emplooyee.name}
     Salary : ${emplooyee.salary}
     Dept : ${emplooyee.dept}
     `);
}

let emp = {
    id: 10000,
    name: "Mike smith",
    salary: 423432,
    dept: 'Eng'
}

fetchEmployee(emp);
// fetchEmployee();  // Uncaught TypeError: Cannot read properties of undefined

// 5. Default Prametrised function
function getInfo(username = "user", phone = "101010101010", email = "user@gmail.com") {
    console.log(`The User : ${username}
    and its phone number : ${phone}
    and email : ${email}
    `);
}

getInfo();
getInfo("Johnny", 97329472, "johnny@gmail.com");