
function preload(){
  Font1 = loadFont('Present.ttf')
}

 

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);//Creates a canvas, with WEBGL so it can do 3D things
  background(200) //Canvas background
  angleMode(DEGREES)  //makes angels in Degrees

 
}

function draw() {
 
  let col = color(0,0,200,0)//Transparent color
  let sizeX = windowWidth/20;
  let sizeY = windowHeight/12;
  let posX = windowWidth/6;
  let posY = windowHeight/4;
  

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

  
}

function mousePressed(){
  
}


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}