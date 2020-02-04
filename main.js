const $canvas = document.querySelector('canvas');
const game = new Game($canvas);
window.onload = function() {
  let audioElement = new Audio('background-music.wav');
  audioElement.play();
  game.startGame();
};
