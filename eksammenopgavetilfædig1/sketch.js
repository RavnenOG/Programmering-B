let joke
let cate

async function setup(){
let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
let data = await response.json();
console.log(data);
joke = data.joke;
cate = data.category;

document.getElementById('joke').innerText = "Joke: "+joke;
document.getElementById('category').innerText = "Category: "+cate;

}

async function getJoke(){
  let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
let data = await response.json();
console.log(data);

joke = data.joke;
cate = data.category;
document.getElementById('joke').innerText = "Joke: "+joke;
document.getElementById('category').innerText = "Category: "+cate;

}

document.getElementById('button1').addEventListener('click', getJoke);