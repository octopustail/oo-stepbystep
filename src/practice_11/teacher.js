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

module.exports = Teacher;
