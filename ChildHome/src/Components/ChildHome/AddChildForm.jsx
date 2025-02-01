import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddChildForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-2 bg-light shadow-lg position-fixed h-100 top-1">
          <nav className="nav flex-column">
            <Link className="nav-link active" to="/childhome">
              Initiate Request
            </Link>
            <Link className="nav-link" to="/childhome/addchild">
              Add Child
            </Link>
            <Link className="nav-link" to="/childhome/addevent">
              Add Event
            </Link>
            <Link className="nav-link" to="/childhome/edit">
              Edit Profile
            </Link>
            <Link className="nav-link" to="/childhome/registerSocialWorker">
              Register Social Worker
            </Link>
            <Link className="nav-link" to="/childhome/uploadcertifiacte">
              Upload Adoption Certificate
            </Link>
          </nav>
        </aside>

        <main className="col-10 ms-auto p-4">
          <section>
            <Content />
          </section>
        </main>
      </div>
    </div>
  );
};


// AddChildForm Component
const Content = () => {
  const [childData, setChildData] = useState({
    name: "",
    gender: "",
    age: "",
    photo: null,
  });
  const [message, setMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildData({ ...childData, [name]: value });
  };

  // Handle file input (for photo)
  const handleFileChange = (e) => {
    setChildData({ ...childData, photo: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", childData.name);
    formData.append("gender", childData.gender);
    formData.append("age", childData.age);
    formData.append("photo", childData.photo);

    // Send data to the server using fetch
    fetch("http://localhost:5000/api/children", {
      method: "POST",
      body: formData, // Use FormData to handle file uploads
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("Child details added successfully!");
        setChildData({ name: "", gender: "", age: "", photo: null }); // Reset form
      })
      .catch((error) => {
        console.error("Error adding child details:", error);
        setMessage("Error adding child details.");
      });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Add New Child</h2>

      {message && (
        <div className="alert alert-info text-center" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={childData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={childData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={childData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Photo:
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Child
        </button>
      </form>
    </div>
  );
};

export default AddChildForm;
