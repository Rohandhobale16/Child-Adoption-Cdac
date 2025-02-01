import { Link } from "react-router-dom";
import AdminNavbar from "../Admin/adminNavbar";

const EditProfile = () => {
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
      <center>
        <h2 className="mb-4">Edit Profile</h2>
      </center>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="homeName" className="form-label">
              Home Name
            </label>
            <input type="text" className="form-control" id="homeName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="totalAdoptableChildren" className="form-label">
              Total No. of Adoptable Children
            </label>
            <input
              type="number"
              className="form-control"
              id="totalAdoptableChildren"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="inHomeChildren" className="form-label">
              In-Home Children
            </label>
            <input type="number" className="form-control" id="inHomeChildren" />
          </div>
          <div className="col-md-6">
            <label htmlFor="houseNo" className="form-label">
              House No.
            </label>
            <input type="text" className="form-control" id="houseNo" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <input type="text" className="form-control" id="street" />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="city" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="district" className="form-label">
              District
            </label>
            <input type="text" className="form-control" id="district" />
          </div>
          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="state" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input type="text" className="form-control" id="pincode" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bankAccount" className="form-label">
              Bank Account
            </label>
            <input type="text" className="form-control" id="bankAccount" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="ifscCode" className="form-label">
              IFSC Code
            </label>
            <input type="text" className="form-control" id="ifscCode" />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
