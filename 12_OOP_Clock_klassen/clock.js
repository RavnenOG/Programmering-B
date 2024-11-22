
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
        this.div.style(
            `
            width:16rem;
            height:5rem;
            border: 4px dotted gray;
            display:grid
            grid-template-columns: 1fr 1fr 1fr;
            padding: 1rem;
            border-radius: 2rem;
            place-items:center;
            font-size:1.5rem;
            `
        )

        //reager på argumentet style fra construktoren
        switch(style){
            case 'cirkel':
                this.div.style('height','16rem')
                this.div.style('border-radius','50%')
                break
            case 'ellipse':
                this.div.style('height','8rem')
                this.div.style('border-radius','50%')
                break
        }
        switch(style){
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
            default:
                this.div.style('background','rgba(0,0,0,0)')  
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
    applyStyles(){

    }
}