
function preload(){
  Font1 = loadFont('Present.ttf')
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);//Creates a canvas, with WEBGL so it can do 3D things
  background(200) //Canvas background
  angleMode(DEGREES)  //makes angels in Degrees
  rectMode(CENTER)
}

function draw() {
  

  //making of the appearance of the Christmas Calendar -
  
  //Red Julekalender background
  fill(200,0,0)
  rect(windowWidth/2-windowWidth/2,windowHeight/2-windowHeight/2,windowWidth-40,windowHeight-40)
  
  //title
  fill(0)
  textSize(20)
  textAlign(CENTER)
  textFont(Font1)
  text("Christmas Calendar "+windowWidth+"<- width and height -> "+windowHeight,windowWidth/2-windowWidth/2,-windowHeight/2+60)

    //-

   ellipse(0,0,80)

    //Making of the gates
    let size = windowWidth/26+windowHeight/26
    let sBetweenX = windowWidth/19
    let sBetweenY = windowHeight/19

    let nums = 1
    let idk = 1

    
  for(y=-windowHeight/2+size+50,idk=1;y<=windowHeight/2-75;y+=size+sBetweenY){
for(x = -windowWidth/2+75;x<=windowWidth/2-75;x+=size+sBetweenX, nums+=1){
  doorNumbers = nums
makeDoors(x,y,doorNumbers,size)
}
  
}
    
  
}

function makeDoors(x,y,doorNumbers,size){
  let doorOpening1 = 0
  let doorStopAngle = 130
  fill(100,100,0)
  rect(x, y, size);
  fill(0)
  text(doorNumbers,x,y,size)

   //DoorAnimation //put in function all under

   
  
    if(doorOpening1<=doorStopAngle){
     fill(200,100,0)
   
   rect(x,y, size);
   rotateY(-doorOpening1)
     fill(0)
     translate(0,0,1)
     textSize(size/4)
   text(doorNumbers,x+size/2,y+size/2)
     translate(0,0,-1)
     doorOpening1+=1
 
   console.log(millis()/20)
   console.log("Door Angle: "+doorOpening1)
    }
   
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}