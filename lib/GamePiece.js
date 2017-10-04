class GamePiece {
	constructor(x, y, width, height, color = 'black') {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.radius = 10;
	}

	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.w, this.h, this.radius);
	}
}

module.exports = GamePiece;