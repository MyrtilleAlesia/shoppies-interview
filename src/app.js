//Search for the movie
//Display the movie results
//Create a list for movies, and add the movies to the nominations list(create an add button)
//View the nominations list
//Create a remove button to remove nominee from the nominations list
//Remove a nominee from the nominations list
//If a search result has already beeen nominated, disable its nominate button


let moviesList = [];





//Search for the movie
function search(event){
    // event.preventDefault();
    // // let moviesList = [];
    // let apiKey = "609ce333";
    // let searchInput = document.querySelector("#search-input").value;
    // // let apiUrl = 'http://www.omdbapi.com/?t=${searchInput}&apikey=${apiKey}';
    // let apiUrl = "http://www.omdbapi.com/?t=" + searchInput + "&apikey=" + apiKey;
    // axios.get(apiUrl).then(showMovieTitle);
    // console.log("xxxxxxxxxxxxxxx",apiUrl);
    // let fn1 = fetch(apiUrl)
    // .then((res) => res.json())
    // .then((data) => data.Title)
    // console.log("dddddddddddd",fn1);
    console.log("hhhhhh")

    //showMovieTitle(fn1)

   
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
// We need to add the movie result to nominations list
// We need to remove a nomiee from the nominations list



//Show the search result
function showMovieTitle(response){
    let movieTitle = document.querySelector(".movie-title");
    movieTitle.innerHTML = response;
    // console.log(response.data.Title);

    //we need to add the movie results to the results list
}


function addMovie(){

}


// //Add the movie to the Nominations List
// function addNominations(){

// }