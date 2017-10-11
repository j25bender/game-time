const Paddle = require('./Paddle.js');
const Ball = require('./Ball.js');
const BrickArray = require('./BrickArray.js');
const Brick = require('./Brick.js');

module.exports = class Game {
	constructor(context, canvas) {
		this.ball = new Ball(canvas.width / 2, canvas.height - 45);
		this.paddle = new Paddle(canvas.width / 2 - 100 / 2, canvas.height - 30, 100, 15);
		this.brickArray = new BrickArray(3, 5);
		this.canvas = canvas;
		this.$canvas = $(canvas);
		this.context = context;
		this.score = 0;
		this.$score = $('.score');
		this.level = 1;
		this.$level = $('#level');
		this.lives = 3;
		this.$lives = $('#lives');
		this.$videoBackground = $('.video-background');
		this.$level2 = $('.level2');
		this.$level3 = $('.level3');
		this.$userWin = $('.user-win');
		this.$startButton = $('#start-button');
		this.$gameOver = $('.game-over');
	}

	gameLoop() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.ball.draw(this.context);
		this.ball.move();
		this.paddle.draw(this.context);
		this.brickArray.drawBricks(this.context);
		this.ball.bounceWalls(this.context);
		this.ball.bouncePaddle(this.paddle);
		let brickDidBreak = this.brickArray.breakBricks(this.brickArray.brickField, this.ball);

		if (brickDidBreak) {
			this.increaseScore();
			// this.displayScore();
		}

		this.gameLost();
		this.gameWon();
	}

	startGame() {
		this.$level2.addClass('hide');
		this.$level3.addClass('hide');
		this.$userWin.addClass('hide');
		this.$gameOver.addClass('hide');
		this.$canvas.show();
		this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 45);
		this.brickArray.populateArray();
		this.animationFrameID = requestAnimationFrame(this.gameLoop.bind(this));
		//if (this.level === 3) {
			//drop power up
		//}
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

  gameLost(){
  	if (this.ball.y >= 600 ) {
			cancelAnimationFrame(this.animationFrameID);
			this.lives--;
			this.$lives.text(this.lives);
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
      	console.log('show!!')
      	this.$level3.removeClass('hide');
      }
    if (this.level === 4) {
    	this.$userWin.removeClass('hide');
    	// this.$startButton.setAttr('disabled', true)

    	// this.$userWin.innerHTML=<span>'Congrats you broke out of the solar system! Your high score was ' + this.$score '!!!'</span>;
    }
    }
  }

  gameWon() {
  	//if the brick array is gone, the game is won, increment to next level
  	console.log(this.brickArray.brickField.length)
  	if (this.brickArray.brickField.length === 0) {
			cancelAnimationFrame(this.animationFrameID);
			this.newLevel();
			this.$canvas.hide();
			this.$videoBackground.hide();
			this.displayScore();
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