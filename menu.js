//let audioElement = new Audio();

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
    this.gameover = new Image();
    this.gameover.src = './game-over.png';
    this.audioElement = new Audio();
    this.audioElement.src = 'background-music.wav';
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

  drawGameover() {
    this.context.drawImage(this.gameover, 0, 0, 600, 400);
    this.screen = 'gameover';
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
          } else if (this.screen === 'gameover') {
            this.drawStartImage();
          }
          break;
      }
    });
  }

  playMusic() {
    this.audioElement.play();
  }

  stopMusic() {
    this.audioElement.pause();
  }
}
