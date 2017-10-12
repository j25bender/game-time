const { assert } = require('chai');
const Paddle = require('../lib/Paddle.js');
const Game = require('../lib/Game.js')

global.canvas = {
    width: 'width',
    height: 'height'
};

global.event =  {
    clientX: 30
}

// let event = new MouseEvent();
// event.clientX = 30;

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
    console.log(paddle);
    let event = { clientX: 30 }
    console.log(event);
    paddle.paddleMove(event);
    assert.equal(paddle.x, 30);

    // check paddle initial x position

    // create a fake event
    // const event = {
    //   clientX: 52
    // }

    // paddle.move(event);

    // paddle x should now be the same as event.clientX
  })  
})