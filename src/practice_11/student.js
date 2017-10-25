var Person = require("./person.js");

function Student(id, name, age, klass) {
    Person.apply(this, arguments);
    this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.super_introduce = Student.prototype.introduce;
Student.prototype.introduce = function(){
    if(this.klass.isLeader(this)){
        return this.super_introduce() + " I am a Student. I am Leader of "+ this.klass.getDisplayName()+".";
    }
    return this.super_introduce() + " I am a Student. I am at "+ this.klass.getDisplayName()+".";
};

Student.prototype.equal = function(student){
    return student && this.id === student.id;
};
module.exports = Student;