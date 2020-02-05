class Scoreboard {
  constructor(game) {
    this.game = game;
    this.$scoreSpan = document.querySelector('h1');
    this.score = this.game.score;
  }

  paint() {
    this.$scoreSpan.innerText = `Score: ${this.game.score}`;
  }
}
