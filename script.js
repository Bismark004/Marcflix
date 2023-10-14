
function fetchMovies() {
  let search = document.getElementById('search').value;
  let movieList = document.getElementById('movie-grid');
  let apiKey = 'a0e00f9'; // Replace with your actual API key
  let url = `http://www.omdbapi.com/i=tt3896198&apikey=${apiKey}&s=${search}`;

  // Clear the existing movie list
  movieList.innerHTML = '';

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.Search) {
        data.Search.forEach(movie => {
          let container = document.createElement('div');
          container.classList.add('container-2');
          container.dataset.movieId = movie.imdbID;

          container.innerHTML = `
            <img 
              alt='${movie.Title}'
              class='image'
              src='${movie.Poster}'>
            <div class='title'>${movie.Title}</div>
          `;

          // Append the container to the movie list
          movieList.appendChild(container);
        });
      } else {
        movieList.innerHTML = 'No results found.';
      }
    })
    .catch(error => {
      console.log('Error fetching movie data', error);
    });
}
