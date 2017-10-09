const { assert } = require('chai');
const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');

let ball;

beforeEach(() => {
  ball = new Ball();
})

it('should instantiate a new ball', () => {
  assert.isObject(ball)
});