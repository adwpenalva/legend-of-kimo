class Highscore {
  constructor(game) {
    this.game = game;
    this.username;
    this.score;
    this.highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  }

  getHighScores() {
    let length = 0;
    if (this.highScores) {
      length = this.highScores.length;
    }

    if (length < 5) {
      for (let i = 5 - length - 1; i >= 0; i--) {
        this.highScores[i] = { score: 0, name: '' };
      }
    }
    console.log(this.highScores);
  }

  getPlayerName() {
    this.username = prompt('Enter your name', 'mr. secret');
  }

  saveScore() {
    let highScores = this.getHighScores();
    this.highScores.push({
      name: this.username,
      score: this.score
    });
    this.highScores = this.highScores.sort((a, b) => {
      return b.score - a.score;
    });
    localStorage.setItem('highScores', JSON.stringify(this.highScores));
  }

  renderHighScores() {
    let highScores = this.highScores;
    document.getElementById('high-score-1-score').innerText = highScores[0].score;
    document.getElementById('high-score-1-name').innerText = highScores[0].name;
    document.getElementById('high-score-2-score').innerText = highScores[1].score;
    document.getElementById('high-score-2-name').innerText = highScores[1].name;
    document.getElementById('high-score-3-score').innerText = highScores[2].score;
    document.getElementById('high-score-3-name').innerText = highScores[2].name;
    document.getElementById('high-score-4-score').innerText = highScores[3].score;
    document.getElementById('high-score-4-name').innerText = highScores[3].name;
    document.getElementById('high-score-5-score').innerText = highScores[4].score;
    document.getElementById('high-score-5-name').innerText = highScores[4].name;
  }

  runLogic() {
    console.log('running end game logic');
    this.getPlayerName();
    this.saveScore();
    this.renderHighScores();
  }
}
