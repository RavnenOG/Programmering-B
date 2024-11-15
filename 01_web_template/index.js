function setup(){
    //Variablen c, er en ny instans af klassen Clock, som får div'en #clock med i sin construktor
    let c = new Clock( select('#clock'))
    c.start()
}