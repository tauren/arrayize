'use strict';

var chai = require('chai');
var expect = chai.expect;

var arrayize = require('../index');

var emptyArray = [];
var stringArray = ['foo','bar'];
var numArray = [1, 2, 3];
var multiArray = ['foo', 1, false];
var obj = { foo: 'bar'};

describe("arrayize", function() {
  it("should be a function", function(){
    expect(arrayize).to.be.a('function');
  });
  it("should return empty array when input is undefined", function(){
    var result = arrayize(undefined);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.be.empty;
    expect(result).to.deep.equal([]);
    result = arrayize();
    expect(result).to.be.instanceOf(Array);
    expect(result).to.be.empty;
    expect(result).to.deep.equal([]);
  });
  it("should return empty array when input is null", function(){
    var result = arrayize(null);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.be.empty;
    expect(result).to.deep.equal([]);
  });
  it("should return empty array when input is an empty array", function(){
    var result = arrayize(emptyArray);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.equal(emptyArray);
  });
  it("should return input array when input is an array", function(){
    var result = arrayize(emptyArray);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.equal(emptyArray);
    result = arrayize(stringArray);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.equal(stringArray);
    result = arrayize(numArray);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.equal(numArray);
    result = arrayize(multiArray);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.equal(multiArray);
  });
  it("should return one element array containing input value when input is an object", function(){
    var result = arrayize(obj);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal(obj);
    expect(result[0]).to.have.property('foo').that.equals('bar');
  });
  it("should return one element array containing input value when input is a string", function(){
    var result = arrayize('foo');
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal('foo');
  });
  it("should return one element array containing input value when input is a number", function(){
    var result = arrayize(3);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal(3);
  });
  it("should return one element array containing input value when input is a boolean", function(){
    var result = arrayize(true);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal(true);
  });
  it("should return one element array containing input value when input is a function", function(){
    var fn = function() {};
    var result = arrayize(fn);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal(fn);
  });
  it("should return one element array containing input value when input is a date", function(){
    var date = new Date();
    var result = arrayize(date);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal(date);
  });
  it("should return one element array containing input value when input is a regex", function(){
    var regex = /foo/;
    var result = arrayize(regex);
    expect(result).to.be.instanceOf(Array);
    expect(result).to.have.length.of(1);
    expect(result[0]).to.equal(regex);
  });

});