class SwordVUp {
  constructor(game, positionY) {
    this.game = game;
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 25;
    this.width = 5;
    this.image = new Image();
    this.image.src = './images/bamboo-sword-vertical-up.png';

    this.setRandomPosition();
  }

  drawImage() {
    this.game.context.drawImage(this.image, this.positionX, this.positionY);
  }

  setRandomPosition() {
    this.positionX = Math.random() * 600;
  }

  checkCollision() {
    const kimo = this.game.kimo;

    const kimoX = kimo.positionX;
    const kimoY = kimo.positionY;
    const kimoWidth = kimo.width;
    const kimoHeight = kimo.height;

    const vswordX = this.positionX;
    const vswordY = this.positionY;
    const vswordWidth = this.width;
    const vswordHeight = this.height;

    if (
      kimoX + kimoWidth > vswordX &&
      kimoX < vswordX + vswordWidth &&
      kimoY + kimoHeight > vswordY &&
      kimoY < vswordY + vswordHeight
    ) {
      this.game.gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionY -= this.game.swordspeed;
  }
}
