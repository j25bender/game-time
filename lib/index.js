const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game(context, canvas);

window.addEventListener('mousemove', game.paddleMove.bind(game), false);

$('#start-button').on('click', game.startGame.bind(game));