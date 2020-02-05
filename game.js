class Game {
  constructor($canvas) {
    this.menu = new Menu(this);
    this.canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.kimo = new Player(this);
    this.swordsArrayVertical = [];
    this.swordsArrayHorizontal = [];
    this.swordsArrayVerticalUp = [];
    this.swordsArrayHorizontalRight = [];
    this.gameIsRunning = false;
    this.startTime = new Date().getTime();
    this.currentTime = 0;
    this.image = new Image();
    this.image.src = './iceboard.jpg';
    this.createSwords();
    this.xWindowCenter = window.width / 2;
    this.yWindowCenter = window.height / 2;
    this.score = 0;
  }

  createSwords() {
    for (let i = 0; i < 300; i++) {
      const sword = new SwordH(this, 600 + i * 100);
      this.swordsArrayHorizontal.push(sword);
      const swordV = new SwordV(this, 0 + i * 100 * -1);
      this.swordsArrayVertical.push(swordV);
      // const swordVUp = new SwordVUp(this, 400 + i * 100);
      // this.swordsArrayVerticalUp.push(swordVUp);
      // const swordHRight = new SwordHRight(this, i * 100 * -1);
      // this.swordsArrayHorizontalRight.push(swordHRight);
    }
  }

  startMenu() {
    this.menu.drawStartImage();
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
    this.context.drawImage(this.image, 0, 0, 600, 400);
    // this.context.fillStyle = 'white';
    // this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
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
    this.score++;
    console.log(this.score);
    this.paint();
    this.runLogic();
    this.kimo.update();

    if (this.gameIsRunning) {
      window.requestAnimationFrame(this.loop);
    }
  };
}
