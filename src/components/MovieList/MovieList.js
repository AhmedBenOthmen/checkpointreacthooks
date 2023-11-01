import React from 'react';
import MovieCard from '../MovieCard/MovieCard.js';
import './MovieList.css'
import { Outlet } from 'react-router-dom';


// MovieList component that maps the movies into the MovieCard component
const MovieList = ({ movies }) => {
  

  return (
    <div className="movie-list">
      
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
      
    </div>
  );
};

export default MovieList;
