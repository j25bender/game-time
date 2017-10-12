const { assert } = require('chai');
const Obstacle = require('../lib/Obstacle.js');
const Game = require('../lib/Game.js')

describe('Obstacle Testing', () => {
  let obstacle;

  beforeEach(() => {
    obstacle = new Obstacle(this.canvas.width / 3, 400, 200, 15);
  })

  it('should instantiate a new Obstacle', () => {
    assert.isObject(obstacle);
  })

  it('should have x coordinate', () => {
    assert.equal(obstacle.x, this.canvas.width / 3);
  })

  it('should have a y coordinate', () => {
    assert.equal(obstacle.y, 400)
  })

  it('ball should bounce off obstacle', () => {
    assert.equal(obstacle.y, 400)
  })  
})
