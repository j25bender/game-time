const Paddle = require('./Paddle.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');
const Brick = require('./Brick.js');
// const livesLeft = document.getElementById('lives');
// const currentLevel = document.getElementById('level');


module.exports = class Game {
	constructor(context, canvas) {
		this.ball = new Ball(canvas.width / 2, canvas.height - 45);
		this.paddle = new Paddle(canvas.width / 2 - 120 / 2, canvas.height - 30, 100, 15);
		this.brickArray = new BrickArray(3, 5);
		this.canvas = canvas;
		this.context = context;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.ball.draw(this.context);
		this.ball.move();
		this.paddle.draw(this.context);
		this.brickArray.drawBricks(this.context);
		this.ball.bounceWalls(this.context);
		this.ball.bouncePaddle(this.paddle);
		this.brickArray.breakBricks(this.brickArray.brickField, this.ball);
		this.gameLost();
	}

	startGame() {
		$('#start-button').prop('disabled', true);
		this.brickArray.populateArray();
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

  launchBall(){
  	this.ball.Xvelocity = 2;
    this.ball.Yvelocity = -2;
	}

	respawnBall(){
		this.ball.x = this.paddle.x + 10;
			this.ball.y = this.paddle.y - 50;
			this.Xvelocity = 0;
			this.Yvelocity = 0;
			this.ball.draw(this.context);
			requestAnimationFrame(this.gameLoop.bind(this));
	}

  gameLost(){
  	let playerLives = 3;
  	if (this.ball.y >= 600 && playerLives > 0) {
			cancelAnimationFrame(this.gameLoop.bind(this));
			playerLives--;
		}	else {
			requestAnimationFrame(this.gameLoop.bind(this));
		}
  }

  pauseGame(){
  	cancelAnimationFrame(this.gameLoop.bind(this));
  }

  newLevel() {
    if (this.lives > 0 && this.bricks.length === 0) {
      this.gameWon();
      this.gameOn = false;
      this.currentLevel += 1;;
    }
  }

  gameWon() {

  }
}