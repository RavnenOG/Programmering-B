
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

    
    let size1 = -120
    push()
  ellipse(0,0,40)
  fill(0,0,255)
  translate(-900,-windowHeight/2.68,0)

  ellipse(0,0,20)
  rect(0,0,-size1)

  pop()
  fill(0,255,0)
  rect(0,0,-size1)

  //
  let nums = 1
  let sizeX = windowWidth/20
  let sizeY = windowHeight/11
  for(posY=-windowHeight/4-100;posY<=windowHeight/4*4;posY+=windowHeight/4){
    for(posX = -windowWidth/6-450;posX<=windowWidth/6*6;posX+=windowWidth/6, nums+=1){
      doorNumbers = nums
      translate(posX-windowWidth/6,0,0)
      translate(posX,0,0)
    makeDoors(posX,posY,doorNumbers,sizeX,sizeY)
    }
  }
  text(posX+"   "+posY,windowWidth/2-windowWidth/2,-windowHeight/2+100)
}

function makeDoors(posX,posY,doorNumbers,sizeX,sizeY){
  fill(100,100,0)
  rect(0,0, sizeX,sizeY);
  ellipse(0,0,20)//test
  fill(0)
  text(doorNumbers,posX,posY,sizeX,sizeY)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}