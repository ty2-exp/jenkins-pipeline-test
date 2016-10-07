/**
 * Created by terry on 7/10/2016.
 */
var calc = require('../calc.js');

var assert = require('assert');

describe('Calc', function() {
    describe('times', function() {
        it('should return 2 when the value is 1, 1', function() {
            assert.equal(2, calc.plus(1, 1));
        });
    });
});