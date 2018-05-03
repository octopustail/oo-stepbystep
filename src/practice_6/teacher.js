import Person from "./person.js"

class Teacher extends Person {
    constructor(name,age,klass) {
        super(name, age);
        this.klass = klass;
    }

    // 感觉这样写不科学。
    introduce() {
        if(this.klass) {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klass + "."
        }else{
            return super.introduce() + " I am a Teacher. I teach No Class."
        }
    }
}

module.exports = Teacher;