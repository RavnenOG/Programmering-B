let numberToFind = 0
let list = []
let numberFound = false
let display
let showText = false

//buttons
let nFindB
let newNumberB

function setup() {
  createCanvas(windowWidth,windowHeight);

  textAlign(CENTER)


  //buttons
  nFindB = createButton("Find")
  nFindB.position(width/2,height/2+height/8)
  nFindB.size(80,50)
  nFindB.mouseClicked(findNumber)

  newNumberB = createButton("Create new Number")
  newNumberB.position(width/2-width/8,height/2+height/8)
  newNumberB.size(80,50)
  newNumberB.mouseClicked(createNumber)

  newArrayNumbers= createButton("Create new List")
  newArrayNumbers.position(width/2+width/8,height/2+height/8)
  newArrayNumbers.size(80,50)
  newArrayNumbers.mouseClicked(newArray)

}

function draw() {
  background(220);

  //Display the number that needs to be checket for
  textSize(30)
  if(numberToFind != 0){
  text("Number: "+numberToFind,width/2,height/2,100,100)}
  else{ text("No number created",width/2,height/2,200,100)}
  
  if(list.length>0){
  text("The numbers in the list: "+display,width/2,height/2+height/4,200,200)
  }

if(showText == true){
  if(numberFound == true){
    text("Ja, tallet "+numberToFind+" er i listen",width/2,height/4,300,100)
  }else{
    text("Nej, desværre er tallet "+numberToFind+" ikke i listen",width/2,height/4,300,100)
  }
}
}


function findNumber(){
  console.log(list)

  for(let i = 0; i < list.length; i++){
    console.log("for loop running")
    let currentNumber = list[i]
    if(numberToFind == currentNumber){
      numberFound = true
    }
  }
  console.log("ja")
  showText = true
}

function createNumber(){
  numberToFind = round(random(1,10))
  numberFound = false
  showText = false
}


function newArray(){
  list.splice(0,list.length)
  
  
  for(let u=0; u<=5;u++){
    list.push(round(random(1,10)))
  }
  //Changes what needs to be displayed
  display = list
}