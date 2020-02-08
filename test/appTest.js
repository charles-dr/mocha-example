const assert = require('chai').assert;
const app = require('../app');
const { sayHello, addNumbers } = require('../app');

describe('App', function() {
    describe('sayHello', function() {
        it('app should return hello', function(){ 
            assert.equal(sayHello(), 'hello');
        });

        it('sayHello should return type string', function() {
            let result = sayHello();
            assert.typeOf(result, 'string');
        })        
    })

    describe('addNumbers', function() {
        it('addNumbers should be above 5', function() {
            let result = addNumbers(5,5);
            assert.isAbove(result, 5);
        })

        it('addNumbers should return type number', function() {
            let result = addNumbers(5,5);
            assert.typeOf(result, 'number');
        })
    })

});