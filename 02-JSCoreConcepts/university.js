names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let arr = [];
        this.names.map(name => name[0] == letter ? arr.push(name) : null);
        return arr;
    }

    sort() {
        return this.names.sort();
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        let arr = [];
        for(let i=0;i<n;i++){
            arr.push(this.names[i]);
        }
        return arr;
    }
}

students = new Students(names);
console.log(students.getFirst(2));
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());