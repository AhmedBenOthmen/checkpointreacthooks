import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Filter = ({ filterTitle, filterRating }) => {
  // Get the navigation function from react-router-dom
  const Navigate = useNavigate();

  // Function to navigate to a specified path
  function handleNavigate(path) {
    Navigate(path);
  }

  return (
    <div className="filter">
      {/* Input field to filter movies by title */}
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => filterTitle(e.target.value)}
      />
      {/* Input field to filter movies by rating */}
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => filterRating(e.target.value)}
      />
      {/* Button to navigate to the home page */}
      <Button variant="primary" onClick={() => handleNavigate('')}>home</Button>
      {/* Button to navigate to the movies page */}
      <Button variant="secondary" onClick={() => handleNavigate('./movies')}>movies</Button>
    </div>
  );
};

export default Filter;
