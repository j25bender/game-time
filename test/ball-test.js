const { assert } = require('chai');
const { expect } = require('chai');
const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const Game = require('../lib/Game.js')

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

it('should bounce off the top of the canvas', () => {
  assert.equal(ball.Yvelocity, -2, true)
  ball.bounceWalls();
  assert.equal(ball.Yvelocity, 2, true)
})

it('should bounce off the right wall', () => {
  assert.equal(ball.Xvelocity, 2, true)
  ball.bounceWalls();
  assert.equal(ball.Xvelocity, -2, true)
})

it('should bounce off the left wall', () => {
  console.log(ball.bounceWalls)
  assert.equal(ball.Xvelocity, -2, true)
  ball.bounceWalls();
  assert.equal(ball.Xvelocity, 2, true)
})

it.skip('should bounce off the paddle', () => {
  
})

it.skip('should bounce off a brick', () => {
  
})