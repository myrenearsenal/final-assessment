
import React, { useState, useEffect } from 'react';
import './SearchFilter.css'; 

const SearchFilter = ({ citizens, setFilteredCitizens }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filtered = citizens.filter(citizen =>
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCitizens(filtered);
  }, [searchQuery, citizens, setFilteredCitizens]);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
