import React, { useState } from "react";
import "../serviceStyle.scss";
import FilterListIcon from '@mui/icons-material/FilterList';

function FilterComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-wrapper">
      <button onClick={() => setIsOpen(!isOpen)} className="filter-button">
        <FilterListIcon />
      </button>
      {isOpen && (
        <div className="filter-options">
          <button className="filter-option">Budget</button>
          <button className="filter-option">Experience</button>
          <button className="filter-option">Portfolio</button>
          <button className="filter-option">Timeline</button>
          <button className="filter-option">Start Date</button>
        </div>
      )}
    </div>
  );
}

export default FilterComponent;
