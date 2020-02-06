const $canvas = document.querySelector('canvas');
const game = new Game($canvas);
window.onload = function() {
  this.event.preventDefault();
  game.startMenu();
};
