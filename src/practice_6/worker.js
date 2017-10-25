var Person = require("./person.js");

function Worker(name, age) {
    Person.apply(this, arguments);

}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.super_introduce = Worker.prototype.introduce;
Worker.prototype.introduce = function(){
    return this.super_introduce() + " I am a Teacher. I have a job.";
};

module.exports = Worker;