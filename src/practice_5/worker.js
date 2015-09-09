import Person from "./person.js";

export default class Worker extends Person{
    introduce(){
        return this.introduce + " I a Worker. I have a job.";
    }
}
