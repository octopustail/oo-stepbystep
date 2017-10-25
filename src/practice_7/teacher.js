var Person = require("./person.js");

function Teacher(name, age, klass) {
    Person.apply(this, arguments);
    this.klass = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function(){
    if(this.klass){
        return this.teach("Class "+ this.klass);
    }else{
        return this.teach("No Class");

    }
};

Teacher.prototype.teach = function(order){
    return this.super_introduce() + " I am a Teacher. I teach " + order +".";
};

module.exports = Teacher;
