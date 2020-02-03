class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.kimo = new Player(this);
    this.swordsArrayVertical = [];
    this.swordsArrayHorizontal = [];
    this.gameIsRunning = true;
    this.startTime = new Date().getTime();
    this.currentTime = 0;
    this.createSwords();
    this.loop();
  }

  createSwords() {
    for (let i = 0; i < 300; i++) {
      const sword = new SwordH(this, 600 + i * 100);
      this.swordsArrayHorizontal.push(sword);
      const swordV = new SwordV(this, 0 + i * 100 * -1);
      this.swordsArrayVertical.push(swordV);
    }
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  paint = () => {
    this.cleanCanvas();

    this.kimo.drawImage();

    for (let sword of this.swordsArrayHorizontal) {
      sword.drawImage();
      sword.drawImage();
    }

    for (let swordV of this.swordsArrayVertical) {
      swordV.drawImage();
    }
  };

  runLogic = () => {
    for (let sword of this.swordsArrayHorizontal) {
      sword.runLogic();
      sword.checkCollision();
    }
    for (let swordV of this.swordsArrayVertical) {
      swordV.runLogic();
      swordV.checkCollision();
    }
  };

  loop = timestamp => {
    this.paint();
    this.runLogic();

    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };
}
