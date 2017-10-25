import Person from "./person.js";

function Teacher(name, age, klass) {
    Person.apply(this, arguments);
    this.klass = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function(){
    if(this.klass){
        return this.teach(this.klass.getDisplayName());
    }else{
        return this.teach("No Class");

    }
};

Teacher.prototype.basicIntroduce = function(order){
    return `${this.super_introduce()} I am a Teacher.`;
};

Teacher.prototype.teach = function(order){
    return `${this.basicIntroduce()} I teach ${order}.`;
};

Teacher.prototype.doNotTeach = function(order){
    return `${this.basicIntroduce()} I don't teach ${order}.`;
};

Teacher.prototype.introduceWith = function({klass, name}) {
    if(klass.equal(this.klass)){
        return this.teach(name);
    }else{
        return this.doNotTeach(name);
    }
};

export default Teacher;
