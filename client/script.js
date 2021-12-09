// $("#form").submit(function (e) {
//     e.preventDefault();

//     var query = $("#search").val()
//     let result = ''
//     var API_KEY = '369c85ecb37501113ce70023b03d2b4a'
//     var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
//     console.log(url)
    
//     $.get(url, function (data) {
//         $("#result").html('');
//         console.log(data);
//         data.organic_results.forEach(res => {
            
//             result = `<h2>${res.title}</h2><br>
//             <a target="_blank" href="${res.url}">${res.url}</a>
//             <p>${res.snippet}</p>`;


//             // This limits the amount of searches to 10 links
//             let counter = 0;
//             counter++;
//             if(counter <= 10){
//             $("#result").append(result);
//             };
//         });

//         // This updates the list randomly, currently doesn't take you to a random website
//         data.organic_results.push(res => {
//             arr = [];
//             arr = arr.push(`${res.url}`)
//             console.log(arr)
//             var randomSite = arr[Math.floor(Math.random() * arr.length)];
    
//             $('#random').click(function() {
//                     window.location.replace(randomSite);
//                     return false;
//                 });
//         })
        
//     });
// });

const endPnt = "https://www.googleapis.com/customsearch/v1?";
const userKey = 'AIzaSyDvLratthKzg0ybEGCw9Z3cowIzGTu4g_Y';
const engine = '84ec0c213f611877d';

const searchButton = document.getElementById('search_btn');
const randomButton = document.getElementById('random');
const queryText = document.getElementById('search');


searchButton.addEventListener("click", submitSearch);
randomButton.addEventListener("click", openRandom);


function submitSearch(e) {
    e.preventDefault();

    const query = queryText.value;
    console.log(query);

    let  url = `${endPnt}key=${userKey}&cx=${engine}&q=${query}`;
    console.log(url);

    fetch(url)
        .then(r => r.json())
        .then((responseJson) => {appendLinks(responseJson)})
        .catch(console.warn)
};

function appendLinks(links){
    const linksList = document.querySelector("ul")
    console.log("appendLink" + links.items[1].title);
    // clear previous results
    while (linksList.hasChildNodes()) {  
        linksList.removeChild(linksList.firstChild);
      }

    links.items.forEach(appendLink);
    linksList.scrollIntoView({
        behavior: 'smooth'
      });
};

function appendLink(linkData){
    const linksList = document.querySelector('ul');
    
    // title
    const newLi = document.createElement('li');
    newLi.textContent = `${linkData.title}`
    // newLi.classList.add = ""
    linksList.appendChild(newLi);
    // snippet
    const newP = document.createElement('p');
    newP.textContent = linkData.snippet;
    linksList.appendChild(newP);

    // link
    const a = document.createElement('a');
    // Create the text node for anchor element.
    let link = document.createTextNode(`${linkData.link}`);
    // Append the text node to anchor element.
    a.appendChild(link); 
    // Set the title.
    a.title = linkData.title;  
    // Set the href property.
    a.href = linkData.link; 
    // Append the anchor element to the body.
    linksList.appendChild(a); 
};

function openRandom(e) {
    e.preventDefault();

    const query = queryText.value;
    console.log("openRandom "+query);

    let  url = `${endPnt}key=${userKey}&cx=${engine}&q=${query}`;
    console.log(url);

    fetch(url)
        .then(r => r.json())
        // .then((responseJson) => {console.log(responseJson)})
        .then((responseJson) => {openRandomLink(responseJson)})
        .catch(console.warn)
};

function openRandomLink(links){
    randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    console.log("randomLink " + links.items[randomNumber].link);
    randomLink = links.items[randomNumber].link;
    window.open(randomLink, '_blank');
    // clear previous results
    const linksList = document.querySelector("ul")
    console.log("appendLink" + links.items[1].title);
    
    while (linksList.hasChildNodes()) {  
        linksList.removeChild(linksList.firstChild);
      }
    
};
