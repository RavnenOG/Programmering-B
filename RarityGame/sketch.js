
let inventory

let lootBox1 = []

let item1
let item2

let rarity = ["Common","Uncommon","Rare","Epic","Legendary","Ultra","Infinity"]

//Images
let pinkShovel

function preload(){

  //preload images
  pinkShovel = loadImage("Images/PinkShovel.PNG")

}

function setup(){
  createCanvas(windowWidth,windowHeight)
  imageMode(CENTER)

  //Items
  item1 = {
    x: width/2,
    y: height/2,
    Img: pinkShovel,
    Name: "Pink shovel",
    Worth: 20
  }
}

function draw(){
  background(0)
  fill(255)


  //Show inventory (testing)
  textAlign(CENTER)
  textSize(30)
  text(item1.Name+": "+item1.Worth+"$",item1.x,item1.y+50)
  image(item1.Img,item1.x,item1.y,50,50)

}