const { assert } = require('chai');
const Paddle = require('../lib/Paddle.js');

describe('Paddle testing', () => {
  let paddle;

  beforeEach(() => {
    paddle = new Paddle(300, 100, 100, 15);
  })

  it('should be an instance of Paddle', () => {
    assert.equal(paddle instanceof (Paddle), true);
  })

  it('should have x coordinate', () => {
    assert.equal(paddle.x, 300);
  })
})