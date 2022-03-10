class Person {
    static nextId = 0;
    id = ++Person.nextId;

    constructor(fName, lName, address) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }

    toString() {
        return `ID: ${this.id}, name: ${this.fName + ' ' + this.lName}, address ${this.address}}`;
    }
}

const p1 = new Person('John', 'Doe', 'London, Baker Str. 32');
const p2 = new Person('Ivan', 'Petrov', 'Sofia 1000');

class User extends Person {
    constructor(fName, lName, address, username, password, role) {
        super(fName, lName, address);
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // overiding
    toString() {
        return `${super.toString()}, username: ${this.username}, password: ${this.password}, role: ${this.role}}`;
    }
}

const u1 = new User('Violeta', 'Petrova', 'PLovdiv', 'vili', 'violeta', 'ADMIN');
const u2 = new User('Dimitar', 'Georgiev', 'Ruse', 'dimo', 'dimo123', 'AUTHOR');
const u3 = new User('Hrsito', 'Spasov', 'Sofia', 'hristo', 'htisto123', 'READER');

function printAll(persons) {
    persons.forEach(person => {
        console.log(person.toString());
    });
}

printAll([u1, p1, u2, p2, u3]);