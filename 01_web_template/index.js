let currentPage = 1
let pages //array med alle elementer med class = page 
let seconds = 0

function setup(){
    pages = selectAll('.page')
    setInterval(()=>{
        let hoursZero = hour()<10 ? "0" : ""
        let minutesZero = minute()<10 ? "0" : ""
        let secondsZero = second()<10 ? "0" : ""
        select('#timer_hours').html(hoursZero + hour())
        select('#timer_minutes').html(minutesZero + minute())
        select('#timer_seconds').html(secondsZero + second())
    },1000)
    
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}

