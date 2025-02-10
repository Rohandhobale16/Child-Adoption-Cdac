import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SocialworkerSlider from "./Socialworker_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import { getAllRequest } from "../../services/SocialWorkerService";
const EditRequestStatus = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SocialworkerSlider />
        </div>
        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    debugger;
    const fecthData = async () => {
      const response = await getAllRequest(user);
      console.log(response);
    };
    fecthData();
  }, []);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRequest) {
      toast.error("Please select a request to update.");
      return;
    }

    // try {
    //   const response = await getAllRequest(user);

    //   if (response.ok) {
    //     toast.success("Request status updated successfully!");
    //   } else {
    //     toast.error("Failed to update request status");
    //   }
    // } catch (error) {
    //   toast.error("Error updating request status");
    // }
  };

  return (
    <div className="card shadow-lg p-4 rounded-lg">
      <h2 className="text-center mb-4 text-primary">Edit Request Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="request" className="form-label">
            Select Request:
          </label>
          <select
            id="request"
            className="form-select"
            onChange={(e) =>
              setSelectedRequest(
                requests.find((req) => req.id === Number(e.target.value))
              )
            }
          >
            <option value="">-- Select a request --</option>
            {requests.map((request) => (
              <option key={request.id} value={request.id}>
                {request.title} - {request.status}
              </option>
            ))}
          </select>
        </div>

        {selectedRequest && (
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Update Status:
            </label>
            <select
              id="status"
              className="form-select"
              value={status}
              onChange={handleChange}
            >
              <option value="">-- Select new status --</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Update Status
        </button>
      </form>
    </div>
  );
};

export default EditRequestStatus;
