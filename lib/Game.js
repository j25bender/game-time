const Ball = require('./Ball.js');
const Paddle = require('./Paddle.js');
const BrickArray = require('./BrickArray.js');
const Brick = require('./Brick.js');

module.exports = class Game {
	constructor(context, width, height) {
		const ballX = width / 2;
		const ballY = height -50;

		this.ball = new Ball(ballX, ballY, 30, 30);
		this.paddle = new Paddle(300, 550, 100, 15, 'green');
		// this.brick = new Brick(x, y, w, h);
		this.brickArray = new BrickArray(3, 8);

		this.width = width;
		this.height = height;
		this.context = context;
	}

	buildGame() { 
		// this.gameStarted === 0
		// if (true){
		// 	this.brickArray.populateArray();
		// }

		// this.width = width;
		// this.height = height;
		// this.context = context;
		// this.brickField = [];
		// this.brickArray.populateArray();
	}

	gameLoop() {

		this.context.clearRect(0, 0, this.width, this.height)
		this.ball.draw(this.context);
		this.ball.move();
		this.paddle.draw(this.context);
		this.paddle.move();
		// this.brick.draw(this.context);
		this.brickArray.drawBricks(this.context);
		this.ball.bounceWalls(this.context);


		// continue animating
		requestAnimationFrame(this.gameLoop.bind(this))		
	}

	startGame() {
		// starting animation
		this.brickArray.populateArray();
		requestAnimationFrame(this.gameLoop.bind(this))
	}

	keyPressed() {
		this.ball.launch();
	}

}
