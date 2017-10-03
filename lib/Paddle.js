const GamePiece = require('./GamePiece.js');

module.exports = class Paddle extends GamePiece {
	constructor(x, y, w, h, color) {
		// super(...arguments);
		super(x, y, w, h, color);
	}

	move() {
		this.x--;
	}
}