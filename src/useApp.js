import  {useState} from 'react';
import MoviesData from './components/MoviesData/Moviesdata.js';

function useApp () {

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

 return { addMovie , filterByRating , filterByTitle , filteredMovies ,movies }

}

export default useApp