import React from 'react';
import CardMovie from './CardMovie'
import {Link} from 'react-router-dom';
import './MovieList.css';




function MovieList({ movies }) {
  return (
    <div className='MovieList'>
      {movies.map(movie => (
        <Link to={'/movie/' + movie.id} key={movie.id}>
          <CardMovie movie={movie} key={movie.id} />
        </Link>

      ))}
    </div>
  );
}

export default MovieList;