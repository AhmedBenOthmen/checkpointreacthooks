import React, { useState } from 'react';

const AddMovie = ({ AddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    AddMovie(newMovie);
    // Clear the form after adding the movie
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  return (
    <div className="add-movie">
      <h2>Add a New Movie</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
