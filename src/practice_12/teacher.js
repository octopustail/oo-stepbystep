var Person = require("./person.js");

function Teacher(id, name, age, klasses) {
    Person.apply(this, arguments);
    this.klasses = [];
    if(klasses){
        this.klasses = this.klasses.concat(klasses);
    }
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype._buildKlassesString = function(){
    var classesString = "";
    this.klasses.forEach(function (klass, index, klasses) {
        classesString += klass.number;
        if (index != klasses.length - 1) {
            classesString += ", ";
        }
    });
    return classesString;
};

Teacher.prototype.introduce = function(){
    if(this.klasses && this.klasses.length!=0){
        var classesString = this._buildKlassesString();
        return this.teach("Class " + classesString);
    }else{
        return this.teach("No Class");
    }
};

Teacher.prototype.teach = function(order){
    return this.super_introduce() + " I am a Teacher. I teach " + order +".";
};

Teacher.prototype.isTeaching = function(student){
    return this.klasses.some(function(klass) {
        klass.isIn(student);
    });
};

Teacher.prototype.notifyJoin = function(student, klass){
    console.log("I am "+ this.name + ". I know "+ student.name +" has joined "+klass.getDisplayName()+".");
};

Teacher.prototype.notifyAssignLeader = function(student, klass){
    console.log("I am "+ this.name + ". I know "+ student.name +" become Leader of "+klass.getDisplayName()+".");
};

module.exports = Teacher;
