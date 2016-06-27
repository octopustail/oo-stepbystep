import Person from "./student";

export default class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = this.klass;
    }
    introduce(){
        return super.introduce() + " I am a Student. I am at Class" + this.klass +".";
    }
}

