import Parent_Slider from "./Parent_Slider";
import "../Parent/Parent_Slider.css";
const BookingStatus = () => {
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
