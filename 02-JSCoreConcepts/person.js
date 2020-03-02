class Person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    getName() {
        console.log(`${this.name} ${this.surname.toUpperCase()}`);
    }
    getInitials() {
        console.log(this.name[0] + '.' + this.surname[0] + '.');
    }
}

let p = new Person ("Jan","Kowalski");
p.getName();
p.getInitials();