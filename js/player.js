class Player {
  constructor(game) {
    this.game = game;
    this.positionX = 300;
    this.positionY = 200;
    this.width = 15;
    this.height = 25;
    this.velX = 0;
    this.velY = 0;
    this.friction = 0.98;
    this.image = new Image();
    this.image.src = './images/kimo.png';
    this.setKeyboardEventListeners();
  }

  drawImage() {
    var xSpriteOffset = 15.15;
    var ySpriteOffset = 11.15;
    this.game.context.drawImage(
      this.image,
      this.positionX - xSpriteOffset,
      this.positionY - ySpriteOffset
    );
  }

  update() {
    this.velX *= this.friction;
    this.velY *= this.friction;
    this.positionX += this.velX;
    this.positionY += this.velY;
    if (this.positionY > 575) {
      this.positionY = 575;
      this.velY = 0;
    } else if (this.positionY < 5) {
      this.positionY = 5;
      this.velY = 0;
    } else if (this.positionX > 782) {
      this.positionX = 782;
      this.velX = 0;
    } else if (this.positionX < 3) {
      this.positionX = 3;
      this.velX = 0;
    }
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          this.velY = 3;
          this.velX = 0;
          break;
        case 'ArrowUp':
          event.preventDefault();
          this.velY = -3;
          this.velX = 0;
          break;
        case 'ArrowRight':
          event.preventDefault();
          this.velX = 3;
          this.velY = 0;
          break;
        case 'ArrowLeft':
          event.preventDefault();
          this.velX = -3;
          this.velY = 0;
          break;
      }
    });
  }
}
