const Game = require('./Game.js');
const GamePiece = require('./GamePiece.js');

class Ball extends GamePiece{
	constructor(x, y, radius, Xvelocity, Yvelocity, canvas) {
		super(x, y);
      this.Xvelocity = 0;
      this.Yvelocity = 0;
      this.canvas = canvas;
      this.playerLives = 3;
	}

  draw(context) {
    context.fillStyle = "purple";
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    context.fill();
    context.closePath();
	}

	move() {
    this.x = this.x + (this.Xvelocity);
    this.y = this.y + (this.Yvelocity);
  }

  bounceWalls() {
	  if (this.x >= 600 - this.radius) {
	    this.Xvelocity = -this.Xvelocity;
	  }
	  if (this.x <= 0 + this.radius) {
	    this.Xvelocity = -this.Xvelocity;
	  }
	  if (this.y <= 0 + this.radius) {
	    this.Yvelocity = -this.Yvelocity;
	  }
	}

  bouncePaddle(paddle) {
    let ballDx = this.x + this.radius;
    let ballDy = this.y + this.radius;

    if ((ballDy > paddle.y && this.x + this.radius < paddle.bottom()) &&
      (ballDx > paddle.left() && ballDx < paddle.right())
    ) {
      this.Yvelocity = -this.Yvelocity;
  	}
    // if (ballDx < paddle.middle() * .85) {
    //     this.Xvelocity = -5;
    // } else if (ballDx < paddle.middle() * .9) {
    //     this.Xvelocity = -4;
    // } else if (ballDx < paddle.middle() * .75) {
    //     this.Xvelocity = -3;
    // } else if (this.x < paddle.middle() * .5) {
    //     this.Xvelocity = -2;
    // } else if (ballDx < paddle.middle()) {
    //     this.Xvelocity = -1;
    // } else if (ballDx >= paddle.middle() * 1.15) {
    //     this.Xvelocity = 5;
    // } else if (ballDx >= paddle.middle() * 1.10) {
    //     this.Xvelocity = 4;
    // } else if (ballDx >= paddle.middle() * 1.25) {
    //     this.Xvelocity = 3;
    // } else if (ballDx >= paddle.middle() * 1.5) {
    //     this.Xvelocity = 2;
    // } else {
    //     this.Xvelocity = 1;
    // }
	}
}

module.exports = Ball;