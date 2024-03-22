import React from 'react'
import './movies.css'

function Movies({movies}) {
    const displayMovies = movies.map((movie) => {
        return <div>
            <img src={movie.Poster} alt='movie'/>
        </div>
    });
    return (
        <>
        <div className='movies'>
          {displayMovies}
        </div>
       
        </>
    )
}
export default Movies;