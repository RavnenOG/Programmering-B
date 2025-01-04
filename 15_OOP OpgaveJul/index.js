let classContainer

function preload() {
}

async function setup() {

  //HTML containeren
  classContainer = select('#class-container')

  let b = new DataFetcher('https://jsonplaceholder.typicode.com/users')

  await b.fetchData();
  
  b.displayData(classContainer)
}