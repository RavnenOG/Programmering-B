let player;
let fallingBalls = [];
let gameOver = false;
let points = 0;
let pointsText;
let gameOverText;
let ballSpeed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointsText = select('#points');
  gameOverText = select('#gameOver');
  player = new Player();
  setInterval(() => {
    if (!gameOver) {
      fallingBalls.push(new FallingBall(ballSpeed));
      ballSpeed += 0.1;
    }
  }, 1000);
}

function draw() {
  background(200);
  if(!gameOver){
  player.show();
  player.move();

  for (let i = fallingBalls.length - 1; i >= 0; i--) {
    fallingBalls[i].show();
    fallingBalls[i].update();

    if (fallingBalls[i].hits(player)) {
      gameOver = true;
    }

    if (fallingBalls[i].offScreen()) {
      fallingBalls.splice(i, 1);
      points++;
      pointsText.html('Points: ' + points);
    }
  }
}else{
  gameOverText.style('opacity', '1');
}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1);
  }
}

function keyReleased() {
  player.setDir(0);
}
