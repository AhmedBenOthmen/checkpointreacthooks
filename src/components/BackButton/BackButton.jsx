import React from 'react';
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  // Get the navigation function from the react-router-dom
  let navigate = useNavigate();

  return (
    <>
      {/* Render a button to navigate back to the previous page */}
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}

export default BackButton;
