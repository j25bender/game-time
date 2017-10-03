const GamePiece = require('./GamePiece.js');

module.exports = class Ball extends GamePiece{
	constructor(x, y, w, h) {
		super(x, y, w, h);
	}

	move() {
		
	}

	launch() {
		this.y -= 10;
	}
}