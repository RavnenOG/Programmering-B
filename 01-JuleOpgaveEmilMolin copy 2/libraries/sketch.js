
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
  
  //Red Julekalender background
  fill(200,0,0)
  rect(-windowWidth/2+20,-windowHeight/2+20,windowWidth-40,windowHeight-40)
  
  //title
  fill(0)
  textSize(20)
  textAlign(CENTER)
  textFont(Font1)
  text("Christmas Calendar ",windowWidth/2-windowWidth/2,-windowHeight/2+60)

   //gates

   //gate 1
   translate(-windowWidth/2+50,-windowHeight/4,0)
   fill(0,200,20)
  rect(0,0,120,120)
  //DoorAnimation //put in function all under
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}