// const expect = require("chai").expect;

const add = require('../v1/parcels');

describe('Add f(x)', () => {
    it("should return x + y =z ", () => {
        expect(add(10,5)).toEqual(15);        
    });
})