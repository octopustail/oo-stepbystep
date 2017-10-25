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
        return this.basicIntroduce(this.klass.getDisplayName());
    }else{
        return this.basicIntroduce("No Class");

    }
};

Teacher.prototype.trickyIntroduce = function(pre, order){
    return this.super_introduce() + " I am a Teacher. I "+pre+"teach " + order +".";
};
Teacher.prototype.basicIntroduce = function(order){
    return this.trickyIntroduce("", order);
};

Teacher.prototype.introduceWith = function(student){
    if(student.klass.equal(this.klass)){
        return this.basicIntroduce(student.name);
    }else{
        return this.trickyIntroduce("don't ", student.name);

    }
};

module.exports = Teacher;
