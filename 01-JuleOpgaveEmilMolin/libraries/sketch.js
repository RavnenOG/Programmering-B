
function preload(){
  Font1 = loadFont('Present.ttf')
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);//Creates a canvas, with WEBGL so it can do 3D things
  background(200) //Canvas background
  angleMode(DEGREES)  //makes angels in Degrees
}

function draw() {
  
  //making of the appearance of the Christmas Calendar -
  
  //making the background for the Julekalender
  fill(200,0,0)

  rect(-width/2+20,-height/2+20,width-40,height-40)
  
  fill(0)
  textSize(18)
  textAlign(CENTER)
  textFont(Font1)
  text("Christmas Calendar",windowWidth/2,windowHeight/2)
  

  // -
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}