function setup(){
    hentTopPosts("Marvel");
    // Kalder funktionen 'hentTopPosts' med argumentet "cats" ved programmets start.
}

async function hentTopPosts(subreddit) {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=8`);
        
        const jsonData = await response.json();

        const posts = jsonData.data.children;

        for (const p of posts) {
            createPost(p.data);
        }

    } catch (fejl) {
        console.error('Der opstod en fejl:', fejl);
        // Håndterer eventuelle fejl, der opstår under hentningen af data.
    }
}

function createPost(post){
    console.log(post);
    

    //Adder en div til idet "page1"'s class som hedder right
    let newDiv = select('#page1 .right');
    
    //Laver en div og giver den en class som hedder post
    let container = createElement('div').addClass('post');
    
    container.style('background-image', `url(${post.thumbnail})`);
    

    let title = createElement('h2', post.title);

    let upVotes = createElement('h3', "Up votes: "+post.ups).addClass('upVotes')

    let author = createElement('p', post.author).addClass('author');
    

    //Her putter vi alle vores forskellige dataer fra json'et ind i containeren
    container.child(title);
    container.child(author);
    container.child(upVotes);
    
    //Her putter vi containeren ind i diven som er under right i idet page1
    newDiv.child(container);
    
} 
