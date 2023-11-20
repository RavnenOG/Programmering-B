
function preload(){
  Font1 = loadFont('Present.ttf')
}

 //Variables
 let doorsStopAngle = 130
 //Door 1's var
 let buttonOpener1
 let buttonAnimation1 = 0
 let openDoor1 = false

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);//Creates a canvas, with WEBGL so it can do 3D things
  background(200) //Canvas background
  angleMode(DEGREES)  //makes angels in Degrees

  let col = color(0,0,0,0)//Transparent color
  //Door 1
  
}

function draw() {
  
    //making of the appearance of the Christmas Calendar -
  
  //background for the Julekalender
  fill(200,0,0)
  rect(-width/2+20,-height/2+20,width-40,height-40)
  
  //Title
  fill(0)
  textSize(20)
  textAlign(CENTER)
  textFont(Font1)
  text("Christmas Calendar",windowWidth/2-windowWidth/2,-windowHeight/2+60)
  
    //The 24 gates

  //Door 1

  
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}