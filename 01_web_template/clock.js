
//Når en klasses objekter kan oføre sig forskelligt iforhold til construktoren, kaldes det POLYMORFI
class Clock{
    //Construktoren er klassens setup "setup" funktion, som kaldes når nye objekter med klassen
    constructor(div, style){
        this.div = div
        this.style = style

        //Hours, minutes and seconds
        this.hDiv = createDiv();
        this.mDiv = createDiv();
        this.sDiv = createDiv();
        this.div.child(this.hDiv);
        this.div.child(this.mDiv);
        this.div.child(this.sDiv);
        //Interval til at sætte tiden ind
        this.interval
        //styles
        this.div.style('width', '16rem')
        this.div.style('height', '5rem')
        this.div.style('border', '4px dotted gray')
        this.div.style('display','grid')
        this.div.style('place-items','center')
        this.div.style('padding','1rem')
        this.div.style('border-radius','2rem')
        this.div.style('font-size','2rem')
        //reager på argumentet style fra construktoren
        switch(style.shape){
            case 'cirkel':
                this.div.style('height','16rem')
                this.div.style('border-radius','50%')
                break
            case 'ellipse':
                this.div.style('height','8rem')
                this.div.style('border-radius','50%')
                break
        }
        switch(style.background){
            case 'pink': 
                this.div.style('background','hotpink')
                break
            case 'orange': 
                this.div.style('background','orange')
                break
            case 'black': 
                this.div.style('background','black')
                this.div.style('color','white')
                break        
        }
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
    stop(){
        clearInterval(this.interval)
    }
    
}