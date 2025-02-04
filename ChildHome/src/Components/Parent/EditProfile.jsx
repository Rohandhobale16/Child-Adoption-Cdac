import Parent_Slider from "./Parent_Slider";
import "../Parent/Parent_Slider.css";
const EditProfile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 ">
          <Parent_Slider />
        </div>

        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

// Separated Form Component
const Content = () => {
  return (
    <div>
      <center>
        <h2 className="mb-4">Edit Profile</h2>
      </center>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="homeName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              First Name
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
            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input type="text" className="form-control" id="pincode" />
          </div>
          <div className="col-md-6">
            <label htmlFor="mobileNo" className="form-label">
              Mobile Number{" "}
            </label>
            <input type="text" className="form-control" id="mobileNo" />
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
