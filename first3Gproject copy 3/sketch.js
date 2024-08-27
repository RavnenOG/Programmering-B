let currentPage = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne

function setup(){
  
  pages = selectAll('.page')
  menuItems = selectAll('.menuitem')

  //menuitems skal reagere ved at skifte side
  for(m of menuItems){
    m.mousePressed( function(e){
      //slice -1 henter det sidste bogstav i en string
      let nr = e.target.id.slice(-1)
      //nu kan vi kalde shiftpage som skifter side
      shiftPage(nr)
    } )
  }
  shiftPage(currentPage)

  //vent 2 sekunder og sæt så klassen "hidden på headeren - så menuen bliver væk
  setTimeout(function(){
    select('header').addClass('hidden')
  },5000)
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
  select("#menu" + currentPage).removeClass('active')
  currentPage = num
  select("#page" + currentPage).addClass('visible')
  select("#menu" + currentPage).addClass('active')
  
}

function keyPressed(){
shiftPage(key)
}
