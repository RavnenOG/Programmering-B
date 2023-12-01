let doorStopAngle = 130
let doorOpening1 = 0

let buttonOpener1
let openDoor1 = false

function preload(){
  Font1 = loadFont('Fonts/Present.ttf')
}

function setup() {
  createCanvas(500,500,WEBGL);//Creates a canvas, with WEBGL so it can do 3D things
  background(200) //Canvas background
  angleMode(DEGREES)  //makes angels in Degrees
  

  buttonOpener1 = createButton("")
  buttonOpener1.size(120,120)
  buttonOpener1.position(250,250)
  buttonOpener1.mousePressed(door1)
    let col = color(0,0,0,0)
  buttonOpener1.style('background-color', col)
  
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
  text("Christmas Calendar",0,-height/2+75)
  

  // -
  
  //gates
   fill(0,200,20)
  rect(0,0,120,120)
  //DoorAnimation //put in function all under
   if(doorOpening1<=doorStopAngle&&openDoor1==true){
   
     
    fill(200,100,0)
  rotateY(-doorOpening1)
  rect(0, 0, 120, 120);
    fill(0)
    translate(0,0,1)
  text("1",50,80)
    translate(0,0,-1)
  
  doorOpening1 += 1
  console.log(millis()/20)
  console.log("Door Angle: "+doorOpening1)
  }
  
   //After door animation, keeping door opened
  if(doorOpening1 > 130){
    fill(200,100,0)
    rotateY(-130)
     rect(0, 0, 120, 120);
     }
  
  fill(200,100,0)
  rect(0,0,120)
  fill(0)
    translate(0,0,1)
  text("1",50,80)
    translate(0,0,-1)

}


function door1(){
  openDoor1 = true
  buttonOpener1.hide()
}