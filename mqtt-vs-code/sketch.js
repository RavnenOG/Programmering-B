let m5NameDiv, m5StatusDiv

//Denne variable bruges til at håndtere mqtt
let client

function setup() {
    m5NameDiv = select('#m5_1 header')
    m5StatusDiv = select('#m5_1 .status')


    //Vi kan bruge mqtt.connect fordi vi har indkluderet mqtt.js i HTML filen
    client = mqtt.connect('wss://mqtt.nextservices.dk')



    //On er en asynckron EVENT, som kaldes når vi får en besked fra mqtt serveren
    client.on('connect', function(svar){
        console.log(svar, 'serveren er klar')
    })


    //Nu vil vi gerne subscribe på et emne
    client.subscribe('programmering')
    
    //og så skal vi sætte den LISTENER op, som skal modtag input fra MQTT
    client.on('message', function(emne, besked){
        //Emnet kommer som en string
        console.log(emne)
        //Beskedn skal vi lige parse før vi kan læse den
        console.log(besked.toString())
        //Det vi får fra m5'eren er i det her eksempel JSON format
        let json = JSON.parse(besked.toString())
        //Nu kan jeg bruge data fra JSON opjektet
        console.log(json.name,'Her er navnet fra JSON opjektet')
        //Så kan vi opdatere HTML dokumentet
        m5NameDiv.html(json.name)
        m5StatusDiv.html(json.status)
        //
        if(json.status){
            m5StatusDiv.addClass("true")
        }else{
            m5StatusDiv.removeClass("true")
        }
    })
}