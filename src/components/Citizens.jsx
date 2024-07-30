
import React, { useState } from 'react';
import './Citizens.css'; 
import SearchFilter from './SearchFilter'; 


const initialCitizens = [
  { name: 'John', age: 25, address: 'Barangay San Isidro, Minglanilla, Cebu', status: 'Active' },
  { name: 'Jane', age: 30, address: '1234 Poblacion, Minglanilla, Cebu', status: 'Inactive' },
  { name: 'Mike', age: 35, address: 'Villa Luisa Subdivision, Minglanilla, Cebu', status: 'Active' },
  { name: 'Lisa', age: 40, address: '56 Rizal Street, Minglanilla, Cebu', status: 'Inactive' },
  { name: 'John', age: 45, address: '89 Mahogany Avenue, Minglanilla, Cebu', status: 'Active' },
  { name: 'Jane', age: 50, address: '45 Mango Street, Minglanilla, Cebu', status: 'Inactive' },
  { name: 'Mike', age: 55, address: '17 Maple Lane, Minglanilla, Cebu', status: 'Active' },
  { name: 'Lisa', age: 60, address: 'Pinamungahan Road, Minglanilla, Cebu', status: 'Inactive' },
  { name: 'John', age: 65, address: '12 Bayani Street, Minglanilla, Cebu', status: 'Active' },
  { name: 'Jane', age: 70, address: '78 Sunrise Village, Minglanilla, Cebu', status: 'Active' },
];

const Citizens = () => {
  const [citizens, setCitizens] = useState(initialCitizens);

  const toggleStatus = (index) => {
    const newCitizens = [...citizens];
    newCitizens[index].status = newCitizens[index].status === 'Active' ? 'Inactive' : 'Active';
    setCitizens(newCitizens);
  };

  return (
    <div>
      <SearchFilter citizens={citizens} setFilteredCitizens={setCitizens} />
      <table className="citizens-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {citizens.map((citizen, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{citizen.name}</td>
              <td>{citizen.age}</td>
              <td>{citizen.address}</td>
              <td>{citizen.status}</td>
              <td>
                <button onClick={() => toggleStatus(index)}>Toggle Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citizens;
