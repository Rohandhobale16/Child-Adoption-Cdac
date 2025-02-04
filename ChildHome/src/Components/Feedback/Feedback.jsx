import { Link } from "react-router-dom";
import { useState } from "react";
import AdminNavbar from "../Admin/adminNavbar";

const ParentFeedback = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-2 bg-light shadow-lg position-fixed h-100 top-1">
          <nav className="nav flex-column">
            <Link className="nav-link active" to="/parent">
              Book Slot
            </Link>
            <Link className="nav-link" to="/parent/edit">
              Edit Profile
            </Link>
            <Link className="nav-link" to="/parent/feedback">
              Feedback
            </Link>
            <Link className="nav-link" to="/parent/status">
              Booking Status
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
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (feedback.trim() === "") {
      alert("Please enter your feedback before submitting.");
      return;
    }
    console.log("Submitted Feedback:", feedback);
    alert("Thank you for your feedback!");
    setFeedback(""); // Clear textarea after submission
  };

  return (
    <div>
      <AdminNavbar />
      <h1>
        <center>Feedback</center>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your feedback here about Child Home"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <center>
          <button type="submit" className="btn btn-primary mt-3">
            Submit Feedback
          </button>
        </center>
      </form>
    </div>
  );
};

export default ParentFeedback;
