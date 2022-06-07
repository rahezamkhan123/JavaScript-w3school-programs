// class expression

let Account = class {
    // Properties
    id;
    name;
    balance;
    email;

    // constructor
    constructor(id, name, balance, email) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.email = email;
    }

    getId() { return this.id; }
    setId(id) { this.id = id; }

    getName() { return this.name; }
    setName(name) { this.name = name; }

    getBalance() { return this.balance; }
    setBalance(balance) { this.balance = balance; }

    getEmail() { return this.email; }
    setEmail(email) { this.email = email; }
}

let account = new Account(); {
    console.log(account);

    // set Properties
    account.setId(1000);
    account.setName("John Smith");
    account.setBalance(2342834.32);
    account.setEmail("john.simit@gmail.com")

    console.log(account);

    // get values

    // console.log(account.getId());
    console.log(account.getName());
    console.log(account.getBalance());
    console.log(account.getEmail());
}

