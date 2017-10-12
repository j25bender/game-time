const { assert } = require('chai');
const { expect } = require('chai');
const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');
const Brick = require('../lib/Brick.js');
const Game = require('../lib/Game.js');

global.canvas = {
    width: 'width',
    height: 'height'
};

global.$ = function() {return ''};

describe('Ball Testing', () => {
let ball;
let game;

beforeEach(() => {
  ball = new Ball(10, 100, 10, 5, -5);
  game = new Game(context, canvas);
})

it('Should be a function', () =>{
  assert.isFunction(Ball)
});

it('Should instantiate a new ball', () => {
  assert.isObject(ball)
});

it('Should have a x coordinate', () => {
  assert.equal(ball.x, 10)
})

it('Should have a y coordinate', () => {
  assert.equal(ball.y, 100)
})

it('Should bounce off the top of the canvas', () => {
  game.launchBall();
  assert.equal(game.ball.Yvelocity, -4, true);
  game.ball.y = -10;
  game.ball.bounceWalls();
  assert.equal(game.ball.Yvelocity, 4, true);
})

it('Should bounce off the right wall', () => {
  game.launchBall();
  assert.equal(game.ball.Xvelocity, 2.5, true)
  game.ball.x = 650;
  game.ball.bounceWalls();
  assert.equal(game.ball.Xvelocity, -2.5, true)
})

it('Should bounce off the left wall', () => {
  assert.equal(game.ball.Xvelocity, 0, true)
  game.launchBall();
  if (game.ball.Xvelocity = -2.5) {
      game.ball.x = 0;
      game.ball.bounceWalls();
  }
  assert.equal(game.ball.Xvelocity, 2.5, true)
})

it('Should bounce off the paddle', () => {
  let paddle = new Paddle(200, 40, 75, 20)
  game.launchBall();
  assert.equal(game.ball.Yvelocity, 4, true)
  game.ball.y = 40;
  game.ball.bouncePaddle();
  assert.equal(game.ball.Yvelocity, -4, true)
})

it('Should break bricks and bounce', () => {
  let brick = new Brick(15, 500)
  let brickArray = new BrickArray()
  game.launchBall();
  assert.equal(game.ball.Yvelocity, -4, true)
  game.ball.y = 500;
  game.brickArray.breakBricks();
  assert.equal(game.ball.Yvelocity, 4, true)
});

it('Should bounce off the obstacle', () => {
  let obstacle = new Obstacle(300, 300, 200, 20)
  game.launchBall();
  assert.equal(game.ball.Yvelocity, -4, true)
  game.ball.y = 300;
  game.obstacle.bounceObstacle();
  assert.equal(game.ball.Yvelocity, 4, true)
});

})