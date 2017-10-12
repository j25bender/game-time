const GamePiece = require('./GamePiece.js');

module.exports = class Obstacle extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height);

    this.right = this.x + this.width;
    this.left = this.x;
    this.bottom = this.y + this.height;
    this.top = this.y;
  }

  draw(context) {
    context.fillStyle = "grey";
    context.beginPath();
    context.fillRect(this.x, this.y, this.width, this.height);
    context.closePath();
  }

  bounceObstacle(ball) {
    if ((ball.y + ball.radius > this.top && 
         ball.y - ball.radius < this.bottom) &&

        (ball.x + ball.radius > this.left && 
         ball.x + ball.radius < this.right)) {
          
      ball.Yvelocity = -ball.Yvelocity;
    }
  }
};
