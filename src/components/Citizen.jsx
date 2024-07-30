import React from 'react';
import './Citizens.css'; 

const Citizen = ({ citizen, index, toggleStatus }) => {
  return (
    <li className="citizen-item">
      <span>{index + 1}. {citizen.name}</span>
      <span>{citizen.age}</span>
      <span>{citizen.address}</span>
      <span>{citizen.status}</span>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </li>
  );
};

export default Citizen;
