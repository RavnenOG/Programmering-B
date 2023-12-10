// Variabler vi skal bruge til det hele
let size = 120;
let gateOpenArray = new Array();
let gateOpenPermArray = new Array();
let angleArray = new Array();
let rotationBegunArray = new Array();

let gateXArray = new Array();
let gateYArray = new Array();
let gateSpawnAmount = 1;

let calendarOpen = Open;

function preload(){
  font1 = loadFont('Present.ttf');
  image1 = loadImage("images/JuleBilled1");

}

//gateMaker laver alle lågerne
function gateMaker(x,y,gateImage,gateNumber,textLocation){

  // vi gemmer translate og rotateY default state så vi kan ændre det tilbage til det
  push()

  //Bruger array for at sætte variablen til den låge vi er noget til. For at vide hvilken
  let rotationBegun = rotationBegunArray[gateNumber-1]

  //Ser om man klikker på lågen
  if (mouseX > x-size/2+windowWidth/2 && mouseX < x+size/2+windowWidth/2 && mouseY > y-size/2+windowHeight/2 && mouseY < y+size/2+windowHeight/2 && mouseIsPressed == true){
    rotationBegunArray[number-1] = true;
  }
   

  //Laver noget bag lågen
  fill(0)
  rect(x-size/2,y-size/2,size)

  //Translater for at rykke billedet så det passer
  translate(x-size/2,y-size/2,0)

  /*First we ask if the gate we are on is past -150, by getting its angle with the angleArray
  And if it is past -150, we know its done opening, so we set it to open and keep it open*/
  if(angleArray[gateNumber-1]< -150){

    rotateY(angleArray[gateNumber-1]); //keeping it open

    if(gateOpenPermArray[gateNumber-1] == false){ 
      gateOpenArray[gateNumber-1] = true; //setting it to open
      gateOpenPermArray[gateNumber-1] = true; //doing so that specific gate is open
    }
else{ //
  gateOpenArray[gateNumber-1] = false;
}
  }

else if(rotationBegun == true){//og hvis den ikke er allerede åben så åbner vi

  angleArray[gateNumber-1] --;
  rotateY(angleArray[gatenumber-1]);

}
  
 // Så placere vi billedet og låge nummer de rigtige steder
 image(gateImage,0,0,size,size)
 translate(0,0,-1)
 fill(255)
 rect(0,0,size-1)
 fill(255)
 translate(0,0,3)
 text(gateNumber,textLocation,75)
 fill(255)


  //Vi bruger så pop til at ændre translate og rotate tilbage til den originale
 pop()
}

function gateOpenChecker(gateNumber){

  if(gateOpenArray[gateNumber-1] == true){


    calendarOpen = false;
  }


}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  textFont(font1);
  textSize(60);
  noStroke();

  for(let i = 1; i <= 24; i++){
    gateOpenArray.push(false);
    gateOpenPermArray.push(false);
    angleArray.push(0);
    rotationBegunArray.push(false);
  }

  while(gateSpawnAmount<=24){
    
  }

}

function draw(){
  if(calendarOpen == true){
    background(180);

    //Laver lågerne
    gateMaker(gateXArray[0],gateYArray[0],image1);
  }

  while(gate)


}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}