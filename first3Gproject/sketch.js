let currentPage = 1
let pages //array med alle elementer med class = page

function setup(){
  
  pages = selectAll('.page')
 // console.log(pages.length)
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
