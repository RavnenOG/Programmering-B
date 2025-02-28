class Firkant{

constructor(sentColor){
    this.div = document.createElement('div');
    this.div.className = 'firkant'; // Add a class to the div
    document.querySelector('.squares').appendChild(this.div); // Append the div to the squares class

        this.setColor(sentColor); // Run setColor with the sentColor
    
    //This runs setColor when the div is clicked
    this.div.addEventListener('click', () => {
        const newColor = getColorFromDropdown();
        this.setColor(newColor);
    });

    this.removeButton = document.createElement('button');
    this.removeButton.className = 'removeButton'; // Add a class to the button
    this.removeButton.innerHTML = 'Remove'; // Writes Remove on the button
    this.div.appendChild(this.removeButton);
    this.removeButton.addEventListener('click', () => {this.div.remove(); console.log(this.removeButton+"clicked")}); // Remove the div when the button is clicked
}

setColor(sentColor){
    console.log(sentColor+". This has been sent from classes. setColor");
    let color
    if(sentColor === 'random') {
        color = `rgb(${Math.floor(random(0,255))}, ${Math.floor(random(0,255))}, ${Math.floor(random(0,255))})`;
    } else {
        color = sentColor;
    }
    console.log(color+". This has been sent from classes");
    this.div.style.backgroundColor = color;
    console.log(this.div + " Has runned setColor. This has been sent from classes");
}

}   