import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  // Get the navigation function from react-router-dom
  const navigate = useNavigate();
  
  return (
    // Create a clickable movie card that navigates to the movie's details page
    <div className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
