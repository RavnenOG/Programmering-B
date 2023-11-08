let pageHeader
let showRedCircle = true

function windowresized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  pageHeader = createElement('h1','overskrift med creat element')
  pageHeader = select('#htmlPageHedder')
    .html('Nu har p5 overtaget overskriften')
    .position(100,100)
    .mouseClicked(() => showRedCircle = !showRedCircle)
}

function draw() {
  background(220);

  if(showRedCircle == true){
    fill(255,0,0)
    ellipse(300,300,200)
}
}