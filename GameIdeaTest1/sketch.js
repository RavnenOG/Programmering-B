let playerSkin



function preload(){
playerSkin = loadImage("Images/TestPlayerSkin.PNG")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  player = {
    w:100,
    h:100,
    x:width/2,
    y:height-this.h,
    move: function(directionX){

    },
    show: function(){
      image(playerSkin, this.x, this.y, this.w, this.h)
    }
  }
}

function draw() {
  background(220);

  //Player functions
  if(keyIsDown(LEFT_ARROW)){
    player.move(-1,0)
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.move(+1,0)
  }
  
  player.show()
}
