
//Images
let playerSkin



function preload(){
playerSkin = loadImage("Images/TestPlayerSkin.PNG")

}

function setup() {

  createCanvas(windowWidth-1,windowHeight-1);//-1 is written cause, otherwise somehow it makes scrolling bars

  player = {
    w:100,
    h:100,
    x:width/2,
    y:height-50,
    s: 5,
    move: function(directionX){
      this.x += directionX * this.s
    },
    jump: function(){
      console.log("before for loop")
      for(let i = 0; i<100; i++){
        this.y -= 1
        console.log("doing loop")

      }
    },
    show: function(){
      imageMode(CENTER)
      image(playerSkin, this.x, this.y, this.w, this.h)
    }
  }
}

function draw() {
  background(220);
  //Player functions
  if(keyIsDown(LEFT_ARROW)){
    player.move(-1)
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.move(+1)
  }
  player.show()
}

function keyPressed(){
 if(key === ' '){
 player.jump()
}
}