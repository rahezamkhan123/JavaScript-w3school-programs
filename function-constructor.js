// function constructor

function Employee(id, name, salary, dept) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
}

let Account = function (id, name, balance, address) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.address = address;
}

// create employe object : functional object
let employee1 = new Employee();

let employee2 = new Employee(1001, "haris", 2342.23, "Devlo");
let employee3 = new Employee(1002, "sam", 3223.23, "Eng");
let employee4 = new Employee(1003, "saif", 23432.23, "Devlo");
let employee5 = new Employee(1004, "mike", 5534.23, "Eng");

let account1 = new Account(100001, "Shahid", 54243.32, "Zakir colony");

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(account1);