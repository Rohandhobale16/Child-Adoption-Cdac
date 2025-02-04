import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SocialworkerSlider from "./Socialworker_Slider";

const SocialWorkerEdit = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SocialworkerSlider />
        </div>

        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const { id } = useParams(); // Get social_worker_id from URL params
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    childhomeid: "",
  });

  useEffect(() => {
    // Fetch existing data from API
    fetch(`http://localhost:5000/socialworkers/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/socialworkers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Updated successfully:", data))
      .catch((error) => console.error("Error updating data:", error));
  };

  return (
    <div>
      <h2 className="text-center text-primary mb-4">
        Edit Social Worker Details
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

        <button type="submit" className="btn btn-success btn-block w-100 mt-3">
          Update
        </button>
      </form>
    </div>
  );
};

export default SocialWorkerEdit;
