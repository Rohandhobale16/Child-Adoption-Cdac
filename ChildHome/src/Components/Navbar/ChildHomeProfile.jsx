import React from 'react';
import { Link } from 'react-router-dom';

export default function ChildHomeProfile() {
  return (
    <div className="col-3 d-flex flex-column vh-100 bg-light p-3">
      <h4 className="mb-4">Child Home Dashboard</h4>
      <nav className="nav flex-column">
        <Link className="nav-link" to="/addchild">Add Child</Link>
        <Link className="nav-link" to="/initiateAdoptionRequest">Initiate Adoption Request</Link>
        <Link className="nav-link" to="/socialWorkerRegistration">Social Worker Registration</Link>
        <Link className="nav-link" to="/uploadCertificate">Upload Certificate</Link>
        <Link className="nav-link" to="/childHomeEvents">Child Home Events</Link>
        <Link className="nav-link" to="/editProfile">Edit Profile</Link>
      </nav>
    </div>
  );
}
