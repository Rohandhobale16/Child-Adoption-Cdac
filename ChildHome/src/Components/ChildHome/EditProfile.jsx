import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const EditHomeProfile = () => {
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

const Content = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="form-control"
            id="address"
            placeholder="Enter your address"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditHomeProfile;
