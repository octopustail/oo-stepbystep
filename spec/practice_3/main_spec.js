"use strict";
const _ = require("lodash");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);
const Person = require("../../src/practice_3/person.js");
const Student = require("../../src/practice_3/student.js");

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

        it("should overwrite Person introduce, introduce student with class", function(){
            const student = new Student("Tom", 21, 2);
            const introduce = student.introduce();

            expect(introduce).to.equal("I am a Student. I am at Class 2.");

        });

    })
});
