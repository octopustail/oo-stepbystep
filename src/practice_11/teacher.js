import Person from "./person.js"

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
        this.id = id;
    }

    introduce() {
        let arr = [], str = '';
        if (this.klasses) {
            this.klasses.forEach((p) => {
                    arr.push(p.number)
                }
            );
            str = arr.join(', ');
            return super.introduce() + " I am a Teacher. I teach Class " + str + "."
        } else {
            return super.introduce() + " I am a Teacher. I teach No Class."
        }
    }

    introduceWith(student) {
        if (student.klass === this.klass) {
            return super.introduce() + " I am a Teacher. I teach " + student.name + ".";
        } else {
            return super.introduce() + " I am a Teacher. I don't teach " + student.name + ".";
        }
    }

    knownAssignLeader({name}, klass) {
        console.log(`I am ${this.name}. I know ${name} become Leader of ${klass.getDisplayName()}.`)

    }

    notifyJoin({name}, klass) {
        console.log(`I am ${this.name}. I know ${name} has joined ${klass.getDisplayName()}.`)
    }
}

module.exports = Teacher;



