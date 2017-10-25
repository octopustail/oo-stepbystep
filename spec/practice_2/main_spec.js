"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require("../../src/practice_2/person.js");

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
});