"use strict";
const _ = require("lodash");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);
const Person = require("../../src/practice_1/person.js");

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
});