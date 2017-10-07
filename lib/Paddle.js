const GamePiece = require('./GamePiece.js');

module.exports = class Paddle extends GamePiece {
	constructor(x, y, width, height) {
		super(x, y, width, height);
	}

  draw(context) {
    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(this.x, this.y, this.width, this.height);
    context.closePath();
  }
}
