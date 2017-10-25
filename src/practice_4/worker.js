import Person from "./person.js";

function Worker(name, age, klass) {
    Person.apply(this, arguments);
    this.klass = klass;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.introduce = () => "I am a Worker. I have a job.";

export default Worker;