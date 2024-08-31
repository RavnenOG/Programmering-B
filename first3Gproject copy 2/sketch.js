let currentPage = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne
let menuButton
let menuHidden

let video
let videoPaused

function setup(){
  
  pages = selectAll('.page')
  menuItems = selectAll('.menuitem')
  menuButton = select('#menuButton')
  menuHidden= false

  video = select('#video')
  videoPaused = true

  //menuitems skal reagere ved at skifte side
  for(m of menuItems){
    m.mousePressed( function(e){
      //slice -1 henter det sidste bogstav i en string
      let nr = e.target.id.slice(-1)
      //nu kan vi kalde shiftpage som skifter side
      shiftPage(nr)
    } )
  }

  menuButton.mousePressed(function(){ 
      hideMenu()
  })
  video.mousePressed(function(){
    videoPause()
  })


  shiftPage(currentPage)

}

function hideMenu(){
  if(menuHidden){
    select('header').addClass('headerHidden')
    menuButton.addClass('menuHidden')
    menuHidden = false
  }else{ 
    select('header').removeClass('headerHidden')
    menuButton.removeClass('menuHidden')
    menuHidden = true
  }

}

function shiftPage(num){

  if(num != 5){
    video.pause()
    videoPaused = true
  }

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


//Video start og oause function
function videoPause(){

  if (videoPaused) {
    video.play()
    videoPaused = false
} else {
    video.pause()
    videoPaused = true
}
}