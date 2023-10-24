import './App.css';
import React, {useState} from 'react';
import MovieList from './components/MovieList/MovieList.js';
import Filter from './components/Filter/Filter.js';
import MoviesData from './components/MoviesData/Moviesdata.js';
import AddMovie from './components/AddMovie/AddMovie.js';

function App() {
  // Use the imported MoviesData
  const [movies, setMovies] = useState(MoviesData); 

  //useState Hook for the filtered list of movies
  const [filteredMovies, setFilteredMovies] = useState(movies); 

  //filter by title function
  const filterByTitle = (title) => {
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    setFilteredMovies(filtered);
  }

  //filter by rating function
  const filterByRating = (rating) => {
    const filtered = movies.filter(movie => movie.rating >= parseFloat(rating));
    setFilteredMovies(filtered);
  }

  const addMovie = (newMovie) => {
    // Create a copy of the current movies array and add the new movie
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    // Update the filteredMovies
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="App">
      <h1>Movie Library</h1>
      {/* Filter component */}
      <Filter filterTitle={filterByTitle} filterRating={filterByRating} />
      {/* MovieList component */}
      <MovieList movies={filteredMovies} />
      {/* AddMovie Component */}
      <AddMovie AddMovie={addMovie} />
    </div>
  );
}

export default App;