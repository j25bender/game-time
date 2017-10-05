const GamePiece = require('./GamePiece.js');
const Game = require('./Game.js');

class Ball extends GamePiece{
	constructor(x, y, radius, Xvelocity, Yvelocity, canvas) {
		super(x, y, radius);
        this.Xvelocity = 2;
        this.Yvelocity = -2;
        this.canvas = canvas;
	}

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
	}

	move() {
        this.x = this.x + (this.Xvelocity);
        this.y = this.y + (this.Yvelocity);
    }

    bounceWalls(context) {
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
}

module.exports = Ball;