var Person = require("./person.js");

function Worker(name, age, klass) {
    Person.apply(this, arguments);
    this.klass = klass;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function(){
    return this._basicIntroduce() + " I am a Worker. I have a job.";
};

module.exports = Worker;