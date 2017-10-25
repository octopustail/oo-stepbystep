"use strict";
const _ = require("lodash");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);
const Person = require("../../src/practice_6/person.js");
const Student = require("../../src/practice_6/student.js");
const Worker = require("../../src/practice_6/worker.js");


describe("Person", function(){
    it("should have field name and age", function(){
        const person = new Person("Tom", 21);
        expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);

    });

    it("should have a method introduce, introduce person with name and age", function(){
        const person = new Person("Tom", 21);

        const introduce = person.introduce();

        expect(introduce).to.equal("My name is Tom. I am 21 years old.");

    });

    describe("Student", function(){
        it("should have field name, age and class number", function(){
            const student = new Student("Tom", 21, 2);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(2);

        });

        it("should overwrite Person introduce, introduce with name, age and class number", function(){
            const student = new Student("Tom", 21, 2);
            const introduce = student.introduce();

            expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

        });

    });


    describe("Worker", function(){

        it("should have field name, age", function(){
            const worker = new Worker("Tom", 21);
            expect(worker.name).to.equal("Tom");
            expect(worker.age).to.equal(21);

        });
        it("should overwrite Person introduce, introduce with name and age, but different with Person introduce", function(){
            const worker = new Worker("Tom", 21);
            const introduce = worker.introduce();
            expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I have a job.");

        });

    });
});