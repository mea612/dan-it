class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }

    get salary() {
        return this._salary;
    }
    set salary (value) {
        this._salary = value;
    }

}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang;  
    }
    get salary() {
        return this._salary * 3;
        
    }
}


let juniorProgrammer = new Programmer('Matt Woe', 21, 300, 'Fortran');
let middleProgrammer = new Programmer('John Doe', 28, 800, 'Perl');
let seniorProgrammer = new Programmer('Dan Abramov', 30, 2000, 'JavaScript');
let guruProgrammer = new Programmer('Linus Torvalds', 51, 5000, 'Assembler');


console.log(juniorProgrammer);
console.log(middleProgrammer);
console.log(seniorProgrammer);
console.log(guruProgrammer);
console.log(juniorProgrammer.salary);
console.log(middleProgrammer.salary);
console.log(seniorProgrammer.salary);
console.log(guruProgrammer.salary);
