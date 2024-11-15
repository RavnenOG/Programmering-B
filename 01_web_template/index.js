function setup(){
    //Variablen c, er en ny instans af klassen Clock, som får div'en #clock med i sin construktor
    //Json objekt med styling parameter, sendes som det andet argument
    let styles = {
        background: 'orange',
        shape: 'cirkel'
    }
    let c = new Clock( select('#clock'), styles)
    c.start()
}
