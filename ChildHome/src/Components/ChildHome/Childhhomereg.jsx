import React, { useState } from "react";

const ChildHomeReg = () => {
  const [homeName, setHomeName] = useState("");
  const [address, setAddress] = useState({
    houseNo: "",
    street: "",
    district: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [contactNumber, setContactNumber] = useState("");
  const [manager, setManager] = useState({
    firstName: "",
    lastName: "",
    bankAccount: "",
    ifsc: "",
    email: "",
    password: "",
  });

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleManagerChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ homeName, address, contactNumber, manager });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Child Home Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="homeName" className="form-label">
            Child Home Name
          </label>
          <input
            type="text"
            id="homeName"
            className="form-control"
            value={homeName}
            onChange={(e) => setHomeName(e.target.value)}
            required
            placeholder="Enter Child Home Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          {Object.keys(address).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="form-control mb-2"
              value={address[key]}
              onChange={handleAddressChange}
              required
            />
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            className="form-control"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            placeholder="Enter Contact Number"
          />
        </div>
        <h3 className="text-center mb-3">Manager Details</h3>
        {Object.entries(manager).map(([key, value]) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type={
                key === "password"
                  ? "password"
                  : key === "email"
                  ? "email"
                  : "text"
              }
              id={key}
              name={key}
              className="form-control"
              value={value}
              onChange={handleManagerChange}
              required
              placeholder={`Enter ${
                key.charAt(0).toUpperCase() + key.slice(1)
              }`}
            />
          </div>
        ))}
        <center>
          <button type="submit" className="btn btn-primary">
            Register Child Home
          </button>
        </center>
      </form>
    </div>
  );
};

export default ChildHomeReg;
