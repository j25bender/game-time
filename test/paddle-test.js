const { assert } = require('chai');
const Paddle = require('../lib/Paddle.js');
const Game = require('../lib/Game.js')

global.canvas = {
    width: 600,
    height: 600
};

global.event =  {
    clientX: 740
}

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

  it('should move with a move event', () => {
    assert.equal(paddle.x, 300);
    let mouseX = 300;
    paddle.paddleMove(event, canvas);
    assert.equal(paddle.x, 30);
  })  
})
