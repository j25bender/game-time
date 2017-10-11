const Game = require('./Game.js');
const Brick = require('./Brick.js');

class BrickArray{
	constructor(r, c, color){
		this.r = r;
		this.c = c;
		this.brickField = [];
	}

	populateArray(){
		for (let rows = 0; rows < this.r; rows++){
		    for (let col = 0; col < this.c; col++){
			  let y = 10 + (43 * rows);
			  let x = 10 + (120 * col);
			  this.brickField.push(new Brick(x, y));
		    }
			}
		return this.brickField;
	}

	drawBricks(context){
		this.brickField.forEach( brick => {
			brick.draw(context);
		})
	}

  breakBrickCheat() {
    this.brickField.pop();
  }

	breakBricks(array, ball) {
    let brickBroke = false
    for (var i = 0; i < array.length; i++) {
      if (ball.y - ball.radius <= array[i].bottom &&
        ball.y - ball.radius >= array[i].top &&
        ball.x + ball.radius <= array[i].right &&
        ball.x + ball.radius >= array[i].left) {
        ball.Yvelocity = -ball.Yvelocity;
        array.splice(i, 1);
        brickBroke = true
        // game.updateScore();
      }
    }

    return brickBroke
  }
}

module.exports = BrickArray;
