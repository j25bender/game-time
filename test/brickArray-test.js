const { assert } = require('chai');
const BrickArray = require('../lib/BrickArray.js');

let brickArray;

describe('BrickArray Testing', () => {

	beforeEach(() => {
  	brickArray = new BrickArray(2, 5);
  	ball = new Ball(canvas.width / 2, canvas.height - 15);
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

  it('should break bricks / decrease brickField length', () => {
    brickArray.populateArray();
    console.log(brickArray)
  	brickArray.brickField.splice(1, 1);
	});
})

// write breakbrick test
// brickArray.populateArray();
// create ball that is intersecting with one of the bricks
// check the length of brick array
// brickArray.breakBricks(brickArray, ball)
// check the length of brick array is one less