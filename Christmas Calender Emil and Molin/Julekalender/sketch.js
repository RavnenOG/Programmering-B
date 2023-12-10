// Variabler vi skal bruge til det hele
let size = 120;
let gateOpenArray = new Array();
let gateOpenPermArray = new Array();
let angleArray = new Array();
let rotationBegunArray = new Array();

let gateXArray = new Array();
let gateYArray = new Array();

let calendarOpen = false;

//gateMaker laver alle lågerne
function gateMaker(x,y,gateImage,gateNumber){

  // vi gemmer translate og rotateY default state så vi kan ændre det tilbage til det
  push()

  //Bruger array for at sætte variablen til den låge vi er noget til
  let rotationBegun = rotationBegunArray[gateNumber-1]

  //Ser om man klikker på lågen
  if (mouseX > x-size/2+windowWidth/2 && mouseX < x+size/2+windowWidth/2 && mouseY > y-size/2+windowHeight/2 && mouseY < y+size/2+windowHeight/2 && mouseIsPressed == true){
    rotationBegunArray[number-1] = true;
  }
   

  //Laver noget bag lågen
  fill(0)
  rect(x-size/2,y-size/2,size)

  translate(x-size/2,y-size/2,0)

  //Vi bruger så pop til at ændre translate og rotate tilbage til den originale
 pop()
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw(){
  if(calendarOpen == true){
    background(180);

    //Laver lågerne
    gateMaker(gateXArray[0],gateYArray[0],image1);

  }


}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}