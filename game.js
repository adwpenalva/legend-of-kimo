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
  }

  createSwords() {
    for (let i = 0; i < 300; i++) {
      const sword = new SwordH(this, 600 + i * 100);
      this.swordsArrayHorizontal.push(sword);
      const swordV = new SwordV(this, 0 + i * 100 * -1);
      this.swordsArrayVertical.push(swordV);
    }
  }

  startGame() {
    this.loop();
    this.startMusic();
  }

  startMusic() {
    let audioElement = new Audio('background-music.wav');
    audioElement.play();
  }

  cleanCanvas = () => {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  };

  getScore() {
    var startTime = undefined; // define as ~new Date()~ when game starts
    var elapsed = undefined; // define as (new Date() - startTime )
    var score = elapsed * 50;
  }

  paint = () => {
    this.cleanCanvas();
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.kimo.drawImage();

    for (let sword of this.swordsArrayHorizontal) {
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

  loop = () => {
    this.paint();
    this.runLogic();
    this.kimo.update();

    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };
}
