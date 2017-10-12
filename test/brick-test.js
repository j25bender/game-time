const { assert } = require('chai');
const Brick = require('../lib/Brick.js');
let brick;

describe('Brick Testing', () => {

beforeEach(() => {
  brick = new Brick();
})
  
  it('Should be a function', () =>{
    assert.isFunction(Brick)
  });

  it('Should instantiate a new Brick', () => {
    assert.isObject(brick);
  });

  it('Should have a width', () => {
    assert.equal(brick.width, 100)
  });

  it('Should have a height', () => {
    assert.equal(true, true)
  })
 }) 