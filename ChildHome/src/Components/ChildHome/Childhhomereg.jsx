import React, { useState } from 'react';

const Childhhomereg = () => {
  const [homeName, setHomeName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ homeName, address, contactNumber });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Child Home Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="homeName" className="form-label">Child Home Name</label>
          <input
            type="text"
            id="homeName"
            className="form-control"
            value={homeName}
            onChange={(e) => setHomeName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            id="address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            className="form-control"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register Child Home</button>
      </form>
    </div>
  );
};

export default Childhhomereg;