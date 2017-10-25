"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var Person = require("../../src/practice_8/person.js");
var Student = require("../../src/practice_8/student.js");
var Teacher = require("../../src/practice_8/teacher-option2.js");
var Class = require("../../src/practice_8/class.js");

describe("Option-2 Person", function(){
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
        var klass;
        
        before(function(){
           klass = new Class(2); 
        });
        
        it("should have field name, age and class number", function(){
            var student = new Student("Tom", 21, klass);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(klass);
        });

        it("should overwrite Person introduce, introduce with name, age and class number", function(){
            var student = new Student("Tom", 21, klass);
            var introduce = student.introduce();

            expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

        });

    });

    describe("Teacher", function(){
        var klass;

        before(function(){
            klass = new Class(2);
        });

        it("should have field name, age and class number", function(){
            var teacher = new Teacher("Tom", 21, klass);
            expect(teacher.name).to.equal("Tom");
            expect(teacher.age).to.equal(21);
            expect(teacher.klass).to.equal(klass);
        });
        
        describe("#introduce", function(){
            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have class", function(){
                var teacher = new Teacher("Tom", 21, klass);
                var introduce = teacher.introduce();

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.");

            });

            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have no class", function(){
                var teacher = new Teacher("Tom", 21);
                var introduce = teacher.introduce();

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");

            });
        });
        
        
        describe("#introduceWith", function(){
            var studentJerry;
            
            before(function(){
                studentJerry = new Student("Jerry", 8, klass);
            });
            
            it("should return I am teaching some guy, given my class is same with this guy's class", function(){
                var teacher = new Teacher("Tom", 21, klass);
                var introduce = teacher.introduceWith(studentJerry);

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.");

            });

            it("should return I am teaching some guy, given my class is different with this guy's class", function(){
                var teacher = new Teacher("Tom", 21, new Class(10));
                var introduce = teacher.introduceWith(studentJerry);

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");

            });
        });
        
        
        
        
    });
});

describe("Class", function(){
    it("should have class number", function(){
        var klass = new Class(2);
        expect(klass.number).to.equal(2);
    });

    it("should get display name with number", function(){
        var klass = new Class(2);
        expect(klass.getDisplayName()).to.equal("Class 2");
    });
});
