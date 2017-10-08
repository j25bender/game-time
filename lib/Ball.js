const Game = require('./Game.js');
const GamePiece = require('./GamePiece.js');

class Ball extends GamePiece{
	constructor(x, y, radius, Xvelocity, Yvelocity, canvas) {
		super(x, y, radius);
      this.Xvelocity = 2;
      this.Yvelocity = -2;
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
    if ((this.y + this.radius > paddle.y && this.x + this.radius < paddle.bottom()) &&
      (this.x + this.radius > paddle.left() && this.x + this.radius < paddle.right())
    ) {
      this.Yvelocity = -this.Yvelocity;
  	}
	}
}

module.exports = Ball;