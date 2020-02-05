class Menu {
  constructor(game) {
    this.game = game;
    this.canvas = $canvas;
    this.screen = 'title';
    this.context = $canvas.getContext('2d');
    this.image = new Image();
    this.image.src = './profile.png';
    this.lore = new Image();
    this.lore.src = './lore.png';
    this.instructions = new Image();
    this.instructions.src = './instructions.png';
    this.commands();
  }

  drawStartImage() {
    this.context.drawImage(this.image, 0, 0, 600, 400);
    this.screen = 'lore';
  }

  drawLore() {
    this.context.drawImage(this.lore, 0, 0, 600, 400);
    this.screen = 'instructions';
  }

  drawInstructions() {
    this.context.drawImage(this.instructions, 0, 0, 600, 400);
    this.screen = 'game';
  }

  commands() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 13:
          if (this.screen === 'game') {
            this.playMusic();
            this.game.gameIsRunning = true;
            this.game.startGame();
          } else if (this.screen === 'lore') {
            this.drawLore();
          } else if (this.screen === 'instructions') {
            this.drawInstructions();
          }
          break;
      }
    });
  }

  playMusic() {
    let audioElement = new Audio('background-music.wav');
    audioElement.play();
  }
}
