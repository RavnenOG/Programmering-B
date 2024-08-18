//Basis
let gameStarted

//Ball
let ballX
let ballY
let ballSize
let ballSpeedX
let ballSpeedY

//Player
let pX
let pS
let pYSize

let p1Y
let p1P

let p2Y
let p2P


function setup() {
  createCanvas(windowWidth,windowHeight);

  //Set default things
  gameStarted = false

  ballX = windowWidth/2
  ballY = windowHeight/2
  ballSize = windowWidth*windowHeight/20000
  ballSpeedX = 7
  ballSpeedY = 2


  pX = 40
  pS = 10
  pYSize = height/10

  p1Y = height/2
  p1P = 0

  p2Y = height/2
  p2P = 0
 
}

function draw() {

    //Basis
  background(0);
  rectMode(CENTER)
    //---

    //Player 1
  //Draw rectangle
  rect(pX,p1Y,20,pYSize)

  //Move
  if(keyIsDown(87) === true && p1Y>0+pYSize/2){
    p1Y -= pS
  }
  if(keyIsDown(83) === true && p1Y<height-pYSize/2){
    p1Y += pS
  }
    //---

    //Player 2
  //Draw rectangle
  rect(width-pX,p2Y,20,pYSize)

  //Move
  if(keyIsDown(UP_ARROW) === true && p2Y>0+pYSize/2){
    p2Y -= pS
  }
  if(keyIsDown(DOWN_ARROW) === true && p2Y<height-pYSize/2){
    p2Y += pS
  }
    //---

    //Ball ---
  //Make ball bounce off player2, right side, if in range
  if(ballX>width-ballSize/2-pX && ballY>p2Y-pYSize/2&& ballY<p2Y+pYSize/2 && ballX+ballSize/2<width && ballSpeedX > 0){
    ballSpeedX = ballSpeedX * -1
    console.log("right player bounce")
  }
  //Make ball bounce off player1, left side, if in range
  if(ballX<0+ballSize/2+pX && ballY>p1Y-pYSize/2 && ballY<p1Y+pYSize/2 && ballX-ballSize/2>0 && ballSpeedX < 0){
    ballSpeedX = ballSpeedX * -1
    console.log("left player bounce")
  }
  //Make ball bounce off bottom sides
  if(ballY>height-ballSize/2){
    ballSpeedY = ballSpeedY * -1
  }
  //Make ball bounce off top side
  if(ballY<0+ballSize/2){
    ballSpeedY = ballSpeedY * -1
  }

    //Move ball
  if(gameStarted == true){
  //Move ball on the x-axis
  ballX += ballSpeedX
  //Move ball on the y-axis
  ballY += ballSpeedY
  }
  //Draw ball
  ellipse(ballX,ballY,ballSize)
    // ---

    //Points and game
  //Text
  let tSize = 50
  fill(255)
  textAlign(CENTER)
  textSize(tSize)
  text(p1P,width/2-tSize,50)
  text("|",width/2,50)
  text(p2P,width/2+tSize,50)

  if(gameStarted == false){
    text('Press "Space" to start', width/2,height-50)
  }

  //Give points
  //left side
  if(ballX<0){
    //Give player 2 points
    p2P +=1
    //Reset ball
    ballX = width/2
    ballY = height/2
    //Stop game
    gameStarted = false
    //Speed up Ball
    ballSpeedX += 1
  }
  //right side
  if(ballX>width){
    //Give player 1 points
    p1P +=1
    //Reset ball
    ballX = width/2
    ballY = height/2
    //Stop game
    gameStarted = false
    //Speed up Ball
    ballSpeedX += 1
  }

}

function keyPressed(){
  if(keyCode == '32' && gameStarted == false){
    gameStarted = true
  }
}