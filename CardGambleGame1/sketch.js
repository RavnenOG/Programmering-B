let chips
let bet
let profit

let addChipsButton
let betSlider
let rollButton

let typeSelect, colorSelect, numberInput
let lastCard = null; // Store the last rolled card

//Images
let backgroundImage;

function preload() {
  // Load background image
  backgroundImage = loadImage('Images/back1.jpg'); // Replace with your image URL
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  chips = 100 // Starting chips
  bet = 0
  profit = 1

  addChipsButton = createButton('Add Chips');
  addChipsButton.position(20, 20);
  addChipsButton.mousePressed(addChips);
  addChipsButton.hide()

  betSlider = createSlider(0, chips, bet, 1);
  betSlider.position(360, 60);
  betSlider.style('width', '200px');
  betSlider.input(updateBet);

  // Bet on type (suit)
  typeSelect = createSelect();
  typeSelect.position(20, 100);
  typeSelect.option('Any');
  typeSelect.option('Spades');
  typeSelect.option('Hearts');
  typeSelect.option('Diamonds');
  typeSelect.option('Clubs');
  typeSelect.option('Joker');

  // Bet on color
  colorSelect = createSelect();
  colorSelect.position(20, 140);
  colorSelect.option('Any');
  colorSelect.option('Red');
  colorSelect.option('Black');

  // Bet on card number
  numberInput = createInput('');
  numberInput.position(20, 180);
  numberInput.attribute('placeholder', 'Card Number (1-13)');

  // Add Roll button
  rollButton = createButton('Roll Card');
  rollButton.position(20, 60);
  rollButton.mousePressed(rollCard);
}

function draw() {
  image(backgroundImage, 0, 0, width, height); // Draw background image
  
  // Update slider max to match chips
  betSlider.attribute('max', chips);

  // Calculate profit multiplier based on bet specificity
  let betType = typeSelect.value();
  let betColor = colorSelect.value();
  let betNumber = numberInput.value();

  updateProfitMultiplier(betType, betColor, betNumber);
  updateBetOptions(betType, betColor, betNumber);

  // Helper function to draw outlined text
  function drawOutlinedText(txt, x, y, txtSize, txtFill = 0, outlineFill = 255, outlineWeight = 3) {
    textSize(txtSize);
    stroke(outlineFill);
    strokeWeight(outlineWeight);
    fill(txtFill);
    text(txt, x, y);
    noStroke();
  }

  textAlign(LEFT, TOP);
  drawOutlinedText("Chips: " + chips, 250, 20, 32);
  drawOutlinedText("Bet: " + bet, 250, 60, 24);
  drawOutlinedText("Profit: " + profit.toFixed(2) + "x", 250, 100, 24);

  drawOutlinedText("Bet on Type:", 20, 85, 16);
  drawOutlinedText("Bet on Color:", 20, 125, 16);
  drawOutlinedText("Bet on Number:", 20, 165, 16);

  if (lastCard) {
    drawOutlinedText("Rolled: " + lastCard.name, 250, 150, 22);

    if (lastBetResult === "win") {
      drawOutlinedText("You WON the bet!", 250, 190, 20, color(0, 255, 0), 0, 4);
    } else if (lastBetResult === "lose") {
      drawOutlinedText("You LOST the bet.", 250, 190, 20, color(255, 0, 0), 0, 4);
    }
  }
}
function updateBetOptions(betType, betColor, betNumber) {
  // Disable number input if Joker is selected
  if (betType == 'Joker') {
    numberInput.value(''); // Set number input to ''
    numberInput.attribute('disabled', ''); // Disable number input
  } else {
    numberInput.removeAttribute('disabled'); // Enable number input
  }

  // Only set color and disable if switching to a forced suit
  if (betType === 'Hearts' || betType === 'Diamonds') {
    if (colorSelect.value() !== 'Red') colorSelect.value('Red');
    colorSelect.attribute('disabled', '');
  }
  else if (betType === 'Clubs' || betType === 'Spades') {
    if (colorSelect.value() !== 'Black') colorSelect.value('Black');
    colorSelect.attribute('disabled', '');
  }
  // If suit is Any or Joker, enable colorSelect but DO NOT set value
  else {
    colorSelect.removeAttribute('disabled');
  }

  // Set background color based on betColor
  if(betColor === 'Red'){
    colorSelect.style('background-color', 'red');
  } else if(betColor === 'Black'){
    colorSelect.style('background-color', 'black');
    colorSelect.style('color', 'white'); // Ensure text is readable
  }
  else {
    colorSelect.style('background-color', 'white'); // Default background
    colorSelect.style('color', 'black'); // Default text color
  }
}

// Update profit multiplier based on bet specificity
function updateProfitMultiplier(betType, betColor, betNumber) {
  // If betting on all three (not "Any" and number filled), highest profit
  if (
    betType !== 'Any' &&
    betColor !== 'Any' &&
    betNumber !== ''
  ) {
    profit = 54; // Only one card matches out of 54
  } else if (
    betType !== 'Any' &&
    betColor !== 'Any'
  ) {
    // Betting on both type and color (but not number)
    // For Jokers, only 1 card matches, for others, 13 per suit
    if (betType === 'Joker') {
      profit = 54; // 2 jokers, but only one matches color
    } else {
      profit = 54 / 13; // 13 cards per suit and color
    }
  } else if (
    betType !== 'Any' &&
    betNumber !== ''
  ) {
    // Betting on type and number
      profit = 54; // Only one card of each type and number
    
  } else if (
    betColor !== 'Any' &&
    betNumber !== ''
  ) {
    // Betting on color and number
    profit = 54 / 2; // Two cards of each number per color (e.g., 2 red 7s)
  } else if (betType !== 'Any') {
    // Only type
    if (betType === 'Joker') {
      profit = 54 / 2; // 2 jokers
    } else {
      profit = 54 / 13; // 13 cards per suit
    }
  } else if (betColor !== 'Any') {
    // Only color
    profit = 54 / 27; // 27 red, 27 black
  } else if (betNumber !== '') {
    // Only number
    profit = 54 / 4; // 4 cards of each number (one per suit)
  } else {
    profit = 1; // No bet, or "Any" for all
  }
}

function addChips() {
  chips += 10; // Add 10 chips each time the button is pressed
  console.log("Chips added. Total: " + chips);
}

function updateBet() {
  bet = betSlider.value();
}

// Roll a random card and check bet
function rollCard() {
  

  // Get current bet selections
  let betType = typeSelect.value();
  let betColor = colorSelect.value();
  let betNumber = numberInput.value();

  // Validate bet number
  let validNumber = true;
  if (betNumber !== '') {
    if (betType === 'Joker') {
      // Only 0 is valid for Joker
      if (betNumber !== '0') validNumber = false;
    } else {
      // Only 1-13 are valid for non-Joker
      let num = Number(betNumber);
      if (isNaN(num) || num < 1 || num > 13) validNumber = false;
    }
  }

  if (!validNumber) {
    alert("Please enter a valid card number: 1-13");
    return;
  }

  // Assumes 'cards' object is available in global scope
  const cardKeys = Object.keys(cards);
  const randomKey = cardKeys[Math.floor(Math.random() * cardKeys.length)];
  lastCard = cards[randomKey];
  console.log("Rolled card:", lastCard.name);

  // Determine win or lose
  let win = true;
  if (betType !== 'Any' && lastCard.type !== betType) win = false;
  if (betColor !== 'Any' && lastCard.color !== betColor) win = false;
  if (betNumber !== '' && Number(betNumber) !== lastCard.value) win = false;

  // Only allow betting if bet > 0 and enough chips
  if (bet > 0 && chips >= bet) {
    if (win) {
      let winnings = Math.floor(bet * profit);
      chips += winnings;
      lastBetResult = "win";
    } else {
      chips -= bet;
      if (chips < 0) chips = 0;
      if (bet > chips) {
        bet = chips;
        betSlider.value(bet);
      }
      lastBetResult = "lose";
    }
  } else {
    lastBetResult = null; // No bet placed
  }
}