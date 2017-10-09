const { assert } = require('chai');
const Paddle = require('../lib/Paddle.js');

describe('Paddle testing', () => {
  let paddle;

  beforeEach(() => {
    paddle = new Paddle(x,y,w,h);
  })

  it('should be an instance of Paddle', () => {
    assert.equal(paddle instanceof (Paddle), true);
  })

  it('should have x coordinate', () => {
    assert.equal(paddle.x, 10);
  })
})