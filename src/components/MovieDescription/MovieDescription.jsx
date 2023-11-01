import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton/BackButton.jsx';
import './MovieDescription.css';

const MovieDescription = ({ data }) => {
  // Get the film ID from the URL using useParams hook
  let filmId = useParams();
  
  // Find the movie data that matches the given ID
  const film = data.find(movie => movie.id === Number(filmId.id));
  
  return (
    <div className="movie-card">
      {/* Render a back button component */}
      <BackButton className="BackButton" />
      
      {/* Display movie details */}
      <img src={film.posterURL} alt={film.title} />
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p>Rating: {film.rating}</p>
      
      {/* Embed the movie trailer using an iframe */}
      <iframe
        width="560"
        height="315"
        src={film.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDescription;
