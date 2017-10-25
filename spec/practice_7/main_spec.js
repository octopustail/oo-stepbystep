"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var Person = require("../../src/practice_7/person.js");
var Student = require("../../src/practice_7/student.js");
var Teacher = require("../../src/practice_7/teacher.js");


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

   describe("Teacher", function(){
       it("should have field name, age and class number", function(){
           var teacher = new Teacher("Tom", 21, 2);
           expect(teacher.name).to.equal("Tom");
           expect(teacher.age).to.equal(21);
           expect(teacher.klass).to.equal(2);
       });

       it("should overwrite Person introduce, introduce with name, age and class number, given teacher have class", function(){
           var teacher = new Teacher("Tom", 21, 2);
           var introduce = teacher.introduce();

           expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.");

       });

       it("should overwrite Person introduce, introduce with name, age and class number, given teacher have no class", function(){
           var teacher = new Teacher("Tom", 21);
           var introduce = teacher.introduce();

           expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");

       });
   }); 
});
