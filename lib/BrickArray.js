const Brick = require('./Brick.js');
const Game = require('./Game.js');

class BrickArray {
	constructor(r, c){
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
		this.brickField.forEach( function(brick){
			brick.draw(context);
		})
		for (var i = 0; i < this.brickField.length; i++){
			this.brickField[i].draw(context);
		}
	}
}

module.exports = BrickArray;

// const Brick = require('./Brick');
// class BrickArray {
//   constructor (r, c) {
//     this.r = r;
//     this.c = c;
//     this.brickField = [];
//   }
//   populateArray () {
//     for (let rows = 0; rows < this.r; rows++) {
//       for (let col = 0; col < this.c; col++) {
//         let y = 10 + (30 * rows);
//         let x = 10 + (112 * col);
//         this.brickField.push(new Brick(x, y));
//       }
//     }
//   }
//   drawBricks(context) {
//     for (var i = 0; i < this.brickField.length; i++) {
//       this.brickField[i].draw(context);
//     }
//   }
//   breakBricks(array, ball) {
//     for (var i = 0; i < array.length; i++) {
//       if (ball.y - ball.radius <= array[i].bottom &&
//         ball.y - ball.radius >= array[i].top &&
//         ball.x + ball.radius <= array[i].right &&
//         ball.x + ball.radius >= array[i].left) {
//         ball.moveY = -ball.moveY;
//         array.splice(i, 1);
//       }
//     }
//   }
// }