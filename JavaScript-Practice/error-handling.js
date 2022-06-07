let user = {};
try {
    if (true) {
        console.log("Statement 1");
        users.name = "john";
        console.log("Statement 2");
    }
} catch (error) {
    console.log("Exception is handled.");
    console.log(error.name);
    console.log(error.message);
}
console.log("Statement 3");
console.log(user);