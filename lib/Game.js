const Ball = require('./Ball.js');
const Paddle = require('./Paddle.js');
const BrickArray = require('./BrickArray.js');

module.exports = class Game {
	constructor(context, width, height) {
		const ballX = width / 2;
		const ballY = height / 2;

		this.ball = new Ball(ballX, ballY, 30, 30);
		this.paddle = new Paddle(width - 100, 550, 100, 15, 'green');
		this.brickArray = new BrickArray(3, 8);

		this.width = width;
		this.height = height;
		this.context = context;
	}

	buildGame() {
		if (this.gameStarted === 0){
			this.brickArray.populateArray();
		}
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.width, this.height)
		this.ball.draw(this.context);
		this.ball.move();

		this.paddle.draw(this.context);
		this.paddle.move();
		this.brickArray.drawBricks(this.context);


		// continue animating
		requestAnimationFrame(this.gameLoop.bind(this))		
	}

	startGame() {
		// starting animation

		requestAnimationFrame(this.gameLoop.bind(this))
	}

	keyPressed() {
		this.ball.launch();
	}

}
