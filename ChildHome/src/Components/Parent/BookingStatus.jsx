import { Link } from "react-router-dom";
import AdminNavbar from "../Admin/adminNavbar";

const BookingStatus = () => {
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

// Separated Form Component
const Content = () => {
  return (
    <div>
      <AdminNavbar />
      {/* Centered h2 heading */}
      <h2 className="text-center">Booking Status</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Initiated request by Childhome</th>
            <th>Forwarded request to Social Worker</th>
            <th>Social Worker Verification</th>
            <th>Adoption Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Completed</td>
            <td>Pending</td>
            <td>Pending</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingStatus;
