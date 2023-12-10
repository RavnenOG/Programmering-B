function preload(){
  Font1 = loadFont('Present.ttf')
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);//Creates a canvas, with WEBGL so it can do 3D things
  background(200) //Canvas background
  angleMode(DEGREES)  //makes angels in Degrees
  rectMode(CORNER)
}

function draw() {


  //making of the appearance of the Christmas Calendar -

  //Red Julekalender background
  fill(200,0,0)
  rect(-windowWidth/2+20,-windowHeight/2+20,windowWidth-40,windowHeight-40)

  //title
  fill(0)
  textSize(20)
  textAlign(CENTER)
  textFont(Font1)
  text("Christmas Calendar "+windowWidth+"<- width and height -> "+windowHeight,windowWidth/2-windowWidth/2,-windowHeight/2+60)
 
    //-

  // Gates
  let doorNumbers = 1 //varible for the doors numbers
  let sizeX = windowWidth/20 //Decides how big the gates are on the X-axis
  let sizeY = windowHeight/11 //Decides how big the gates are on the Y-axis


  //The next for loop with a for loop inside of it makes all the gates.
  for(posY=-windowHeight/4-100;posY<=windowHeight/4*4;posY+=windowHeight/4){ //y axis
    for(posX = -windowWidth/6-450;posX<=windowWidth/6*6;posX+=windowWidth/6, doorNumbers+=1){ //x axis
      /*We use translate to move the center of the screen to a diffrent place. We want to do this cause we want our object
      to rotate out from the center. So we start by moving the center to were we want our next gate,
      then make the gate there, after wards
      we translate it back to were it were before aka the real middle of the screen,
      so we can translate where the next gate need to be out from that.
      */
      translate(posX,posY,0)
    makeDoors(posX,posY,doorNumbers,sizeX,sizeY)
    translate(-posX,-posY,0)
    }
  }
}

function makeDoors(posX,posY,doorNumbers,sizeX,sizeY){
  let doorOpening = 0
  let doorStopAngle = 130
 
  fill(100,100,0)
  rect(0,0, sizeX,sizeY);
  ellipse(0,0,20)//test

if(key=="o"){
  for(doorOpening=0;doorOpening<=130;doorOpening+=1){
  rotateY(-doorOpening)
  fill(100,200,0)
  rect(0,0, sizeX,sizeY);

  translate(0,0,1)
  fill(0)
  text(doorNumbers,0,0,sizeX,sizeY)
  translate(0,0,-1)
  }
}

  rotateY(130)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}