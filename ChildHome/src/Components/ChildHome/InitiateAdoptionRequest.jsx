import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InitiateAdoptionRequest = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-2 bg-light shadow-lg position-fixed h-100 top-1">
          <nav className="nav flex-column">
            <Link className="nav-link active" to="/childhome">
              Initiate Request
            </Link>
            <Link className="nav-link" to="/childhome/addchild">
              Add Child
            </Link>
            <Link className="nav-link" to="/childhome/addevent">
              Add Event
            </Link>
            <Link className="nav-link" to="/childhome/edit">
              Edit Profile
            </Link>
            <Link className="nav-link" to="/childhome/registerSocialWorker">
              Register Social Worker
            </Link>
            <Link className="nav-link" to="/childhome/uploadcertifiacte">
              Upload Adoption Certificate
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
  const [requests, setRequests] = useState([
    {
      id: 1,
      parentName: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      childId: "C001",
      status: true,
    },
    {
      id: 2,
      parentName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      childId: "C002",
      status: false,
    },
    {
      id: 3,
      parentName: "Michael Brown",
      email: "michael@example.com",
      phone: "456-789-0123",
      childId: "C003",
      status: true,
    },
  ]);

  useEffect(() => {
    fetch("/api/adoption-requests")
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) =>
        console.error("Error fetching adoption requests:", error)
      );
  }, []);

  const handleStatusChange = (id, currentStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: !currentStatus } : request
      )
    );

    fetch(`/api/adoption-requests/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: !currentStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Status updated:", data);
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === id ? { ...request, status: currentStatus } : request
          )
        );
      });
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">
        Initiate Adoption Request
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th>Parent Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Child ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr
                key={request.id}
                className={index % 2 === 0 ? "table-light" : "table-secondary"}
              >
                <td>{request.parentName}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.childId}</td>
                <td className="text-center">
                  <button
                    onClick={() =>
                      handleStatusChange(request.id, request.status)
                    }
                    className={`btn ${
                      request.status ? "btn-success" : "btn-warning"
                    } btn-sm`}
                  >
                    {request.status ? "Accepted" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InitiateAdoptionRequest;
