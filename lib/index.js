const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game(context, canvas);
const currentLevel = document.getElementById('level');

window.addEventListener('mousemove', game.paddleMove.bind(game), false);
window.addEventListener('keyup', game.enterCheat.bind(game))
$('#start-button').on('click', game.startGame.bind(game));

