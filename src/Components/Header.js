// Header.js
import React from 'react';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm, handleSort }) => {
  return (
    <header>
      <h1>Bank of Flatiron</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="sort-container">
        <button onClick={() => handleSort('date')}>Sort by Date</button>
        <button onClick={() => handleSort('description')}>Sort by Description</button>
        <button onClick={() => handleSort('category')}>Sort by Category</button>
        <button onClick={() => handleSort('amount')}>Sort by Amount</button>
      </div>
    </header>
  );
};

export default Header;
