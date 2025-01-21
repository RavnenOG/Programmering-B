let currentPage = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne
let menuButton
let menuHidden

let amount = 10;
let category = 12;
let difficulty = "medium";
let type = 'boolean';

const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

function setup(){
  
  pages = selectAll('.page')
  menuItems = selectAll('.menuitem')
  menuButton = select('#menuButton')
  menuHidden= false

  //menuitems skal reagere ved at skifte side
  for(m of menuItems){
    m.mousePressed( function(e){
      //slice -1 henter det sidste bogstav i en string
      let nr = e.target.id.slice(-1)
      //nu kan vi kalde shiftpage som skifter side
      shiftPage(nr)
    } )
  }

  menuButton.mousePressed(function(){ 
      hideMenu()
  })
  


  shiftPage(currentPage)
  fetchQuizQuestion()
}

async function fetchQuizQuestion() {
    let result = await fetch(apiUrl)
    console.log(result)
    if(result.ok){
      let quizQuestions = await result.json()
      console.log(quizQuestions)
      //let question1 = quizQuestions.results[0]
      let questions = {
        q1 : quizQuestions.results[0],
        q2 : quizQuestions.results[1],
        q3 : quizQuestions.results[2],
        q4 : quizQuestions.results[3],
        q5 : quizQuestions.results[4],
        q6 : quizQuestions.results[5],
        q7 : quizQuestions.results[6],
        q8 : quizQuestions.results[7],
        q9 : quizQuestions.results[8],
        q10 : quizQuestions.results[9]}
        console.log(questions.q1.correct_answer)
      showQuestion(questions)
    }else{
      console.log("der var en fejl i hentningen af data")
    }
  }

  function showQuestion(q){
    console.log(q)
    select('#questionDiv1').html(q.q1.question)
    select('#questionDiv2').html(q.q2.question)
    select('#questionDiv3').html(q.q3.question)
    select('#questionDiv4').html(q.q4.question)
    select('#questionDiv5').html(q.q5.question)
    select('#questionDiv6').html(q.q6.question)
    for(i=1;10;i++){
        showAnswers(q.q1,i)}
    
  }

    

function showAnswers(q,questionNumber){
let trueButton = createButton('True')
let falseButton = createButton('False')


select(`#buttonsDiv${questionNumber}`).child(trueButton)
select(`#buttonsDiv${questionNumber}`).child(falseButton)

trueButton.mousePressed(()=>checkAnswer(q, trueButton, falseButton, "True"))
falseButton.mousePressed(()=>checkAnswer(q, trueButton, falseButton, "False"))
}

function checkAnswer(q, trueButton, falseButton, answer){
    let trueButtonHasClass = trueButton.hasClass('correct') || trueButton.hasClass('incorrect');
    let falseButtonHasClass = falseButton.hasClass('correct') || falseButton.hasClass('incorrect');

    if (!trueButtonHasClass && !falseButtonHasClass) {
if(q.correct_answer == "True" && answer == "True"){
  trueButton.addClass('correct')
  falseButton.addClass('incorrect')

}else{
  trueButton.addClass('incorrect')
  falseButton.addClass('correct')
}
}
}


    //Menu functions:
function hideMenu(){
  if(menuHidden){
    select('header').addClass('headerHidden')
    menuButton.addClass('menuHidden')
    menuHidden = false
  }else{ 
    select('header').removeClass('headerHidden')
    menuButton.removeClass('menuHidden')
    menuHidden = true
  }

}

function shiftPage(num){

if(num == "ArrowLeft"){
  num = currentPage - 1
}
if(num == "ArrowRight"){
  num = currentPage + 1
}

if(isNaN(num) || num > pages.length || num == 0){
 console.log("Så der noget galt")
 return
}

  select("#page" + currentPage).removeClass('visible')
  select("#menu" + currentPage).removeClass('active')
  currentPage = num
  select("#page" + currentPage).addClass('visible')
  select("#menu" + currentPage).addClass('active')
  
  
}

function keyPressed(){
shiftPage(key)
}