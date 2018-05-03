import Person from "./person.js"

class Worker extends Person {


    introduce() {
        return super.introduce() + " I am a Teacher. I have a job."
    }
}

module.exports = Worker;