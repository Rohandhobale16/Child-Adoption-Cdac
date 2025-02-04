import React, { useState } from "react";
import "../Registration/Registration.css";
import ChildhomeSlider from "../ChildHome/Childhome_Slider";

const SocialWorkerRegistration = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChildhomeSlider />
        </div>
        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    childhomeid: "", // Added childhomeid instead of qualifications, experience, organization
    social_worker_id: "", // ID to be generated or provided after registration
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data (e.g., API call)
    console.log("Registration Data", formData);
  };

  return (
    <div>
      <h2 className="text-center text-primary mb-4">
        Social Worker Registration
      </h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg p-4 rounded-lg bg-light"
      >
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="childhomeid" className="form-label">
            Child Home ID:
          </label>
          <input
            type="text"
            id="childhomeid"
            name="childhomeid"
            value={formData.childhomeid}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        {/* Optional: Hidden field for social_worker_id, which can be generated after registration */}
        <input
          type="hidden"
          name="social_worker_id"
          value={formData.social_worker_id}
        />

        <button type="submit" className="btn btn-primary btn-block w-100 mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default SocialWorkerRegistration;
