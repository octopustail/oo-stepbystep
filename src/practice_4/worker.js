import Person from "./person.js"

class Worker extends Person {


    introduce() {
        return super.introduce() + " I am a Worker. I have a job."
    }
}

module.exports = Worker;