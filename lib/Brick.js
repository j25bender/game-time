const GamePiece = require('./GamePiece.js');
// const Game = require('./Game.js');

module.exports = class Brick extends GamePiece {
	constructor(x, y, width, height, color, left, right, top, bottom) {
		// console.log('draw brick')

		super(width, height, color);
				// console.log('draw brick')

		this.width = 100;
		this.height = 20;
		this.left = this.x;
		this.right = this.x + this.width;
		this.top = this.y;
		this.bottom = this.y + this.height;
	}

	draw(context) {
		// console.log('draw brick')
		context.beginPath();
    	context.fillRect(this.x, this.y, this.width, this.height);
    	context.fillStyle = "blue";
    	context.closePath();
		// context.fillStyle = 'blue';
		// context.fillRect(this.x, this.y, this.width, this.height);
  //   	context.fillStyle = "black";
  //   	context.closePath();
	}	
}

// module.exports = Brick;

// createBricks(game) {
	// 	var blocks = [];
	// 	for (var i = 0; i < 24; i++) {
	// 		var x = 30 + (i % 8) * 30;
	// 		var y = 30 +(i % 3) * 30;
	// 		blocks.push(new Invader(game, { x: x, y: y}));
	// 	}
	// 	return blocks;
	// }


// for (var i = 0; i < 30; i++) {

// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	var radius = Math.random() * window.innerHeight;

// 	var hue = Math.random() * 360;
// 	var saturation = Math.random() * 100;
// 	var lightness = Math.random() * 100;
	
// 	ctx.beginPath();
// 	ctx.arc( x, y, radius, 0, Math.PI * 2, false);
// 	ctx.strokeStyle = 'hsl(' + hue + ',' + saturation + '%' + ',' + lightness + '%' + ')';
// 	ctx.stroke();	
// }	

// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;

// function drawBricks() {
//     for(c=0; c<brickColumnCount; c++) {
//         for(r=0; r<brickRowCount; r++) {
//             var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
//             var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
//             bricks[c][r].x = brickX;
//             bricks[c][r].y = brickY;
//             context.beginPath();
//             context.rect(brickX, brickY, brickWidth, brickHeight);
//             context.fillStyle = "#0095DD";
//             context.fill();
//             context.closePath();
//         }
//     }
// }


// var createInvaders = function(game) {
//     var invaders = [];
//     for (var i = 0; i < 24; i++) {
// ¶
// Place invaders in eight columns.

 
//       var x = 30 + (i % 8) * 30;
// ¶
// Place invaders in three rows.

 
//       var y = 30 + (i % 3) * 30;
// ¶
// Create invader.

 
//       invaders.push(new Invader(game, { x: x, y: y}));
//     }

//     return invaders;
//   };		