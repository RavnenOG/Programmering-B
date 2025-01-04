console.log('OOP bliver set')


class DataFetcher {
  constructor(apiURL) {
    this.apiURL = apiURL
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiURL);
      this.data = await response.json();
      console.log('Fetched data:', this.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  displayData(container) {
    //checker om dataen den får er overhovet et array ellers kan den ikke bruge forEach. (Havde et problem med det om nu lader jeg den stå fordi det er godt og checke)
    if (!Array.isArray(this.data)) {
      console.log('Dataen er ikke en array eller er undefined:', this.data);
      return;
    }

    //styler hvordan kortene er placeret
    container.style(
      `
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      padding: 10px;
      place-items: center;
      `
    )

    this.data.forEach(ting => {
      let kort = createDiv();
      kort.style(
      `
      border: 2px solid black;
      margin: 10px;
      padding: 10px;
      grid-template-columns: 2fr;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      font-size: 25px;
      background-color: orange;

      `
      )
      kort.mouseOver(() => {
        kort.style(
          `
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          `
        )
      
      });
      kort.mouseOut(() => {
        kort.style(
          `
          transform: scale(1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          `
        )
      })

    // laver div for navn 
    let nameDiv = createDiv(`Name: ${ting.name}`);
    nameDiv.style(
      `
      font-weight: bold;
      font-size: 16px;
      `
    )

     // laver en div for emailen
     let emailDiv = createDiv(`Email: ${ting.email}`);
     emailDiv.style(
      `
      color:#555;
      font-size: 14px
      `
    )
    // laver en div for emailen
    let koordinaterDiv = createDiv(`Koordinator: ${ting.address.geo.lat}, ${ting.address.geo.lng}`);
    koordinaterDiv.style(
     `
     color:#555;
     font-size: 14px
     `
   )
 
     // sætter divene ind på kortet
     kort.child(nameDiv);
     kort.child(emailDiv);
     kort.child(koordinaterDiv)
 

      container.child(kort);
    });
  }
}
