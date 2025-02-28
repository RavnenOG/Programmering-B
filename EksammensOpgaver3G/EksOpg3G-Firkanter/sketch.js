let squareColor = 'orange';
let firkanter = [];

function setup(){
  squareColor = getColorFromDropdown()
  console.log('setup says: squareColor:', squareColor);
  let fkant = new Firkant(squareColor);
  firkanter.push(fkant);
}

function handleDropdown() {
  squareColor = getColorFromDropdown()
  console.log('squareColor:', squareColor);
}

function addSquare() {
  const squaresContainer = document.querySelector('.squares');
  const squareWidth = 100 + 2 * 2 + 10 * 2; // width + border + margin
  const squareHeight = 100 + 2 * 2 + 10 * 2; // height + border + margin
  const containerWidth = squaresContainer.clientWidth;
  const containerHeight = squaresContainer.clientHeight;
  const maxSquares = Math.floor(containerWidth / squareWidth) * Math.floor(containerHeight / squareHeight);

  if (squaresContainer.children.length < maxSquares) {
    const color = getColorFromDropdown();
    console.log('Adding square with color:', color);
    new Firkant(color);
  } else {
    alert('Maximum number of squares reached.');
  }
}
function getColorFromDropdown() {
  const selectedOption = document.getElementById('dropdownMenu').value;
  switch (selectedOption) {
    case 'option1':
      return 'random';
    case 'option2':
      return 'green';
    case 'option3':
      return 'purple';
    case 'option4':
      return 'red';
    case 'option5':
      return 'blue';
    default:
      return 'random';
  }
}