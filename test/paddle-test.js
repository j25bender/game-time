const { assert } = require('chai');
const Paddle = require('../lib/Paddle.js');
const Game = require('../lib/Game.js')

describe('Paddle Testing', () => {
  let paddle;

  beforeEach(() => {
    paddle = new Paddle(300, 100, 100, 15);
  })

  it('Paddle should be a function', () => {
    assert.isFunction(Paddle);
  });

  it('Should instantiate a new Paddle', () => {
    assert.isObject(paddle);
  })

  it('Should have x coordinate', () => {
    assert.equal(paddle.x, 300);
  })

  it('Should have a y coordinate', () => {
    assert.equal(paddle.y, 100)
  })
})