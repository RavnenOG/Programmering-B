let currentPage = 3

let pages //array med alle elementer med class = page 
let menuItems //array med alle menupunkterne  

function setup(){
    setupMenuStructure()
}

function setupMenuStructure(){
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')

    //menu items skal reagere ved at skifte side
    for( m of menuItems ){
        m.mousePressed( function(e) {
            //e.target er selve html div'en 
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            //nu kan vi kalde shiftPage som skifter side
            shiftPage(nr)
        })
    }

    //shiftPage er funktionen der tager et tal og skifter til en side        
    shiftPage(currentPage)
    //vent to sekunder og sæt så klassen "hidden" på headeren - så menuen bliver væk
    setTimeout(function(){
        select('header').addClass('hidden')
    }, 10000)

}

function pageOne(){
    console.log("Side 1 functionen kaldes")
}

function pageTwo(){
//Først ber vi fetch at hente den lokale fil
fetch('./mydata.json')

//så venter vi på serverens promise, der kommer tilbage med .then()
.then(
    function(response){
        //lad os tjekke om serverens response er okay
        console.log(response)
        //og hvis det er det, beder vi serveren om at give os json resultatet 
        return response.json()
    }
)
//og når DET så komer tilbage 
.then(
    function (data){
        //vi har nu en random drink
        console.log(data)
        //p5 funktionen der laver en ny div
        let newDiv = createElement('div')
        let newHeader = createElement('h1', data.Name)
        let newText = createElement('p',data.Descriptiption)

        newDiv.child(newHeader);
        newDiv.child(newText);
        select('#localData').child(newDiv);


    }
)
    
}

function pageThree(){

    

    //Først kalder vi server API'ets endpoint
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

    //så venter vi på serverens promise, der kommer tilbage med .then()
    .then(
        function(response){
            //lad os tjekke om serverens response er okay
            console.log(response)
            //og hvis det er det, beder vi serveren om at give os json resultatet 
            if(response.ok){
            return response.json()
            }
        }
    )
    //og når DET så komer tilbage 
    .then(
        function (cocktails){
            //vi har nu en random drink
            console.log(cocktails)

            for(c of cocktails.drinks){
                console.log(c.strDrink)

                let headerDiv = createElement('div')
                let drinkHeader = createElement('h1', c.strDrink)

                let infoDiv = createElement('div');
                let drinkImage =createImg(c.strDrinkThumb);
                let drinkHowTo = createElement('p',c.strInstructions)

                headerDiv.child(drinkHeader)
                infoDiv.child(drinkImage)
                infoDiv.child(drinkHowTo)

                select('#p3').child(headerDiv);
                select('#p3Info').child(infoDiv);
            }


           
            

            


            
           
        }
    )

}

function pageFour(){
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
    select("#menu" + currentPage).removeClass('active')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
    select("#menu" + currentPage).addClass('active')

    if(currentPage == 1){
        pageOne()
    }

    if(currentPage == 2) {
        pageTwo()
    }
    if(currentPage == 3) {
        pageThree()
    }
    if(currentPage == 4) {
        pageFour()
    }
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}



