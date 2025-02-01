import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link
            className="navbar-brand d-flex align-items-center me-4"
            to="/"
            style={{ gap: "10px" }}
          >
            <img
              id="home_logo"
              src="/logo.jpg"
              alt="logo"
              style={{ height: "40px" }}
            />
            <span>HomeForHeart</span>
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {/* Dropdown for Resources */}
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle"
                  id="resourcesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  Resources
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="resourcesDropdown"
                  style={{ top: "100%" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/schemesAndGuidelinesPage">
                      Schemes & Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/importantCourtOrdersPage">
                      Important Court Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/annualReportPage">
                      Annual Reports
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Static Links */}
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/displayhomes">
                  Child Homes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Legal Consult
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pdf_files/adoption_regulations.pdf" target="_blank">
                  Acts & Regulations
                </a>
              </li>

              {/* Dropdown for Registration */}
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle"
                  id="registrationDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  Registration
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="registrationDropdown"
                  style={{ top: "100%" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/Applicantreg">
                      Resident Indian Parents
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Childhomereg">
                      Register Child Home
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Login Button */}
              <li className="nav-item">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="btn btn-primary ms-lg-3"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default AdminNavbar;