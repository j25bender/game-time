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

  it('Should instantiate a new BrickArray', () => {
    assert.isObject(brickArray);
  });

  it('Should have rows', () => {
    assert.equal(brickArray.r, 2);
  });

  it('Should have columns', () => {
    assert.equal(brickArray.c, 5);
  });

  it('Should have empty array of brickField', () => {
    assert.deepEqual(brickArray.brickField, []);
  });

  it('Should break bricks / decrease brickField length', () => {
    brickArray.populateArray();
  	brickArray.brickField.splice(1, 1);
	});
})