const { assert } = require('chai');
const { expect } = require('chai');
const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const BrickArray = require('../lib/BrickArray.js')
const Game = require('../lib/Game.js');

global.canvas = {
    width: 'width',
    height: 'height'
};

global.$ = function() {return ''};

describe('Ball testing', () => {
let ball;
let game;

beforeEach(() => {
  ball = new Ball(10, 100, 10, 5, -5);
  game = new Game(context, canvas);
})

it('should be a function', () =>{
  assert.isFunction(Ball)
});

it('should move', () =>{
  assert.equal(ball.x, 10);
  ball.Xvelocity = 2.5;
  ball.move();
  assert.equal(ball.x, 12.5);
});

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
  game.launchBall();
  assert.equal(game.ball.Yvelocity, -4, true);
  game.ball.y = -10;
  game.ball.bounceWalls();
  assert.equal(game.ball.Yvelocity, 4, true);
})

it('should bounce off the right wall', () => {
  game.launchBall();
  assert.equal(game.ball.Xvelocity, 2.5, true)
  game.ball.x = 650;
  game.ball.bounceWalls();
  assert.equal(game.ball.Xvelocity, -2.5, true)
})

it('should bounce off the left wall', () => {
  assert.equal(game.ball.Xvelocity, 0, true)
  game.launchBall();
  if (game.ball.Xvelocity = -2.5) {
      game.ball.x = 0;
      game.ball.bounceWalls();
  }
  assert.equal(game.ball.Xvelocity, 2.5, true)
})


})