class Game {
  constructor($canvas) {
    this.menu = new Menu(this);
    this.highscore = new Highscore(this);
    this.canvas = $canvas;
    this.swordspeed = 1.6;
    this.context = $canvas.getContext('2d');
    this.kimo = new Player(this);
    this.swordsArrayVertical = [];
    this.swordsArrayHorizontal = [];
    this.swordsArrayVerticalUp = [];
    this.swordsArrayHorizontalRight = [];
    this.gameIsRunning = false;
    this.image = new Image();
    this.image.src = './images/iceboard.jpg';
    this.createSwords();
    this.xWindowCenter = window.width / 2;
    this.yWindowCenter = window.height / 2;
    this.score = 0;
    this.finalScore;
  }

  createSwords() {
    for (let i = 0; i < 300; i++) {
      const sword = new SwordH(this, 800 + i * 100);
      this.swordsArrayHorizontal.push(sword);
      const swordV = new SwordV(this, -4000 + i * 100 * -1);
      this.swordsArrayVertical.push(swordV);
      const swordVUp = new SwordVUp(this, 10000 + i * 100);
      this.swordsArrayVerticalUp.push(swordVUp);
      const swordHRight = new SwordHRight(this, -20000 + i * 100 * -1);
      this.swordsArrayHorizontalRight.push(swordHRight);
    }
  }

  startMenu() {
    this.menu.drawStartImage();
  }

  startGame() {
    this.gameIsRunning = true;
    this.loop();
  }

  endGame() {
    console.log('end game');
    this.gameIsRunning = false;
    this.highscore.score = this.score;
    this.menu.drawGameover();
    this.menu.stopMusic();
    this.highscore.runLogic();
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  paint = () => {
    this.cleanCanvas();
    this.context.drawImage(this.image, 0, 0, 800, 600);
    this.kimo.drawImage();

    for (let sword of this.swordsArrayHorizontal) {
      sword.drawImage();
    }

    for (let swordV of this.swordsArrayVertical) {
      swordV.drawImage();
    }

    for (let swordVUp of this.swordsArrayVerticalUp) {
      swordVUp.drawImage();
    }

    for (let swordHRight of this.swordsArrayHorizontalRight) {
      swordHRight.drawImage();
    }
  };

  runLogic = () => {
    this.score++;
    for (let sword of this.swordsArrayHorizontal) {
      sword.runLogic();
    }
    for (let swordV of this.swordsArrayVertical) {
      swordV.runLogic();
    }
    for (let swordVUp of this.swordsArrayVerticalUp) {
      swordVUp.runLogic();
    }
    for (let swordHRight of this.swordsArrayHorizontalRight) {
      swordHRight.runLogic();
    }
    this.kimo.update();
    this.swordspeed *= 1.00028;
  };

  loop = () => {
    this.runLogic();

    if (this.gameIsRunning) {
      this.paint();
      window.requestAnimationFrame(this.loop);
    }
  };

  reset() {
    this.swordspeed = 1.5;
    this.swordsArrayVertical = [];
    this.swordsArrayHorizontal = [];
    this.swordsArrayVerticalUp = [];
    this.swordsArrayHorizontalRight = [];
    this.kimo.positionX = 300;
    this.kimo.positionY = 200;
    this.score = 0;
    this.kimo.velX = 0;
    this.kimo.velY = 0;
    this.createSwords();
  }
}
