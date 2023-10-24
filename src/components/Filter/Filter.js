import React from 'react';

const Filter = ({ filterTitle, filterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => filterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => filterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
