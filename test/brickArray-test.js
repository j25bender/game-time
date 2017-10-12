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

  it('should have empty array of brickField', () => {
    assert.deepEqual(brickArray.brickField, []);
  });

  it('should break bricks / decrease brickField length', () => {
    brickArray.populateArray();
  	console.log(brickArray.brickField.length)
  	// brickField.splice(i, 1);
  	console.log(brickArray.brickField.length)

		// assert.deepEqual(brickArray.brickField.length, 9);
		// console.log(brickArray.brickField.length)
	});
})