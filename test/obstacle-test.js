const { assert } = require('chai');
const Obstacle = require('../lib/Obstacle.js');
const Game = require('../lib/Game.js')

describe('Obstacle Testing', () => {
  let obstacle;

  beforeEach(() => {
    obstacle = new Obstacle(300, 400, 200, 15);
  })

  it('Obstacle should be a function', () => {
    assert.isFunction(Obstacle);
  });

  it('Should instantiate a new Obstacle', () => {
    assert.isObject(obstacle);
  })

  it('Should have x coordinate', () => {
    assert.equal(obstacle.x, 300);
  })

  it('Should have a y coordinate', () => {
    assert.equal(obstacle.y, 400)
  })

  it('Should have width', () => {
    assert.equal(obstacle.width, 200);
  })

  it('Should have a height', () => {
    assert.equal(obstacle.height, 15)
  })
})
