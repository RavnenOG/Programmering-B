let currentPage = 1
let menuNumber = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne
let colors = ['purple','orange','black','white']

function setup(){
  select('#page' + currentPage).addClass('visible')
  select('#menu' + menuNumber).addClass('active')
  
  pages = selectAll('.page')
  menuItems = selectAll('.menuitem')

  for(m of menuItems){
    m.mousePressed( function(e){
      //slice -1 henter det sidste bogstav i en string
      let nr = e.target.id.slice(-1)
      shiftPage(nr)
    } )
  }

  //lav masse diver som vi putter in i page 3
  for(c of colors){
    let div = createDiv()
    div.style('background-color',c)
    select('#page3').child(div);
  }
}

function shiftPage(num){
if(num == "ArrowLeft"){
  num = currentPage - 1
}
if(num == "ArrowRight"){
  num = currentPage + 1
}

if(isNaN(num) || num > pages.length || num == 0){
 console.log("Så der noget galt")
 return
}

  select("#page" + currentPage).removeClass('visible')
  currentPage = num
  select("#page" + currentPage).addClass('visible')

  select("#menu" + menuNumber).removeClass('active')
  menuNumber = num
  select("#menu" + menuNumber).addClass('active')
  
}

function keyPressed(){
shiftPage(key)
}
