
function setup(){
    select('#searchButton').mousePressed(function(){
        subreddit = select('#searchInput').value()
        hentTopPosts(subreddit);
    })
}


async function hentTopPosts(subreddit) {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=8`);
        
        const jsonData = await response.json();

        const posts = jsonData.data.children;

        for (const p of posts) {
            createPost(p.data);
        }
        select('#preTekst').remove()

    } catch (error) {
        //Håndterer hvis der kommer fejl som opstår under hentningen af data.
        console.error('Der opstod en fejl: ', error);
        select('#page1 . right'.html('Der fidnes ikke en subreddit med det navn'))
    }
}

function createPost(post){
    console.log(post);

    //Adder en div til idet "page1"'s class som hedder right
    let newDiv = select('#page1 .right');
    
    //Laver en div og giver den en class som hedder post
    let container = createElement('div').addClass('post');
    
    container.style('background-image', `url(${post.thumbnail})`);
    
    //Laver et h2 Element med postens title
    let title = createElement('h2', post.title);

    //Laver et h3 Element med postens Up votes
    let upVotes = createElement('h3', "Up votes: "+post.ups).addClass('upVotes')

    //Laver en tekst/p med postens forfatter
    let author = createElement('p', post.author).addClass('author');

    //Laver et link i posten på nettet
    let link = createA(post.url,'Læs mere..').addClass('link')
    

    //Her putter vi alle vores forskellige dataer fra json'et ind i containeren
    container.child(title);
    container.child(author);
    container.child(upVotes);
    
    //Lægger linket ind i containeren
    container.child(link)
    
    //Her putter vi containeren ind i diven som er under right i idet page1
    newDiv.child(container);
    
} 
