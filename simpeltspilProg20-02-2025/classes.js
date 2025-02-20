console.log("classes is here")
class Player {
    constructor() {
      this.x = width / 2;
      this.y = height - 20;
      this.size = 20;
      this.xdir = 0;
    }
  
    show() {
      fill(0);
      rect(this.x, this.y, this.size, this.size);
    }
  
    setDir(dir) {
      this.xdir = dir;
    }
  
    move() {
      this.x += this.xdir * 5;
      this.x = constrain(this.x, 0, width - this.size);
    }
  }
  
  class FallingBall {
    constructor(speed) {
      this.x = random(width);
      this.y = 0;
      this.size = random(10,100);
      this.speed = speed;
    }
  
    show() {
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.size, this.size);
    }
  
    update() {
      this.y += this.speed;
    }
  
    offScreen() {
      return this.y > height;
    }
  
    hits(player) {
      let d = dist(this.x, this.y, player.x + player.size / 2, player.y + player.size / 2);
      return d < this.size / 2 + player.size / 2;
    }
  }