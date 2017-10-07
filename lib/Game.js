const Ball = require('./Ball.js');
const Paddle = require('./Paddle.js');
const BrickArray = require('./BrickArray.js');
const Brick = require('./Brick.js');

module.exports = class Game {
	constructor(context, canvas) {
		this.ball = new Ball(canvas.width / 2, canvas.height - 50, 30, 30);
		this.paddle = new Paddle(canvas.width / 2 - 120 / 2, canvas.height - 30, 100, 15, 'green');
		this.brickArray = new BrickArray(3, 5);
		this.canvas = canvas;
		this.context = context;
	}

	buildGame() { 
		this.paddle = new Paddle(260, 550, 100, 15, 'green');
		this.width = width;
		this.height = height;
		this.context = context;
		this.brick = [];
		this.canvas = canvas;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.ball.draw(this.context);
		this.ball.move();
		this.paddle.draw(this.context);
		this.brickArray.drawBricks(this.context);
		this.ball.bounceWalls(this.context);

		requestAnimationFrame(this.gameLoop.bind(this))		
	}

	startGame() {
		this.brickArray.populateArray();
		this.brickArray.collision();
		requestAnimationFrame(this.gameLoop.bind(this))
	}

  paddleMove(e) {
    let mouseX = e.clientX - this.canvas.offsetLeft;

    if (mouseX < (this.paddle.width / 2)) {
      this.paddle.x = 0;
    } else if (mouseX > this.canvas.width) {
      this.paddle.x = this.canvas.width - this.paddle.width;
    } else if (mouseX > (this.paddle.width / 2) && mouseX < this.canvas.width - (this.paddle.width / 2)) {
      this.paddle.x = mouseX - (this.paddle.width / 2);
    }
  }
}