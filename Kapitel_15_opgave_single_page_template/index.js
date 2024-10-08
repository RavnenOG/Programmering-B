let query, button

function setup(){
    button = select('#searchButton')
    button.mousePressed(
        function(){
            query = select('#query').value()
            hentTopPosts(query)
        }
    )
}

async function hentTopPosts(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=6oGSDDv5eiCJ5JLHhtkyQuC6MiVWc3oB&q=${query}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        // Bruger 'fetch' til at hente data fra Reddit API'et for den angivne 'subreddit'.
        // 'await' venter på, at 'fetch' anmodningen fuldføres.

        const data = await response.json();
        // Parser responsen til JSON-format.
        // 'await' venter på, at parsing er færdig.

        const posts = data.data;
        // Ekstraherer arrayet af indlæg fra den modtagne data.

        console.log(posts)
        console.log(`Search results from ${query}:`);
        for (const post of posts) {
            createPost(post);
            // Itererer over hvert indlæg og kalder 'createPost' for at oprette det på siden.
        }
    } catch (fejl) {
        console.error('Der opstod en fejl:', fejl);
        // Håndterer eventuelle fejl, der opstår under hentningen af data.
    }
}

function createPost(post){
    console.log(post);
    // Logger hele indlægsobjektet til konsollen for debugging.

    let htmlDiv = select('#page1 .right');
    // Vælger HTML-elementet, hvor indlægget skal indsættes (den højre kolonne).

    let container = createElement('div').addClass('post');
    // Opretter et nyt 'div' element og tilføjer klassen 'post' for styling.

    container.style('background-image', `url(${post.images.original.url})`);

    let title = createElement('h2', post.title);

    container.child(title);

    htmlDiv.child(container);
} 
