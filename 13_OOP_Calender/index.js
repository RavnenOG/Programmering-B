let classContainer
let doorSound
let dataStructure = [
  {
    day:"1",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"2",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"3",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"4",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"5",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"6",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"7",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"8",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"9",
    content:"./assets/christmas2.jpg"
  },
  {
    day:"10",
    content:"./assets/christmas2.jpg"
  }
]

function preload() {
  doorSound = loadSound('./assets/your phone linging.mp3')
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')
  //let door = new Door(calendarContainer, "12", './assets/christmas2.jpg', doorSound)

  for(door of dataStructure){
    new Door(calendarContainer,door.day,door.content,doorSound)
  }
}