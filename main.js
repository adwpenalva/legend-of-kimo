const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let gameIsRunning = true;

let startTime = new Date().getTime();
let currentTime = 0;

let kimoImgSource = './individual-sprites/adventurer-die-01.png';
let kimoImg = new Image();
kimoImg.src = kimoImgSource;
kimoImg.addEventListener('load', () => {
  context.drawImage(kimoImg, kimo.positionX - 17.15, kimo.positionY - 11.5);
});

let swordImgHorizontal = new Image();
swordImgHorizontal.src = './images/bamboo-sword-horizontal.png';
swordImgHorizontal.addEventListener('load', () => {
  context.drawImage(swordImgHorizontal, this.positionX, this.positionY);
});

let swordImgVertical = new Image();
swordImgVertical.src = './images/bamboo-sword-vertical.png';
swordImgVertical.addEventListener('load', () => {
  context.drawImage(swordImgVertical, this.positionX, this.positionY);
});

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 200;
    this.width = 20;
    this.height = 25;
    this.speed = 15;

    this.setKeyboardEventListeners();
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowDown':
          if (this.positionY + this.height < context.canvas.height) {
            this.positionY += this.speed;
          }
          break;
        case 'ArrowUp':
          if (this.positionY > 0) {
            this.positionY -= this.speed;
          }
          break;
        case 'ArrowRight':
          if (this.positionX + this.width < context.canvas.width) {
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

  paint() {
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}

const kimo = new Player();

class SwordH {
  constructor(positionX) {
    this.positionX = positionX;
    this.positionY = 0;
    this.height = 5;
    this.width = 30;

    this.setRandomPosition();
  }

  setRandomPosition() {
    this.positionY = Math.random() * 400;
  }

  checkCollision() {
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
      gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionX -= 4;
    this.checkCollision();
  }

  paint() {
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}

class SwordV {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 30;
    this.width = 5;

    this.setRandomPosition();
  }

  setRandomPosition() {
    this.positionX = Math.random() * 600;
  }

  checkCollision() {
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
      gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionY += 3;
    this.checkCollision();
  }

  paint() {
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
}

const swordsArrayHorizontal = [];
const swordsArrayVertical = [];

for (let i = 0; i < 300; i++) {
  const sword = new SwordH(600 + i * 100);
  swordsArrayHorizontal.push(sword);
  const swordV = new SwordV(0 + i * 100 * -1);
  swordsArrayVertical.push(swordV);
}

const runLogic = () => {
  for (let sword of swordsArrayHorizontal) {
    sword.runLogic();
    sword.runLogic();
  }
  for (let swordV of swordsArrayVertical) {
    swordV.runLogic();
  }
};

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

const paint = () => {
  cleanCanvas();

  kimo.paint();

  for (let sword of swordsArrayHorizontal) {
    sword.paint();
    sword.paint();
  }

  for (let swordV of swordsArrayVertical) {
    swordV.paint();
  }
};

const loop = timestamp => {
  paint();
  runLogic();

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};

loop();
