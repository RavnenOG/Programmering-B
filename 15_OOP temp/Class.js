console.log('OOP is here')

class Being {
  //super klassen kaldes ved oprettelse af nye objekter 
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce(){
console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`)
  }
}

class Alien extends Being {
  constructor(name, age, planet){
    super(name,age)
    this.planet = planet
  }

  introduce(){
    super.introduce()
    console.log(`and i am an alien, from the planet ${this.planet}`)
  }
}

class Human extends Being{
  constructor(name,age,nof){
    super(name,age)
    this.nof = nof
  }

  brag(){
    for(let i=0;i<this.nof;i++){
      console.log(`I am superior because i have so many fingers`)
    }
  }
}