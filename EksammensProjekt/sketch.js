let playingBackground
let playingMenu

let player
let playerSkin
let mothershipSkin
let bulletSkin
let enemyBulletSkin
let enemySkin1
let enemySkin2
let enemySkin3

let points = 0

let motherShipStartLife = 100
let motherShipLife = 100
let motherShipPos

let backgroundMusic1

let menuSizeW = 80

let musicPlaying

// bullets er et tomt array til skud 
let bullets = []
//enemies er et tomt array til fjender
let enemies = []
//enemybullets er et tomt array til fjendens skud 
let enemyBullets = []
//explosions er et tomt array til fjender
let explosions = []
let explosion
//abilities er et tomt array til evner
let abilities = []




function preload(){
  //Sounds and music
  soundFormats('mp3', 'ogg');
  backgroundMusic1 = loadSound('SoundsMusic/Videoclub Roi Intrumental FULL compressed.mp3')
  

  //Pictures and gifs
  playingBackground = loadImage('Pictures/playingBack.jpg')
  playingMenu = loadImage('Pictures/menuBack1.gif')
  playerSkin = loadImage('Pictures/playerSkin101.gif')
  mothershipSkin = loadImage('Pictures/MotherShip.png')
  bulletSkin = loadImage('Pictures/playerBullet.png')
  enemyBulletSkin = loadImage('Pictures/EnemyBullet.png')
  enemySkin1 = loadImage('Pictures/EnemySkin1Red.png')
  enemySkin2 = loadImage('Pictures/RocketEnemySpaceShipTransparent.png')
  enemySkin3 = loadImage('Pictures/EnemySpaceShip3.png')
  explosion = loadImage('Pictures/explosion1.gif') 
}
function setup() {
  
  motherShipPos = windowHeight-80
  frameRate(500)
  createCanvas(windowWidth, windowHeight);
  
//////////
  
  textAlign(CENTER)

  
////////////////////////////////////////////////////////
  // laver player som JSON object med nogle variabler og funktioner 
  // som skal vise den og styre den 
  player = {
    x:width/2,
    y:height -80,
    w:100,
    h:100,
    s:3,
    show: function (){
      //This draws the space ship
      imageMode(CENTER)
      image(playerSkin, this.x, this.y, this.w, this.h)
    },
    move: function(directionX, directionY){
      //Flyt playerens x og y værdi
      this.x += directionX * this.s
      this.y += directionY * this.s
      //begræns x og y værdien til skærmen
      this.x = constrain(this.x, this.w/2, width - this.w/2-menuSizeW)
      this.y = constrain(this.y, this.h/2, height - this.h/2)

    },
    shoot: function(){
      // createBullet returnere et JSON object som er en kugle 
    let b = createBullet()
    //bullets er array med kugler
      bullets.push(b)
    }
  }
}

/////////////////////////////////////////////////////////////////////

function draw() {
  

/////////////////////////////////
//Music

  if(mouseIsPressed && !musicPlaying){
    musicPlaying = true
 backgroundMusic1.play()}
 if(!backgroundMusic1.isPlaying()){
  musicPlaying = false
 }

///////////////////////////////

/////////////////
//Background visuels
  imageMode(CORNER)
  image(playingBackground,0,0,width-menuSizeW,height)
  image(playingMenu,width-menuSizeW,0,menuSizeW,height)
  image(mothershipSkin,0,height-120,width-menuSizeW,175)

/////////////////////


  ///////////////////////
  //Player functions
  if(keyIsDown(LEFT_ARROW)){
    player.move(-1,0)
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.move(+1,0)
  }
  if(keyIsDown(UP_ARROW)){
    player.move(0,-1)
  }
  if(keyIsDown(DOWN_ARROW)){
    player.move(0,+1)
  }
  player.show()
  
  //////////////////////
  /*Running all bullets in the bullets array through,
  and calling bullets show and move function for each bullet*/
  for(let i = 0; i < bullets.length; i++){
    bullets[i].show()
    bullets[i].move()
  }
  
   //////////////////////
  /*Running all bullets in the bullets array through,
  and calling bullets show and move function for each bullet*/
  for(let i = 0; i < enemyBullets.length; i++){
    enemyBullets[i].show()
    enemyBullets[i].move()
    
    let currentEnemyBullet = enemyBullets[i]
    
    if(currentEnemyBullet.y >= motherShipPos){
      createExplosion(currentEnemyBullet.x, currentEnemyBullet.y)
      enemyBullets.splice(i,1)
    }
  }
  
  ////////////////////////
  //Enemies
  //Modulo means when there is 0 left of division, then the if statement is met
  //When a certern amount of time has passed, it spawns a new enemy
  if(frameCount % 200 == 0){
    //EnemyType chooses the type of enemy that is spawned
    let enemyType = round(random(1,3))
    let e = createEnemy(enemyType)
    enemies.push(e)

  }
  
  /*Running all enemies in the enemies array through,
  and calling enemies show and move function for each enemy*/
  for(let i = 0; i < enemies.length; i++){
    enemies[i].show()
    enemies[i].move()
    if(enemies[i].a == true){
    enemies[i].shoot()
    }
    //This 
    if(enemies[i].y > motherShipPos){
      createExplosion(enemies[i].x, enemies[i].y)
      enemies.splice(i,1)
      
       //TAKE LIFE FROM MOTHERSHIP HERE
      
    }
  }
  
//////////////////
/*Here we check if any of the bullets, current in the bullets array/on the screen, are
  hitting any of the enemies, current in the enemies array/on the screen.*/
  //We make a loop that check every bullet through if they are hitting any of the
for(let i = 0; i < bullets.length; i++){
  //We make a varible for the current bullet we are checking if its hitting any enemies
  let currentBullet = bullets[i]
  
  //Then we look all the enemies through, if any of them is hitting the current bullet we are checking for
  for(let n = 0; n < enemies.length; n++){
  //We then make a varible for the current enemy we are checking if the current bullet is hitting it
  let currentEnemy = enemies[n]
  //Then we check if they are hitting and if they are, then the if statement removes both the bullet and the enemy, and then adds an explosion
    if(bulletHitEnemy(currentBullet, currentEnemy)){
      
      points += currentEnemy.p
      bullets.splice(i,1)
      enemies.splice(n,1)
      imageMode(CENTER)
      createExplosion(currentBullet.x, currentBullet.y)
      
    }
  }
  
  
}
  
//////////////
//This runs the explosions array through, and shows all the explosions that needs to be on the screen
  for(let p = 0; p < explosions.length; p++){
    //laver en variable der referer til explosionen
    let e = explosions [p]
    image(explosion,e.x,e.y,100,100)
    
    //If the current explosion on the screen has been more time on the screen then the variable end says it can, then it removes the explosion
    if(e.end < millis()){
      explosions.splice(p,1)
    }
  }
  
  textSize(20)
  fill(255)
  text("Points: "+points,width-menuSizeW,50,menuSizeW,100)
}





///////////////////////////////////////////////////////////////////////

//When this function is called, then it adds an explosion to the explosions array and places it where the caller ask it to / x,y
function createExplosion(x,y){
  explosion.reset()
  let e = {
    x: x,
    y: y,
    end: millis() + 1000
  }
  explosions.push(e)
}

//////////////////////////////////////////
//When this function is called, then it returns all infomation about the bullet and its functions to the caller
function createBullet(){
  //return gives the object with the bullet back to, who called the function
  return {
    x: player.x,
    y: player.y-player.h/2,
    w: 40,
    h: 40,
    s: 6,
    show: function(){
      imageMode(CENTER)
      image(bulletSkin, this.x, this.y, this.w, this.h)
    },
    move: function(){
      this.y -= this.s
    }
  }
}

/////////////////////

function createEnemyBullet(x,y,h){
  //return gives the object with the bullet back to, who called the function
  return {
    x: x,
    y: y+h,
    w: 20,
    h: 40,
    s: 2,
    show: function(){
      imageMode(CENTER)
      image(enemyBulletSkin, this.x, this.y, this.w, this.h)
    },
    move: function(){
      this.y += this.s
    }
  }
}

//////////////////////////////////////////
//When this function is called, then it returns all infomation about the enemy and its functions to the caller
function createEnemy(type){
  // giv nyt enemy objekt tilbage
  return {
    //Spawner enemy ind random steder på x aksen og søger for at enemyen kan spawne inde for playerens skyde række vide
    x: random(player.w/2,width-player.w/2-menuSizeW),
    y: -20,
    w: 60,
    h: 60,
    s: 1,
    t: type,
    a: false,
    p: 0,
    show: function(){
   imageMode(CENTER)
      if(this.t == 1){
        //Enemy type 1. Medium
    image(enemySkin1, this.x, this.y, this.w, this.h)
        
        //points worth
        this.p = 2
      }
      else if(this.t == 2){
        //Enemy type 2. Small and fast
        image(enemySkin2, this.x, this.y, this.w, this.h)
        this.w = 35
        this.h = 50
        this.s = 2
        
        //points worth
        this.p = 1
      }
      else if(this.t == 3){
        //Enemy type 2. Medium- and has ability to shoot
        image(enemySkin3, this.x, this.y, this.w, this.h)
        //this.a gives the enemy the ability to shoot
        this.a = true
        this.w = 80
        this.h = 80
        
        //points worth
        this.p = 3
      }
  },
    move: function(){
      this.y += this.s
    },
    //The shoot function is an ability that the enemy can have to spawn a bullet or as      said shoot
    shoot: function(){
      if(frameCount % 300 == 0){
        console.log("Enemy has shot a shot")
          let eb = createEnemyBullet(this.x,this.y,this.h)
    //enemyBullets er array med fjendernes kugler
      enemyBullets.push(eb)
      }
    }
  }
}

function bulletHitEnemy(bullet, enemy){
  /*Vi opfatter fjernder og kugler som firkanter
  derfor gemmer vi deres sider's x og y værdier i nogle variabler*/
  let enemyLeft = enemy.x - enemy.w/2
  let enemyRight = enemy.x + enemy.w/2
  let enemyTop = enemy.y - enemy.h/2
  let enemyBot = enemy.y + enemy.h/2
  
  let bulletLeft = bullet.x - bullet.w/2
  let bulletRight = bullet.x + bullet.w/2
  let bulletTop = bullet.y - bullet.h/2
  let bulletBot = bullet.y + bullet.h/2
  
  //Nu bruger vi udelukkelsemetoden
  let collision = true
  if(//Hvis nogen af dem her er sande så rør kuglen ikke en enemy
  bulletRight < enemyLeft || 
  bulletLeft > enemyRight || 
  bulletTop > enemyBot || 
  bulletBot < enemyTop
  ){
     collision = false
  }
  //Retunere om de rammer hindanen
  return collision
}

function keyPressed(){
  if(key == " "){
    //kalder på shoot funktion inde fra player JSON objektet 
    player.shoot()
  }
}