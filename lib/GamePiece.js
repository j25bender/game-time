class GamePiece {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.radius = 10;
  }
}

module.exports = GamePiece;