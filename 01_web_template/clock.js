class Clock{
    //Construktoren er klassens setup "setup" funktion, som kaldes når nye objekter med klassen
    constructor(div){
        this.div = div
        //Hours, minutes and seconds
        this.hDiv = createDiv();
        this.mDiv = createDiv();
        this.sDiv = createDiv();
        this.div.child(this.hDiv);
        this.div.child(this.mDiv);
        this.div.child(this.sDiv);
        //Interval til at sætte tiden ind
        this.interval
    }
    start(){
        this.interval = setInterval(()=> {
            /*Denne compakte kode spørg med ? om hour funktion retunere et tal under 10, 
            hvis ja sætter vi et 0 foran. Så siger vi ellers med : og det betyder ellers returner bare hour*/
            this.hDiv.html(hour() < 10 ? "0"+hour():hour())
            this.mDiv.html(minute() < 10 ? "0"+minute():minute())
            this.sDiv.html(second() < 10 ? "0"+second():second())
        },1000)
    }
}