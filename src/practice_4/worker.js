import Person from "./person";

export default class Worker extends Person {
    introduce(){
        return this.basicIntroduce() + " I am a Worker. I have a job.";
    }
}

