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
    let apiUrl = "https://www.omdbapi.com/?s=" + searchInput + "&apikey=" + apiKey;
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
        button.textContent = 'Nominate';

        //const body = document.getElementsByTagName('body')[0];

        ulReference.appendChild(li).appendChild( button);

        //Adding nominated movies to Nominations list
        const [nominateReference] = document.getElementsByClassName('nomination-list-by-search');
        response.forEach(element =>{
        const movie = document.createElement('li');
        movie.innerHTML = button.addEventListener("click", fn1)
        const nominationButton = document.createElement('button');
        nominationButton.textContent = 'Remove';
        nominateReference.appendChild(movie).appendChild(nominationButton);
        
    })



       // button.addEventListener("click", fn1)

    });


    })
// console.log("dddddddddddd",fn1);


return false;
}


