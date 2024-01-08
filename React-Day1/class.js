class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Employe extends Person {
    constructor(name, id , mark){
    super(name);
    this.id = id;
    this.mark = mark;
    }
    getID() {
        return this.id;
    }
    getMark() {
        return this.mark;
    }   
    getSum(a,b,c) {
        return a+b+c;
    }  
        
}

let emp1 = new Employe("Abinesh", "75" , "435");
console.log(emp1.getName());
console.log(emp1.getID());
console.log(emp1.getMark());
let emp2 = new Employe("Asha", "5", "402");
console.log(emp2.getName());
console.log(emp2.getID());
console.log(emp2.getMark());

let arr = [50,40,50];
console.log(emp2.getSum(...arr));

