const GamePiece = require('./GamePiece.js');

module.exports = class Paddle extends GamePiece {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  draw(context) {
    context.fillStyle = "#fff";
    context.beginPath();
    context.fillRect(this.x, this.y, this.width, this.height);
    context.closePath();
  }

  middle() {
    return this.x + (this.width / 2);
  }
  
  right() {
    return this.x + this.width;
  }

  left() {
    return this.x;
  }

  bottom() {
    return this.y + this.height;
  }

  paddleMove(e, canvas) {
    let mouseX = e.clientX - 660;
    let halfPaddle = this.width / 2;

   if (mouseX < halfPaddle) {
      this.x = 0;
    } else if (mouseX > canvas.width) {
      this.x = canvas.width - this.width;
    } else if (mouseX > halfPaddle &&
      mouseX < canvas.width - halfPaddle) {
      this.x = mouseX - halfPaddle;
    }
  }
};
