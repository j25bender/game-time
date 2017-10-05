const GamePiece = require('./GamePiece.js');

module.exports = class Paddle extends GamePiece {
	constructor(x, y, width, height, color) {
		// super(...arguments);
		super(x, y, width, height, color);
	}

    draw(context) {
      context.beginPath();
      context.fillRect(this.x, this.y, this.width, this.height);
      context.fillStyle = "black";
      context.closePath();
    }

	move() {
		this.x;
	}
}