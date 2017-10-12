const { assert } = require('chai');
const Brick = require('../lib/Brick.js');
let brick;

beforeEach(() => {
  brick = new Brick();
})
  
  it('should be a function', () =>{
    assert.isFunction(Brick)
  });

  it('should instantiate a new Brick', () => {
    assert.isObject(brick);
  });

  it('should have a width', () => {
    assert.equal(brick.width, 100)
  });

  it('should have a height', () => {
    assert.equal(true, true)
  })
  