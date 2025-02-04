import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialWorkerProfile() {
  return (
    <div className="col-3 d-flex flex-column vh-100 bg-light p-3">
    <h4 className="mb-4">Social Worker Dashboard</h4>
    <nav className="nav flex-column">
      <Link className="nav-link" to="/socialWorkerEdit">social Worker Edit</Link>
      <Link className="nav-link" to="/editRequestStatus">EditRequest Status</Link>
    </nav>
  </div>
  )
}
