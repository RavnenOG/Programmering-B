let classContainer

function preload() {
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  let b = new Being('Bamsebjørn',1000)
  b.introduce()

  let a = new Alien('Wosnakjekka', 768,'Yoski')
  a.introduce()

  let h = new Human('John', 54,5)
  h.introduce()
  h.brag()
}