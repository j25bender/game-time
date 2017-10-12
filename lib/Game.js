const Paddle = require('./Paddle.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');
const Brick = require('./Brick.js');
const Obstacle = require('./Obstacle.js');


module.exports = class Game {
	constructor(context, canvas) {
		this.ball = new Ball(canvas.width / 2, canvas.height - 15);
		this.paddle = new Paddle(canvas.width / 2 - 100 / 2, canvas.height - 30, 120, 15);
		this.brickArray = new BrickArray(2, 5);
		this.obstacle = new Obstacle(this.x, this.y, this.width, this.height);
		this.canvas = canvas;
		this.$canvas = $(canvas);
		this.context = context;
		this.gameOn = false;
		this.score = 0;
		this.$score = $('.score');
		this.level = 1;
		this.$level = $('#level');
		this.lives = 3;
		this.$lives = $('.lives');
		this.$lifeLost = $('.life-lost');
		this.$startScreen = $('.start-screen')
		this.$videoBackground = $('.video-background');
		this.$level2 = $('.level2');
		this.$level3 = $('.level3');
		this.$userWin = $('.user-win');
		this.$startButton = $('#start-button');
		this.$gameOver = $('.game-over');
		this.hasBeenLaunched = false;
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.ball.draw(this.context);
		this.ball.move();
		this.paddle.draw(this.context);
		this.obstacle.draw(this.context);
		this.obstacle.bounceObstacle(this.ball);
		this.brickArray.drawBricks(this.context);
		this.ball.bounceWalls(this.context);
		this.ball.bouncePaddle(this.paddle);
		let brickDidBreak = this.brickArray.breakBricks(this.brickArray.brickField, this.ball);

		if (brickDidBreak) {
			this.increaseScore();
		}

		this.gameLost();
		this.gameWon();
	}

	startGame() {
		$('#start-button').prop('disabled', true);
		this.hasBeenLaunched = false;
		this.hideModals();
		this.$canvas.show();
		if (this.level === 1) {
			this.firstLevel();
		} else if (this.level === 2) {
			this.secondLevel();
		} else if (this.level === 3) {
			this.thirdLevel();
		}
		this.animationFrameID = requestAnimationFrame(this.gameLoop.bind(this));
	}

	hideModals() {
		this.$startScreen.addClass('hide');
		this.$level2.addClass('hide');
		this.$level3.addClass('hide');
		this.$userWin.addClass('hide');
		this.$gameOver.addClass('hide');
		this.$lifeLost.addClass('hide');
	}

  paddleMove(e) {
    let mouseX = e.clientX - this.canvas.offsetLeft;
	  	if (!this.hasBeenLaunched){
	 			this.resetBall();
			}

    if (mouseX < (this.paddle.width / 2)) {
      this.paddle.x = 0;
    } else if (mouseX > this.canvas.width) {
      this.paddle.x = this.canvas.width - this.paddle.width;
    } else if (mouseX > (this.paddle.width / 2) && mouseX < this.canvas.width - (this.paddle.width / 2)) {
      this.paddle.x = mouseX - (this.paddle.width / 2);
    }
  }

  redrawBall(){
   	this.context.clearRect(0, 550, this.canvas.width, this.canvas.height);
   	this.paddle = new Paddle(240, this.canvas.height - 30, 120, 15);
   	this.ball = new Ball(this.paddle.x + 60, this.paddle.y - 20);
 		this.ball.move();
 		this.paddle.draw(this.context);
   	this.ball.draw(this.context);
  }

  launchBall() {
  	this.ball.Xvelocity = 2.5;
    this.ball.Yvelocity = -4;
    this.hasBeenLaunched = true;
	}

	firstLevel() {
		this.ball = new Ball(300, this.canvas.height - 45);
		this.brickArray.populateArray();
	}

	secondLevel() {
			this.paddle = new Paddle(250, this.canvas.height - 30, 100, 15);
			this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 40);
			this.brickArray = new BrickArray(3, 5);
			this.brickArray.populateArray();
			this.obstacle = new Obstacle(this.canvas.width / 3, 400, 200, 15);
	}

	thirdLevel() {
			this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 40);
			this.brickArray.populateArray();
			this.obstacle = new Obstacle(this.canvas.width / 3, 200, 400, 15);
			this.paddle = new Paddle(260, this.canvas.height - 30, 80, 15);
	}

	// ballFollow(){
	// 	this.ball.x = this.paddle.x + 10;
	// 	this.ball.y = this.paddle.y - 50;
	// }

  gameLost(){
  	if (this.ball.y >= 600 ) {
			cancelAnimationFrame(this.animationFrameID);
			this.lives--;
			this.$lives.text(this.lives);
			$('#start-button').prop('disabled', false);
			this.hasBeenLaunched = false;
			this.$canvas.hide();
			this.$lifeLost.removeClass('hide');
			
			if (this.lives === 0) {
				this.$canvas.hide();
				this.$gameOver.removeClass('hide');
			}
		} else {
			this.animationFrameID = requestAnimationFrame(this.gameLoop.bind(this))
		}
		this.displayScore();
  }

  newLevel() {
    if (this.lives > 0 && this.brickArray.brickField.length === 0) {
      	this.gameOn = false;
      	this.level += 1;
      	this.$level.text(this.level);
    if (this.level === 2) {
      	this.$level2.removeClass('hide');
      }
    if (this.level === 3) {
      	this.$level3.removeClass('hide');
      }
    if (this.level === 4) {
    	this.$userWin.removeClass('hide');
    }
    }
  }

  gameWon() {
  	//if the brick array is gone, the game is won, increment to next level
  	if (this.brickArray.brickField.length === 0) {
			cancelAnimationFrame(this.animationFrameID);
			this.newLevel();
			this.$canvas.hide();
			this.$videoBackground.hide();
			this.displayScore();
			$('#start-button').prop('disabled', false);
		}
  }

	increaseScore() {  //if a brick is broke, add 100 to the score
    this.score += 100;
    this.$score.text(this.score);
  }

  displayScore() {
  	this.$score.text(this.score);
  }

  enterCheat(e) {
  	if (e.keyCode === 70) {
  		this.brickArray.breakBrickCheat()
  	}
  }
}