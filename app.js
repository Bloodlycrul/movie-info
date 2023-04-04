// Select the the element using DOM models
const container = document.getElementById("main-conteiner");
const APIKEY = "http://www.omdbapi.com/?apikey=1cc7fdf0&t=";
let input = document.getElementById("search");
const button = document.getElementById("btn");
const title = document.getElementById("Title");
const plot = document.getElementById("plot");
const image = document.getElementById("img");
const movieDetails = document.getElementById("movie-details");
const body = document.querySelector("body");
const language = document.getElementById('Language')
const div23 = document.getElementById('div23');
const section = document.getElementById('recent-movie-section');
const actors = document.getElementById('Actors')
const awards = document.getElementById('Awards')
const director = document.getElementById('Director');
const imdbRating = document.getElementById('imdbrating1');
const boxOffice = document.getElementById('box-office')





function movieFetch(){

  if(input.value === ""){
    alert('Please Enter the movie Name');
  }else {
     // Api + movie name;
  let movieTitle = APIKEY + input.value;

  // Fetching the Details using the fetch promise

  fetch(movieTitle)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      // Adding the display class to the container to hide the container 
      container.classList.add("display");
      console.log(data);

      // Using Data to innervalue 
      title.textContent = data.Title;
      plot.textContent = data.Plot;
      language.textContent = data.Language
      image.src = data.Poster;
      actors.textContent =  "Actors : " +data.Actors
      awards.textContent = "Awards : " + data.Awards
      director.textContent = "Director : " + data.Director
      imdbRating.textContent = "IMBD RATING : " + data.imdbRating
      boxOffice.textContent = "Earning : " + data.BoxOffice


      // Removing the movieDetails to display all the movie details
      movieDetails.classList.remove('display')
      input.value = "";


      // Creating a div and display the recent searched Item;
      let div1 = document.createElement('div');
      let img = document.createElement('img')
      div1.classList.add('container2');
      div23.appendChild(div1);
      div1.appendChild(img)
      img.src = data.Poster

      // Removing the display class for the recent view and also show the recent viewed Movies
      section.classList.remove('display')
    });
  }

 
}

input.addEventListener('keypress', (event)=>{
   if(event.key === "Enter"){
    movieFetch();
  }
});


// Click Event to fetch the movie details

button.addEventListener('click', ()=>{
  movieFetch();
})
