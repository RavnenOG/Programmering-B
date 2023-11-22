
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
  text("Christmas Calendar "+windowWidth+"<- width and height -> "+windowHeight,windowWidth/2-windowWidth/2,-windowHeight/2+60)

    // -

    //Making of the gates
    let size = windowWidth/26+windowHeight/26
    let placeX = windowWidth/19
    let placeY = windowHeight/19

    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    
  for(y=-windowHeight/2+100;y<=windowHeight/2-75;y+=size+placeY){
for(x = -windowWidth/2+75;x<=windowWidth/2-75;x+=size+placeX){
  for(n=1;n<=24;n+=1){
    doorNumbers = n
  }
makeDoors(x,y,doorNumbers,size)
}
  
}
    
  
}

function makeDoors(x,y,doorNumbers,size){
  fill(200,100,0)
  //rotateY(-doorOpening1)
  rect(x, y, size);
  fill(0)
  text(doorNumbers,x,y,size)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}