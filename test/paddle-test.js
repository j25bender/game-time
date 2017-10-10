const { assert } = require('chai');
const Paddle = require('../lib/Paddle.js');
const Game = require('../lib/Game.js')

describe('Paddle testing', () => {
  let paddle;

  beforeEach(() => {
    paddle = new Paddle(300, 100, 100, 15);
  })

  it('should instantiate a new Paddle', () => {
    assert.isObject(paddle);
  })

  it('should have x coordinate', () => {
    assert.equal(paddle.x, 300);
  })

  it('should have a y coordinate', () => {
    assert.equal(paddle.y, 100)
  })

  
})