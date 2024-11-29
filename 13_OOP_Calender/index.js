let classContainer


function preload(){
  for( door of dataStructure){
    if(door.sound){
      door.sound = loadSound(door.sound)
    }
  }
}

function setup() {
  //HTML containeren
  calendarContainer = select('#calendar')

  for(door of dataStructure){
    DoorFactory.createDoor(calendarContainer,door)
  }

}