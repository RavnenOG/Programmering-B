function setup(){
    let c = new Clock( select('#clock'), 'black')
    c.start()

    let otherClockDiv = createDiv()
    let otherClock = new Clock(otherClockDiv)
    otherClock.start()
    otherClockDiv.position(100,100)
}
