const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game(context, canvas);
const Paddle = require('./Paddle.js');
const paddle = new Paddle(this.x, this.y, this.width, this.height);

window.addEventListener('mousemove', paddle.paddleMove.bind(game), false);
window.addEventListener('keyup', game.enterCheat.bind(game));
$('#start-button').on('click', game.startGame.bind(game));
$('#continue-button').on('click', game.redrawBall.bind(game));
$('#start-over-button').on('click', game.startOver.bind(game));
$('#play-again-button').on('click', game.startOver.bind(game));

$(window).keypress(function(e) {
  if (e.which === 32) {
    game.launchBall();
  }
});
