// Filter.js
import React, { useState } from 'react';
import './Filter.css'; // Import the CSS file



// 

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({ status: '', original_launch: '', type: '' });

  const handleFilterChange = (event, field) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: event.target.value,
    }));
  };

  const applyFilters = () => {
    onFilter(filters);
    setFilters({ status: '', original_launch: '', type: '' }); // Reset input values
  };

  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Status"
        value={filters.status}
        onChange={(e) => handleFilterChange(e, 'status')}
        className="filter-input"
      />
      <input
        type="text"
        placeholder="Original Launch"
        value={filters.original_launch}
        onChange={(e) => handleFilterChange(e, 'original_launch')}
        className="filter-input"
      />
      <input
        type="text"
        placeholder="Type"
        value={filters.type}
        onChange={(e) => handleFilterChange(e, 'type')}
        className="filter-input"
      />
      <button onClick={applyFilters} className="filter-button">Apply Filters</button>
    </div>


  );
};

export default Filter;
