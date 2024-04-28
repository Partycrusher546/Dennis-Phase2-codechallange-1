import React from 'react';
import './Header.css'; 

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <h1>Bank of Flatiron</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </header>
  );
};

export default Header;
