const { assert } = require('chai');
const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');

let ball;

beforeEach(() => {
  ball = new Ball(10, 100, 10, 5, -5);
})

it('should instantiate a new ball', () => {
  assert.isObject(ball)
});

it('should have a x coordinate', () => {
  assert.equal(ball.x, 10)
})

it('should have a y coordinate', () => {
  assert.equal(ball.y, 100)
})