let showMessage = function () {
    console.log("Today is good day!");
}

//on parametirised arrow function
let showMessage2 = () => {
    console.log("Today is wonderfull day !");
}

// parametirized arrow function
let showMessage3 = (username, age) => {
    console.log("Today is  wonder ful day!");
    console.log(username + " " + age);
}

// parametirised arrow function
let showMessage4 = (username, execute) => {
    console.log("Today is wonderfull day !");
    console.log(username);
    execute();
}

showMessage();

showMessage2();

showMessage3("john smith", 20);
showMessage4("john smith", showMessage3)