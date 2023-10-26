import './App.css';
import MovieList from './components/MovieList/MovieList.js';
import Filter from './components/Filter/Filter.js';
import AddMovie from './components/AddMovie/AddMovie.js';
import useApp from './useApp.js';

function App() {
 
  const { addMovie , filterByRating , filterByTitle , filteredMovies  } = useApp();

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