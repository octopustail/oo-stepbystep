import Person from "./person.js";

function Teacher(id, name, age, klasses) {
    Person.apply(this, arguments);
    this.klasses = [];
    if (klasses) {
        this.klasses = this.klasses.concat(klasses);
    }
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype._buildKlassesString = function() {
    let classesString = "";
    this.klasses.forEach(({number}, index, {length}) => {
        classesString += number;
        if (index != length - 1) {
            classesString += ", ";
        }
    });
    return classesString;
};

Teacher.prototype.introduce = function() {
    if (this.klasses && this.klasses.length!=0) {
        const classesString = this._buildKlassesString();
        return this.teach(`Class ${classesString}`);
    } else {
        return this.teach("No Class");
    }
};

Teacher.prototype.teach = function(order) {
    return `${this.super_introduce()} I am a Teacher. I teach ${order}.`;
};

Teacher.prototype.isTeaching = function(student) {
    return this.klasses.some(klass => {
        klass.isIn(student);
    });
};

Teacher.prototype.notifyJoin = function({name}, klass) {
    console.log(`I am ${this.name}. I know ${name} has joined ${klass.getDisplayName()}.`);
};

Teacher.prototype.notifyAssignLeader = function({name}, klass) {
    console.log(`I am ${this.name}. I know ${name} become Leader of ${klass.getDisplayName()}.`);
};

export default Teacher;
