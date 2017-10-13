const { assert } = require('chai');
const BrickArray = require('../lib/BrickArray.js');
const Ball = require('../lib/Ball.js');

let brickArray;
let ball;

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

  it('should break bricks / decrease brickField length', () => {
    console.log(brickArray.brickField.length);
    assert.equal(brickArray.brickField.length, 10);
    ball = new Ball(548.5, 82);
    brickArray.breakBricks(brickArray.brickField, ball);
    assert.equal(brickArray.brickField.length, 9);
	});
})
