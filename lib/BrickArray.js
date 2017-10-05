const Brick = require('./Brick.js');
const Game = require('./Game.js');


class BrickArray {
	constructor(r, c){
		this.r = r;
		this.c = c;
		this.brickField = [];
	}

	populateArray(game){

		for (let rows = 0; rows < this.r; rows++){
		    for (let col = 0; col < this.c; col++){

			  let y = 10 + (30 * rows);
			  let x = 10 + (112 * col);
			  this.brickField.push(new Brick(x, y));
			  console.log(new Brick(game, { x: x, y: y}));
		    }
		    console.log(this.brickField)
		    return this.brickField;
		}
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

//  var brickRows = 3;
//       var brickCol = 9;
//       var brickW = 75;
//       var brickH = 20;
//       var brickPadding = 10;
//       var brickOffsetTop = 30;
//       var brickOffsetLeft = 30;

// function drawBricks() {
//         for (c = 0; c < brickCol; c++) {
//           for (r = 0; r < brickRows; r++) {
//             if (bricks[c][r].status == 1) {
//               var brickX = (c * (brickW + brickPadding)) + brickOffsetLeft;
//               var brickY = (r * (brickH + brickPadding)) + brickOffsetTop;
//               bricks[c][r].x = brickX;
//               bricks[c][r].y = brickY;
//               ctx.beginPath();
//               ctx.rect(brickX, brickY, brickW, brickH);
//               ctx.fillStyle = "green";
//               ctx.fill();
//               ctx.closePath();
//             }
//           }
//         }
//       }

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