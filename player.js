class Player {
  constructor(game) {
    this.game = game;
    this.positionX = 50;
    this.positionY = 200;
    this.width = 15;
    this.height = 25;
    this.speed = 15;
    this.image = new Image();
    this.image.src = './individual-sprites/adventurer-die-01.png';
    console.log(this.game);
    this.setKeyboardEventListeners();
  }

  drawImage() {
    this.game.context.drawImage(this.image, this.positionX - 17.15, this.positionY - 11.5);
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowDown':
          if (this.positionY + this.height < this.game.context.canvas.height) {
            this.positionY += this.speed;
          }
          break;
        case 'ArrowUp':
          if (this.positionY > 0) {
            this.positionY -= this.speed;
          }
          break;
        case 'ArrowRight':
          if (this.positionX + this.width < this.game.context.canvas.width) {
            this.positionX += this.speed;
          }
          break;
        case 'ArrowLeft':
          if (this.positionX > 0) {
            this.positionX -= this.speed;
          }
          break;
      }
    });
  }
}
