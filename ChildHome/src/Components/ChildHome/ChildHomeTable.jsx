import React, { useEffect, useState } from 'react';

// ChildHomeTable Component
const ChildHomeTable = () => {
  const [childHomes, setChildHomes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/childhomes')
      .then((response) => response.json())
      .then((data) => {
        setChildHomes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Child Homes List</h2>
      <table className="table table-bordered table-hover table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>ID</th>
            <th>Home Name</th>
            <th>State</th>
            <th>Address</th>
            <th>Contact Details</th>
          </tr>
        </thead>
        <tbody>
          {childHomes.map((home) => (
            <tr key={home.id} className="text-dark">
              <td>{home.id}</td>
              <td>{home.name}</td>
              <td>{home.state}</td>
              <td>{home.address}</td>
              <td>{home.contactDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChildHomeTable;
