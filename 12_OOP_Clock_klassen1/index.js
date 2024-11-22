function setup(){
    //Variablen c, er en ny instans af klassen Clock, som får div'en #clock med i sin constructor
    let c = new Clock( select('#clock') , 'black')
    c.start()

    let otherClockDiv = createDiv()
    let otherClock = new Clock(otherClockDiv,null,)
    otherClock.start()
    otherClockDiv.position( 100, 100 )
    otherClock.setAlarm('12','25','0')
}