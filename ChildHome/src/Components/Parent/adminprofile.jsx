import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../Admin/adminNavbar";

const AdminProfile = () => {
  const [selectedChildHome, setSelectedChildHome] = useState(null);

  const openModal = (childHome) => {
    setSelectedChildHome(childHome);
    const modal = new window.bootstrap.Modal(
      document.getElementById("bookSlotModal")
    );
    modal.show();
  };

  return (
    <div className="container-fluid">
      <div className="row">
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
            <BookSlotTable onBookSlot={openModal} />
          </section>
        </main>
      </div>

      {/* Bootstrap Modal */}
      <BookSlotModal selectedChildHome={selectedChildHome} />
    </div>
  );
};

const BookSlotTable = ({ onBookSlot }) => {
  return (
    <div>
      <AdminNavbar />
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Sr.No.</th>
            <th>NAME OF CHILD HOMES</th>
            <th>STATE</th>
            <th>ADDRESS</th>
            <th>CONTACT DETAILS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((num) => (
            <tr key={num}>
              <td>{num}</td>
              <td>Child Home {num}</td>
              <td>State {num}</td>
              <td>Address {num}</td>
              <td>Contact {num}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onBookSlot(`Child Home ${num}`)}
                >
                  Book Slot
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BookSlotModal = ({ selectedChildHome }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const getNextFourSundays = () => {
    let dates = [];
    let today = new Date();
    for (let i = 0; i < 4; i++) {
      today.setDate(today.getDate() + ((7 - today.getDay() + 7) % 7 || 7));
      dates.push(today.toISOString().split("T")[0]);
    }
    return dates;
  };

  const handleSubmit = () => {
    console.log("Child Home:", selectedChildHome);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Slot:", selectedSlot);
  };

  return (
    <div
      className="modal fade"
      id="bookSlotModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book Slot</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Display Child Home Name in the Form */}
            <div className="mb-3">
              <label className="form-label">Child Home Name</label>
              <input
                type="text"
                className="form-control"
                value={selectedChildHome || ""}
                readOnly
              />
            </div>

            {/* Date Selection */}
            <div className="mb-3">
              <label className="form-label">Select Date</label>
              <select
                className="form-select"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="">Select a Sunday</option>
                {getNextFourSundays().map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Slot Selection */}
            <div className="mb-3">
              <label className="form-label">Select Slot</label>
              <select
                className="form-select"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
              >
                <option value="">Select a Slot</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
