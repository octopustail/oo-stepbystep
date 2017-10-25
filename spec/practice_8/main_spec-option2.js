"use strict";
const _ = require("lodash");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

const Person = require("../../src/practice_8/person.js");
const Student = require("../../src/practice_8/student.js");
const Teacher = require("../../src/practice_8/teacher-option2.js");
const Class = require("../../src/practice_8/class.js");

describe("Option-2 Person", function(){
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
        let klass;
        
        before(function(){
           klass = new Class(2); 
        });
        
        it("should have field name, age and class number", function(){
            const student = new Student("Tom", 21, klass);
            expect(student.name).to.equal("Tom");
            expect(student.age).to.equal(21);
            expect(student.klass).to.equal(klass);
        });

        it("should overwrite Person introduce, introduce with name, age and class number", function(){
            const student = new Student("Tom", 21, klass);
            const introduce = student.introduce();

            expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");

        });

    });

    describe("Teacher", function(){
        let klass;

        before(function(){
            klass = new Class(2);
        });

        it("should have field name, age and class number", function(){
            const teacher = new Teacher("Tom", 21, klass);
            expect(teacher.name).to.equal("Tom");
            expect(teacher.age).to.equal(21);
            expect(teacher.klass).to.equal(klass);
        });
        
        describe("#introduce", function(){
            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have class", function(){
                const teacher = new Teacher("Tom", 21, klass);
                const introduce = teacher.introduce();

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.");

            });

            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have no class", function(){
                const teacher = new Teacher("Tom", 21);
                const introduce = teacher.introduce();

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");

            });
        });
        
        
        describe("#introduceWith", function(){
            let studentJerry;
            
            before(function(){
                studentJerry = new Student("Jerry", 8, klass);
            });
            
            it("should return I am teaching some guy, given my class is same with this guy's class", function(){
                const teacher = new Teacher("Tom", 21, klass);
                const introduce = teacher.introduceWith(studentJerry);

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.");

            });

            it("should return I am teaching some guy, given my class is different with this guy's class", function(){
                const teacher = new Teacher("Tom", 21, new Class(10));
                const introduce = teacher.introduceWith(studentJerry);

                expect(introduce).to.equal("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");

            });
        });
        
        
        
        
    });
});

describe("Class", function(){
    it("should have class number", function(){
        const klass = new Class(2);
        expect(klass.number).to.equal(2);
    });

    it("should get display name with number", function(){
        const klass = new Class(2);
        expect(klass.getDisplayName()).to.equal("Class 2");
    });
});
