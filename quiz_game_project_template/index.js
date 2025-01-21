/*Dette er en webapp som henter quiz spørgsmål fra et api og stiller
dem på skærmen, hvor brugeren skal trykke på de rigtige svar*/
let amount = 10;
let category = 12;
let difficulty = "medium";
let type = 'boolean';

const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

function setup() {
  noCanvas() // p5.js setup without canvas
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
      q2 : quizQuestions.results[2],
      q2 : quizQuestions.results[3],
      q2 : quizQuestions.results[4],
      q2 : quizQuestions.results[5],
      q2 : quizQuestions.results[6],
      q2 : quizQuestions.results[7],
      q2 : quizQuestions.results[8],
      q2 : quizQuestions.results[9]}
      console.log(questions.q1.correct_answer)
    showQuestion(questions)
  }else{
    console.log("der var en fejl i hentningen af data")
  }
}

function showQuestion(q){
  select('#questionDiv').html(q.q1.question)
  showAnswers(q)
}

let trueButton
let falseButton

function showAnswers(q){
let trueButton = createButton('True')
let falseButton = createButton('False')

select('main').child(trueButton)
select('main').child(falseButton)

trueButton.mousePressed(()=>checkAnswer(q, trueButton, falseButton, "True"))
falseButton.mousePressed(()=>checkAnswer(q, trueButton, falseButton, "False"))
}

function checkAnswer(q, trueButton, falseButton, answer){

if(q.correct_answer == "True" && answer == "True"){
  trueButton.addClass('correct')
  falseButton.addClass('incorrect')
}else{
  trueButton.addClass('incorrect')
  falseButton.addClass('correct')
}
}