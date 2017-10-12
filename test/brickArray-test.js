const { assert } = require('chai');
const BrickArray = require('../lib/BrickArray.js');

let brickArray;

describe('BrickArray Testing', () => {

	beforeEach(() => {
  	brickArray = new BrickArray(2, 5);
	})

	it('BrickArray should be a function', () => {
    assert.isFunction(BrickArray);
  });

  it('should instantiate a new BrickArray', () => {
    assert.isObject(brickArray);
  });

  it('should have rows', () => {
    assert.equal(brickArray.r, 2);
  });

  it('should have columns', () => {
    assert.equal(brickArray.c, 5);
  });
})