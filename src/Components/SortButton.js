// SortButton.js
import React from 'react';
import './SortButton.css'; // Import CSS

const SortButton = ({ handleSort }) => {
  return (
    <div className="button-container">
      <button onClick={() => handleSort('date')}>Date</button>
      <button onClick={() => handleSort('description')}> Description</button>
      <button onClick={() => handleSort('category')}>Category</button>
      <button onClick={() => handleSort('amount')}>Amount</button>
    </div>
  );
};

export default SortButton;
