import React, { useState } from "react";
import "../Registration/Registration.css";
import { FaPhoneAlt, FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";

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
    <div className="container_background">
      <div className="registration-container">
        <h1 className="form-title text-primary">Child Home Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="homeName" className="form-label">
              Child Home Name
            </label>
            <div className="input-group">
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
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            {Object.keys(address).map((key) => (
              <div key={key} className="input-group">
                <input
                  type="text"
                  name={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="form-control mb-2"
                  value={address[key]}
                  onChange={handleAddressChange}
                  required
                />
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Contact Number
            </label>
            <div className="input-group">
              <FaPhoneAlt className="input-icon" />
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
          </div>
          <h3 className="text-center mb-3">Manager Details</h3>
          {Object.entries(manager).map(([key, value]) => (
            <div className="mb-3" key={key}>
              <label htmlFor={key} className="form-label">
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <div className="input-group">
                {key === "email" && <FaEnvelope className="input-icon" />}
                {key === "password" && <FaLock className="input-icon" />}
                {key === "firstName" || key === "lastName" ? (
                  <FaUserAlt className="input-icon" />
                ) : null}
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
            </div>
          ))}
          <center>
            <button type="submit" className="submit-button">
              Register Child Home
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default ChildHomeReg;
