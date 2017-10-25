"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_6/person.js");
var Student = require("../../src/practice_6/student.js");
var Worker = require("../../src/practice_6/worker.js");


describe("Person", function(){
    it("should have field name and age", function(){
        var person = new Person("Tom", 21);
        expect(person.name).to.equal("Tom");
        expect(person.age).to.equal(21);

    });

    it("should have a method introduce, introduce person with name and age", function(){
        var person = new Person("Tom", 21);

        var introduce = person.introduce();

        expect(introduce).to.equal("My name is Tom. I am 21 years old.");

    });

    describe("Student", function(){
        it("should have field name, age and class number", function(){
            var student = new Student("Tom", 21, 2);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(2);

        });

        it("should overwrite Person introduce, introduce with name, age and class number", function(){
            var student = new Student("Tom", 21, 2);
            var introduce = student.introduce();

            expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

        });

    });


    describe("Worker", function(){

        it("should have field name, age", function(){
            var worker = new Worker("Tom", 21);
            expect(worker.name).to.equal("Tom");
            expect(worker.age).to.equal(21);

        });
        it("should overwrite Person introduce, introduce with name and age, but different with Person introduce", function(){
            var worker = new Worker("Tom", 21);
            var introduce = worker.introduce();
            expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I have a job.");

        });

    });
});