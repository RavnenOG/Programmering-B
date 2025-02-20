async function setup(){
let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
let data = await response.json();
console.log(data);
let joke = data.joke;
let cate = data.category;
createP(joke);
createP(cate);
}

async function getJoke(){
  let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
let data = await response.json();
console.log(data);

}