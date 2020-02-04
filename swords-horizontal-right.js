class SwordHRight {
  constructor(game, positionX) {
    this.game = game;
    this.positionX = positionX;
    this.positionY = 0;
    this.height = 5;
    this.width = 25;
    this.image = new Image();
    this.image.src = './images/bamboo-sword-horizontal-right.png';
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.positionY = Math.random() * 400;
  }

  drawImage() {
    this.game.context.drawImage(this.image, this.positionX, this.positionY);
  }

  checkCollision() {
    const kimo = this.game.kimo;

    const kimoX = kimo.positionX;
    const kimoY = kimo.positionY;
    const kimoWidth = kimo.width;
    const kimoHeight = kimo.height;

    const swordX = this.positionX;
    const swordY = this.positionY;
    const swordWidth = this.width;
    const swordHeight = this.height;

    if (
      kimoX + kimoWidth > swordX &&
      kimoX < swordX + swordWidth &&
      kimoY + kimoHeight > swordY &&
      kimoY < swordY + swordHeight
    ) {
      this.game.gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionX += 4;
    this.checkCollision();
  }
}
