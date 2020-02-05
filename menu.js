class Menu {
  constructor(game) {
    this.game = game;
    this.canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.image = new Image();
    this.image.src = './profile.png';
    this.commands();
  }

  drawStartImage() {
    this.context.drawImage(this.image, 0, 0, 600, 400);
  }

  commands() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 13:
          this.game.gameIsRunning = true;
          this.game.startGame();
          break;
      }
    });
  }
}
