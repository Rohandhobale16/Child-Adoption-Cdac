import React from "react";
import "../Parent/Parent_Slider.css";
import { Link } from "react-router-dom";

const Parent_Slider = () => {
  return (
    <div>
      <div className="nav-items" style={{ borderRadius: "2px" }}>
        <Link id="admin_slider_link" className="nav-link active" to="/parent">
          Book Slot
        </Link>
        <Link id="admin_slider_link" className="nav-link" to="/parent/edit">
          Edit Profile
        </Link>
        <Link id="admin_slider_link" className="nav-link" to="/parent/feedback">
          Feedback
        </Link>
        <Link id="admin_slider_link" className="nav-link" to="/parent/status">
          Booking Status
        </Link>
      </div>
    </div>
  );
};

export default Parent_Slider;
