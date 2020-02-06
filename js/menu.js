//let audioElement = new Audio();

class Menu {
  constructor(game) {
    this.game = game;
    this.canvas = $canvas;
    this.screen = 'title';
    this.context = $canvas.getContext('2d');
    this.image = new Image();
    this.image.src = './images/profile.png';
    this.lore = new Image();
    this.lore.src = './images/lore.png';
    this.instructions = new Image();
    this.instructions.src = './images/instructions.png';
    this.gameover = new Image();
    this.gameover.src = './images/game-over.png';
    this.audioElement = new Audio();
    this.audioElement.src = './music/background-music.wav';
    this.commands();
  }

  drawStartImage() {
    this.context.drawImage(this.image, 0, 0, 800, 600);
    this.screen = 'lore';
  }

  drawLore() {
    this.context.drawImage(this.lore, 0, 0, 800, 600);
    this.screen = 'instructions';
  }

  drawInstructions() {
    this.context.drawImage(this.instructions, 0, 0, 800, 600);
    this.screen = 'game';
  }

  drawGameover() {
    this.context.drawImage(this.gameover, 0, 0, 800, 600);
    this.context.fillStyle = 'white';
    this.context.font = '59px fixedsys';
    this.context.fillText(`${this.game.score}`, 388, 278);
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
            this.screen = 'playing';
          } else if (this.screen === 'lore') {
            this.drawLore();
          } else if (this.screen === 'instructions') {
            this.drawInstructions();
          } else if (this.screen === 'gameover') {
            this.game.reset();
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
