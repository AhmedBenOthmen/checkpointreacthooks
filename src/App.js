import "./App.css";
import MovieList from "./components/MovieList/MovieList.js";
import Filter from "./components/Filter/Filter.js";
import AddMovie from "./components/AddMovie/AddMovie.js";
import useApp from "./useApp.js";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.jsx";
import { useLocation } from "react-router-dom";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import MoviesData from "./components/MoviesData/Moviesdata";

function App() {
  // Initialize custom hooks to manage movie-related functionality
  const {
    addMovie,          // Function to add a movie to the library
    filterByRating,    // Function to filter movies by rating
    filterByTitle,     // Function to filter movies by title
    filteredMovies,    // List of movies after filtering
    contentToRender,   // Content to render based on routing
  } = useApp();

  const location = useLocation();

  return (
    <div className="App">
      {/* Display current URL path */}
      <h2>URL actuel : {location.pathname}</h2>
      <h1>Movie Library</h1>
      {/* Render the filter component for filtering movies */}
      <Filter filterTitle={filterByTitle} filterRating={filterByRating} />
      {/* Render the component to add a new movie */}
      <AddMovie AddMovie={addMovie} />
      {/* Set up routes for the application */}
      <Routes>
        {/* Home route */}
        <Route path="" element={<Home />} />
        {/* Movies route with a list of filtered movies */}
        <Route path="/movies" element={<MovieList movies={filteredMovies} />} />
        {/* Route to display movie details based on ID */}
        <Route path='/movies/:id' element={<MovieDescription data={MoviesData}/>}/>
        {/* Default route for handling unknown URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
