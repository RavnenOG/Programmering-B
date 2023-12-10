// Variabler vi skal bruge til det hele
let size = 120;
let gateOpenArray = new Array();
let gateOpenPermArray = new Array();
let angleArray;
let rotationBegunArray = new Array();

let gateXArray = new Array();
let gateYArray = new Array();

//gateMaker laver alle lågerne
function gateMaker(x,y,gateImage,gateNumber){

  // vi gemmer translate og rotateY default state så vi kan ændre det tilbage til det
  push()
  //Bruger array for at sætte variablen til den låge vi er noget til
  let rotationBegun = rotationBegunArray[gateNumber-1]
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw(){
background(180);

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}