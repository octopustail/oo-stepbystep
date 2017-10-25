function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype._basicIntroduce = function(){
    return "My name is "+this.name+". I am "+this.age+" years old.";
};
Person.prototype.introduce = function(){
    return this._basicIntroduce();
};

module.exports = Person;