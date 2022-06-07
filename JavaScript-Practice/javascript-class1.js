// class decleration
class Employee {
    // properties
    id;
    name;
    salary;
    dept;

    // consturctor

    constructor(id, name, salary, dept) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }

    showId() {
        console.log(`The id is ${this.id}`);
    }

    showEmployee() {
        console.log(`
        The Employee : 
        id : ${this.id}
        name : ${this.name}
        salary : ${this.salary}
        dept : ${this.dept}
        `);
    }
}

let employee = new Employee(101, "John smith", 2342342.34, "Dev");
console.log(employee);

// access properties

console.log(employee.id);
console.log(employee.name);
employee.showId();
employee.showEmployee();