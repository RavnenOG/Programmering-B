let playingBackground
let playingMenu

let player
let playerOriSpeed = 6
let bulletReady

let playerSkin
let mothershipSkin
let bulletSkin
let enemyBulletSkin
let enemySkin1
let enemySkin2
let enemySkin3
let startMenuSplashScreen
let scrapSkin


let points = 0
let scrap = 0
let scrapDespawnTime = 10 //scrapDespawnTime is choosen here and is in second, cause it is later down timed by 1000 cause its in millis.
let highscore = 0

let motherShipStartLife = 100
let motherShipLife
let motherShipPos

let backgroundMusic1

let menuSizeW = 120
let buttonSizeW = menuSizeW-40

let musicPlaying

let starbornFont

let frames = 60

let enemySpawnTimer = 200 //The less the number the faster they come
let difficulty = 1

//States
let gameStarted = false

//Damage variables
let enemyBulletDMG = 5
let enemyShip1DMG = 20 //The red ship
let enemyShip2DMG = 10 //The fast ship
let enemyShip3DMG = 15 // the shooting ship

//Scrap worth vairables
let e1Worth = 15 //the red ship
let e2Worth = 10 //the fast ship
let e3Worth = 20 //The shooting ship

// bullets er et tomt array til skud 
let bullets = []
//enemies er et tomt array til fjender
let enemies = []
//enemybullets er et tomt array til fjendens skud 
let enemyBullets = []
//explosions er et tomt array til fjender
let explosions = []
let explosion
let blueExplosion
//scraps is an empty array for scrap
let scraps = []

  //Buttons
let mainMenuB
let tryAgainB

//Upgrades
let upgradeB1
let upgrade1Level = 0
let upgrade1Cost
let upgrade1OriCost = 100

let upgradeB2
let upgrade2Level = 0
let upgrade2Cost
let upgrade2OriCost = 500


function preload(){
  //Sounds and music
  soundFormats('mp3', 'ogg');
  backgroundMusic1 = loadSound('SoundsMusic/Videoclub Roi Intrumental FULL compressed.mp3')
  

  //Pictures and gifs
  startMenuSplashScreen = loadImage('Pictures/splashScreenTest.PNG')
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
  blueExplosion = loadImage('Pictures/blueExplosion.gif')
  scrapSkin = loadImage('Pictures/scrap.png')

  //Fonts
  starbornFont = loadFont('Fonts/Starborn.ttf')
}
function setup() {
  
  //Here we setup canvas and some basic things used in the game
  createCanvas(windowWidth, windowHeight);
  motherShipPos = windowHeight-80; //Mothership position
  textAlign(CENTER);

//////////////
  //Buttons
//Startmenu
startB = createButton('Play')
startB.position(width/2-buttonSizeW/2,height/2)
startB.size(buttonSizeW,40)
startB.mousePressed(startGame)
//Death Screen
tryAgainB = createButton('Try Again')
tryAgainB.position(width/2-buttonSizeW/2,height/2+height/20)
tryAgainB.size(buttonSizeW,40)
tryAgainB.mousePressed(startGame)
tryAgainB.hide()

mainMenuB = createButton('Main Menu')
mainMenuB.position(width/2-buttonSizeW/2,height/2+height/9)
mainMenuB.size(buttonSizeW,40)
mainMenuB.mousePressed(startMenu)
mainMenuB.hide()
//In game
upgradeB1 = createButton('Buy')
upgradeB1.position(width-menuSizeW+menuSizeW/6,280)
upgradeB1.size(buttonSizeW,40)
upgradeB1.style("background","red")
upgradeB1.mousePressed(UpgradeB1Clicked)
upgradeB1.hide()

upgradeB2 = createButton('Buy')
upgradeB2.position(width-menuSizeW+menuSizeW/6,500)
upgradeB2.size(buttonSizeW,40)
upgradeB2.style("background","red")
upgradeB2.mousePressed(UpgradeB2Clicked)
upgradeB2.hide()
//////////////

//Startmenu splashscreen here
startMenu()


////////////////////////////////////////////////////////
  /*Makes the player as a JSON objekt containing variables and functions, 
  that will show it and control it */
  player = {
    x:width/2,
    y:height -80,
    w:100,
    h:100,
    s:playerOriSpeed,
    show: function (){
      imageMode(CENTER)
       //This draws the smaller smaller ship if upgrade 2 level 2 is unlocked
       if(upgrade2Level >= 2){
        image(playerSkin,this.x-this.w,this.y+this.h/5,this.w/2+this.w/6,this.h/2+this.h/8)
        image(playerSkin,this.x+this.w,this.y+this.h/5,this.w/2+this.w/6,this.h/2+this.h/8)
      }
      //This draws the smaller ships if the upgrade is unlocked
      if(upgrade2Level >= 1){
        image(playerSkin,this.x-this.w/2,this.y+this.h/10,this.w/2+this.w/3,this.h/2+this.h/4)
        image(playerSkin,this.x+this.w/2,this.y+this.h/10,this.w/2+this.w/3,this.h/2+this.h/4)
      }
      ///This draws the main space ship
      image(playerSkin, this.x, this.y, this.w, this.h)
      
    },
    move: function(directionX, directionY){
      //This moves the player's x and y value
      this.x += directionX * this.s
      this.y += directionY * this.s
      //This constrains the player's x and y value to the screen
      if(upgrade2Level == 0){
      this.x = constrain(this.x, this.w/2, width - this.w/2-menuSizeW)
      this.y = constrain(this.y, this.h/2, height - this.h/2)
      }
      else if(upgrade2Level == 1){
        this.x = constrain(this.x, this.w/2+this.w/4+this.w/6/*i am using this cause its half of the to ships*/, width - this.w/2-this.w/4-this.w/6/*same here*/-menuSizeW)
        this.y = constrain(this.y, this.h/2, height - this.h/2)
      }
      else if(upgrade2Level == 2){
        this.x = constrain(this.x, this.w+this.w/3, width - this.w-this.w/3-menuSizeW)
        this.y = constrain(this.y, this.h/2, height - this.h/2)
      }
    },
    shoot: function(){
    if(bulletReady){
      // createBullet returnere et JSON object som er en kugle 
    let b1 = createBullet(this.x,this.y,this.h)
    //bullets er array med kugler
      bullets.push(b1)
      //This creates the bullet for the other 2 ships if its upgrade 1 and up
      if(upgrade2Level >= 1){
        let b2 = createBullet(this.x-this.w/2,this.y+this.h/10,this.h/2+this.h/4)
      bullets.push(b2)
      let b3 = createBullet(this.x+this.w/2,this.y+this.h/10,this.h/2+this.h/4)
      bullets.push(b3)
      }
      //This creates the bullet for the other 2 ships if its upgrade 2
      if(upgrade2Level == 2){
        let b4 = createBullet(this.x-this.w,this.y+this.h/5,this.h/2+this.h/8)
      bullets.push(b4)
      let b5 = createBullet(this.x+this.w,this.y+this.h/5,this.h/2+this.h/8)
      bullets.push(b5)
      }
    }
    }
  }

  ////////////////
frameRate(0)
}

/////////////////////////////////////////////////////////////////////

function startMenu(){
  frameRate(frames)
  //Showing all the right buttons and hiding all that doesn't need to be there
  startB.show()

  tryAgainB.hide()
  mainMenuB.hide()
  
  //Here we make the visuels
  imageMode(CENTER)
  image(startMenuSplashScreen,width/2,height/2,width,height)
  textSize(width/12)
  textFont(starbornFont)
  text("Space Defender",width/2,height/2-height/16)

  //Then we set it to frameRate 0 cause it doesn't need to run anything
  frameRate(0)
}

function startGame(){
  /*When we start the game we start by emptying all arrays, 
  if any games has been played before*/
  enemies.splice(0,enemies.length)
  bullets.splice(0,bullets.length)
  enemyBullets.splice(0,enemyBullets.length)
  explosions.splice(0,explosions.length)
  scraps.splice(0,scraps.lenght)

  

  //This places the player where it is suppose to start
  player.x = width/2
  player.y = height - 80

  //Then we tell the game, that it has started
  gameStarted = true;

  //Then we reset the stats for the in-game things
  bulletReady = true;
  enemySpawnTimer = 200;
  difficulty = 1;
  motherShipLife = motherShipStartLife;
  points = 0;
  scrap = 0;
  upgrade1Cost = upgrade1OriCost;
  upgrade1Level = 0;
  player.s = playerOriSpeed;
  upgrade2Cost = upgrade2OriCost;
  upgrade2Level = 0;

  //Here we play the music for the game when it begins 
  backgroundMusic1.play();

  
  frameRate(frames)
}

function gameOver(){
  frameRate(frames)
  backgroundMusic1.stop();
  //setting the gameStarted to false, since the game ended
gameStarted = false;
if(points > highscore){
highscore = points
}

/*Hiding all the buttons that isn't suppose to be used in the death screen
and showing all that does*/
upgradeB1.hide()
upgradeB2.hide()

tryAgainB.show()
mainMenuB.show()

//Setting up how the death screen looks
fill(0,0,0,120)
rect(0,0,width,height)
fill(0)
textSize(width/12)
textFont(starbornFont)
text("You died",width/2,height/2-height/20)
textSize(width/50)
text("Highscore: "+highscore,width/2,height/2)
text("Points: "+points,width/2,height/2+height/30)

frameRate(0)
}

/////
function draw() {

  /////////////////////////////////////////////////////
  //Here we start the game, but only run it if its supposed to be started
  if(gameStarted == true){
    /*Here we hide all the things from the start menu and show all
    that is needed when the game is started*/

    startB.hide()
    tryAgainB.hide()
    mainMenuB.hide()

    upgradeB1.show()
    upgradeB2.show()

/////////////////////////////////
//Music
/*When you open the sketch online, you can't play music instantly 
so this makes the player click to start it, and it start he the player does and if the music isn't playing*/
  if(!musicPlaying){
    musicPlaying = true
 backgroundMusic1.play()}

 //If the music is finished playing, it starts over 
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

  textFont(starbornFont)
  textSize(12)
  fill(255)
  text("Points: "+points,width-menuSizeW,70,menuSizeW,100)

  text("Scrap: "+scrap,width-menuSizeW,90,menuSizeW,100)

  text("Space Defender",width-menuSizeW,20,menuSizeW,100)

  text("Mothership life: "+motherShipLife,width-menuSizeW,120,menuSizeW,100)

  text("Difficulty: "+difficulty,width-menuSizeW,170,menuSizeW,100)
  //Upgrade 1
  text("Upgrade 1: +20% Speed",width-menuSizeW,220,menuSizeW,100)
  textSize(10)
  if(upgrade1Level < 3){ //This removes the text with how much it cost if the level hits 3, which is max
  text("(Scrap Cost: "+upgrade1Cost+")",width-menuSizeW,250,menuSizeW,100)
  }
  text("(Level: "+upgrade1Level+")",width-menuSizeW,275,menuSizeW,100)

  //Upgrade 2
  text("Upgrade 2: +2 Ships",width-menuSizeW,440,menuSizeW,100)
  textSize(10)
  if(upgrade2Level < 2){ //This removes the text with how much it cost if the level hits 3, which is max
  text("(Scrap Cost: "+upgrade2Cost+")",width-menuSizeW,470,menuSizeW,100)
  }
  text("(Level: "+upgrade2Level+")",width-menuSizeW,495,menuSizeW,100)

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
      createExplosion(currentEnemyBullet.x, currentEnemyBullet.y,1)
      motherShipLife-=enemyBulletDMG
      enemyBullets.splice(i,1)
    }
  }
  
  ////////////////////////
  //Enemies
  //Modulo means when there is 0 left of division, then the if statement is met
  //When a certern amount of time has passed, it spawns a new enemy
  if(frameCount % enemySpawnTimer == 0){
    //EnemyType chooses the type of enemy that is spawned
    let enemyType = round(random(1,3))
    let e = createEnemy(enemyType)
    enemies.push(e)
  }
  if(frameCount % 1000 == 0){
    if(difficulty < 10){
    enemySpawnTimer -= 15
    difficulty += 1
    }
  }
  
  /*Running all enemies in the enemies array through,
  and calling enemies show and move function for each enemy*/
  for(let i = 0; i < enemies.length; i++){
    enemies[i].show()
    enemies[i].move()
    if(enemies[i].a == true){
    enemies[i].shoot()
    }
    //This explode the enemy ship if it hits the motherShip and damages the mothership's life
    if(enemies[i].y > motherShipPos){
      createExplosion(enemies[i].x, enemies[i].y,1)
      //TAKES LIFE FROM MOTHERSHIP
      motherShipLife -= enemies[i].DMG

      //removes the enemy ship
      enemies.splice(i,1)
      
       
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
      
      //this gives the player the amount of points that the enemy is worth
      points += currentEnemy.p

      bullets.splice(i,1)
      enemies.splice(n,1)
      imageMode(CENTER)
      createExplosion(currentBullet.x, currentBullet.y,1)
      createScrap(currentBullet.x, currentBullet.y,currentEnemy.scrapWorth)
      
    }
  }
  
  //Here we look all the enemyBullets through, to check if any of the player bullets is hitting any of them, same concept as above with enemies
  for(let b = 0; b < enemyBullets.length; b++){
    let currentEnemyBullet = enemyBullets[b]
      if(bulletHitEBullet(currentBullet,currentEnemyBullet)){

        bullets.splice(i,1)
        enemyBullets.splice(b,1)
        imageMode(CENTER);
        createExplosion(currentBullet.x, currentBullet.y,2)

      }
  }
  
}


//////////////////////////////////////////////
  //Scrap here 
//This shows all the scrap that needs to be shown
for(let h = 0; h < scraps.length; h++){
  scraps[h].show()
}


////////////////////
//Here we
for(let h = 0; h < scraps.length; h++){
  let currentScrap = scraps[h]
  if(playerHitScrap(currentScrap)){
    scraps.splice(h,1)
    scrap += currentScrap.worth
  }
  if(currentScrap.endTime < millis()){
    scraps.splice(h,1)
  }
}
 //This makes the buy button green for all upgrades that can be bought after the latest collected scrap
 //This for upgrade button 1
 if(scrap >= upgrade1Cost && upgrade1Level < 3){
  upgradeB1.style("background","green")
}
else {upgradeB1.style("background","red")}
//This changed the label
if(upgrade1Level == 3)
{upgradeB1.html("Maxed")}
else
{upgradeB1.html("Buy")}//We use an else, so we don't need to change it back to buy if the game restarts

//This for upgrade button 2
if(scrap >= upgrade2Cost && upgrade2Level < 2){
  upgradeB2.style("background","green")
}
else {upgradeB2.style("background","red")}
//This changed the label
if(upgrade2Level == 2)
{upgradeB2.html("Maxed")}
else
{upgradeB2.html("Buy")}

//////////////////////////////////////////

//This runs the explosions array through, and shows all the explosions that needs to be on the screen
  for(let p = 0; p < explosions.length; p++){
    //laver en variable der referer til explosionen
    let e = explosions [p]

    //This makes the normal explosion if the sneder said the explosion type should be 1
    if(e.type == 1){
    image(explosion,e.x,e.y,100,100)
    //This removes the explosion after the end time
    if(e.end < millis()){
      explosions.splice(p,1)
    }

    }
    //This makes the blue explosion if the sneder said the explosion type should be 2
    else if(e.type == 2){
    image(blueExplosion,e.x,e.y,100,100)
    //This removes the explosion after the endBlue time
    if(e.endBlue < millis()){
      explosions.splice(p,1)
    }
    }
    //If the current explosion on the screen has been more time on the screen then the variable end says it can, then it removes the explosion
   
  }
}

if(motherShipLife <= 0){
  gameOver()
}

//Above is the game
//////////////////////////////////////////
//End of draw here
}





///////////////////////////////////////////////////////////////////////

//When this function is called, then it adds an explosion to the explosions array and places it where the caller ask it to / x,y
function createExplosion(x,y,explosionType){
  explosion.reset()
  blueExplosion.reset()
  let e = {
    x: x,
    y: y,
    type: explosionType,
    end: millis() + 1000,
    endBlue: millis() + 500
  }
  explosions.push(e)
}

//
function createScrap(x,y,worth){
  let s = {
    x: x,
    y: y,
    w: 40,
    h: 40,
    worth: worth,
    endTime: millis()+ scrapDespawnTime*1000,
    show: function(){
      imageMode(CENTER)
      image(scrapSkin, this.x, this.y, this.w, this.h)
    }
  }
  scraps.push(s)
}


//////////////////////////////////////////
//When this function is called, then it returns all infomation about the bullet and its functions to the caller
function createBullet(x,y,h){
  //return gives the object with the bullet back to, who called the function
  return {
    x: x,
    y: y-h/2,
    w: 40,
    h: 40,
    s: 11,
    show: function(){
      imageMode(CENTER)
      //This shows the bullet
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
    s: 5,
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
    s: 3,
    t: type,
    a: false,
    DMG: 0,
    p: 0,
    scrapWorth: 0,
    show: function(){
   imageMode(CENTER)
      if(this.t == 1){
        //Enemy type 1. Medium, Red
    image(enemySkin1, this.x, this.y, this.w, this.h)
        
        //points worth
        this.p = 2
        //Scrap worth
        this.scrapWorth = e1Worth
        //DMG
        this.DMG = enemyShip1DMG
      }
      else if(this.t == 2){
        //Enemy type 2. Small and fast
        image(enemySkin2, this.x, this.y, this.w, this.h)
        this.w = 35
        this.h = 50
        this.s = 4
        this.DMG = enemyShip2DMG
        this.scrapWorth = e2Worth
        //points worth
        this.p = 1
      }
      else if(this.t == 3){
        //Enemy type 2. Medium and has ability to shoot
        image(enemySkin3, this.x, this.y, this.w, this.h)
        //this.a gives the enemy the ability to shoot
        this.a = true
        this.w = 80
        this.h = 80
        this.DMG = enemyShip3DMG
        this.scrapWorth = e3Worth
        
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

function playerHitScrap(scrapHere){
  //This assign where all the scrap sides is
  let scrapLeft = scrapHere.x - scrapHere.w/2
  let scrapRight = scrapHere.x + scrapHere.w/2
  let scrapTop = scrapHere.y - scrapHere.h/2
  let scrapBot = scrapHere.y + scrapHere.h/2
  
  //This makes variables for all the players sides
  let playerLeft
  let playerRight
  let playerTop
  let playerBot

  //This assign all the players sides, based on which upgrade2 level it is. Upgrade 2 makes it bigger
  if(upgrade2Level == 0){
  playerLeft = player.x - player.w/2
  playerRight = player.x + player.w/2
  playerTop = player.y - player.h/2
  playerBot = player.y + player.h/2}
  else if(upgrade2Level == 1){
  playerLeft = player.x - player.w-player.w/3
  playerRight = player.x + player.w+player.w/3
  playerTop = player.y - player.h/2
  playerBot = player.y + player.h/2}
  else if(upgrade2Level == 2){
    playerLeft = player.x - player.w-player.w/6
    playerRight = player.x + player.w+player.w/6
    playerTop = player.y - player.h/2
    playerBot = player.y + player.h/2}

  //Then we use the exclusion method
  let collision = true
  if(//Hvis nogen af dem her er sande så rør kuglen ikke en enemy
  playerRight < scrapLeft || 
  playerLeft > scrapRight || 
  playerTop > scrapBot || 
  playerBot < scrapTop
  ){
     collision = false
  }

  //Retuns boolean to tell if they hit
  return collision
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
  //Retuns boolean to tell if they hit
  return collision
}

function bulletHitEBullet(bullet,enemyBullet){
   /*Vi opfatter fjernder og kugler som firkanter
  derfor gemmer vi deres sider's x og y værdier i nogle variabler*/
  let EBLeft = enemyBullet.x - enemyBullet.w/2
  let EBRight = enemyBullet.x + enemyBullet.w/2
  let EBTop = enemyBullet.y - enemyBullet.h/2
  let EBBot = enemyBullet.y + enemyBullet.h/2
  
  let bulletLeft = bullet.x - bullet.w/2
  let bulletRight = bullet.x + bullet.w/2
  let bulletTop = bullet.y - bullet.h/2
  let bulletBot = bullet.y + bullet.h/2
  
  //Nu bruger vi udelukkelsemetoden
  let collision = true
  if(//Hvis nogen af dem her er sande så rør kuglen ikke en enemy
  bulletRight < EBLeft || 
  bulletLeft > EBRight || 
  bulletTop > EBBot || 
  bulletBot < EBTop
  ){
     collision = false
  }
  //Retuns boolean to tell if they hit
  return collision
}

function keyPressed(){
  if(key == " "){
    //kalder på shoot funktion inde fra player JSON objektet 
    player.shoot()
  }
}

function UpgradeB1Clicked(){
  if(scrap >= upgrade1Cost && upgrade1Level < 3){
  //This adds 20% of the original player speed to the player speed
  player.s += playerOriSpeed*0.2
  //This adds an level to the upgrade, removes the scrap used and sets up the scrap cost
  upgrade1Level+=1
  scrap -= upgrade1Cost
  upgrade1Cost += upgrade1OriCost
  }
}

function UpgradeB2Clicked(){
  if(scrap >= upgrade2Cost && upgrade2Level < 2){

    upgrade2Level+=1
    scrap -= upgrade2Cost
    upgrade2Cost += upgrade2OriCost
    }
}