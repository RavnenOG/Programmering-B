let currentPage = 4
let pages //array med alle elementer med class = page
let colors = ['purple','orange','black','white']

function setup(){
  select('#page' + currentPage).addClass('visible')

  pages = selectAll('.page')

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
  
}

function keyPressed(){
shiftPage(key)
}
