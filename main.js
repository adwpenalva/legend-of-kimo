const $canvas = document.querySelector('canvas');
const game = new Game($canvas);
window.onload = function() {
  game.startMenu();
  // let audioElement = new Audio('background-music.wav');
  // audioElement.play();
};

// function playMusic() {
//   let audioElement = new Audio('background-music.wav');
//   audioElement.play();
// }
