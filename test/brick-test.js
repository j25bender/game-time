const { assert } = require('chai');
const Brick = require('../lib/Brick.js');
let brick;

beforeEach(() => {
  brick = new Brick();
})

  it('should instantiate a new Brick', () => {
    assert.isObject(brick);
  });

  // it.skip('should break when hit by the ball', () => {
  //   assert.
  // });
  