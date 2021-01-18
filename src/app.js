// //Search for the movie
// //Display the movie results
// //Create a list for movies, and add the movies to the nominations list(create an add button)
// //View the nominations list
// //Create a remove button to remove nominee from the nominations list
// //Remove a nominee from the nominations list
// //If a search result has already beeen nominated, disable its nominate button


const test = (event) => {
   // console.log(event)
    let apiKey = "609ce333";
    let searchInput = document.querySelector("#search-input").value;
     // let apiUrl = 'http://www.omdbapi.com/?t=${searchInput}&apikey=${apiKey}';
    let apiUrl = "http://www.omdbapi.com/?s=" + searchInput + "&apikey=" + apiKey;
    //console.log(apiUrl)
    let fn1 = fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        const response = data.Search
        const [span] = document.getElementsByClassName('movie-title')
        console.log(span)
        span.textContent = searchInput;
        const [ulReference] = document.getElementsByClassName('movie-list-by-search')
        response.forEach(element => {
        const title = element.Title;
        const li = document.createElement('li');
        li.textContent = title;

        // add a button // add a sttle so the button willb gv 
        const button = document.createElement('button');
        button.textContent = 'nominate';

        ulReference.appendChild(li);

        });
    })
console.log("dddddddddddd",fn1);


return false;
}