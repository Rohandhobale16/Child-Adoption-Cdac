import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useAuth } from "../Authenticate/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  // console.log(user.email);
  // console.log(user.password);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container-fluid" id="navbarcontainerfluid">
          <Link className="navbar-brand d-flex align-items-center me-4" to="/">
            <img
              id="home_logo"
              src="/logo.jpg"
              alt="logo"
              className="logo-img"
            />
            <span className="navbar-brand-text">HomeForHeart</span>
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle"
                  id="resourcesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="resourcesDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/schemesAndGuidelinesPage"
                    >
                      Schemes & Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/importantCourtOrdersPage"
                    >
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
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="pdf_files/adoption_regulations.pdf"
                  target="_blank"
                >
                  Acts & Regulations
                </a>
              </li>

              {user && user.userRole === "CHILDHOME" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/childHome">
                    ChildHome Dashboard
                  </Link>
                </li>
              )}
              {user && user.userRole === "ADMIN" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin Dashboard
                  </Link>
                </li>
              )}
              {user && user.userRole === "PARENT" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/parent">
                    Parent Dashboard
                  </Link>
                </li>
              )}
              {user && user.userRole === "EMPLOYEE" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/employee">
                    SocialWorker Dashboard
                  </Link>
                </li>
              )}

              {user ? (
                ""
              ) : (
                <li className="nav-item dropdown">
                  <button
                    className="btn nav-link dropdown-toggle"
                    id="registrationDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Registration
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="registrationDropdown"
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
              )}

              {user ? (
                <li className="nav-item">
                  <button className="btn btn-danger ms-lg-3" onClick={logout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    onClick={() => navigate("/login")}
                    className="btn btn-primary ms-lg-3"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
