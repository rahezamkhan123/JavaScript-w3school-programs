// Function constructor
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

// create employee object : functional object

let employee1 = new Employee();

let employee2 = new Employee(1001, "Haris", 2342.34, "Dev");

let employee3 = new Employee(1002, "Tony", 4234.65, "Dev");

let employee4 = new Employee(1003, "Saif", 45564.76, "Dev");

let acccount1 = new Account(10001, "John", 65343.34, "USA");

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(acccount1);