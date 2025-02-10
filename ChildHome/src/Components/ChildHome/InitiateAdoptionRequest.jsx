import React, { useState, useEffect } from "react";
import ChildhomeSlider from "./Childhome_Slider";
import { useAuth } from "../Authenticate/AuthContext";
import { getChildren, getParents } from "../../services/Childhomeservice";

const InitiateAdoptionRequest = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ChildhomeSlider />
        </div>
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
  const { user } = useAuth();
  const [requests, setRequests] = useState([
    {
      id: 1,
      parentName: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      parentName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      parentName: "Michael Brown",
      email: "michael@example.com",
      phone: "456-789-0123",
    },
    {
      id: 4,
      parentName: "Emily Davis",
      email: "emily@example.com",
      phone: "321-654-0987",
    },
  ]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchChildren = async () => {
        try {
          const data = await getChildren(user);
          const parentData = await getParents(user);
          console.log(parentData);
          //   console.log("Children Data :", data);
          if (Array.isArray(data)) {
            setChildren(data);
          } else {
            console.error("Unexpected response format:", data);
          }
        } catch (error) {
          console.error("Error fetching children:", error);
        }
      };

      fetchChildren();
    }
  }, [user]);

  useEffect(() => {
    //  console.log("Updated Children State:", children);
  }, [children]);

  const handleSubmit = (id) => {
    console.log("Submit clicked for Request ID:", id);
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
              <th>Child</th>
              <th>Action</th>
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
                <td>
                  <select className="form-select" style={{ width: "200px" }}>
                    <option value="">Select a child</option>
                    {children.map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.id} - {child.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleSubmit(request.id)}
                    className="btn btn-primary btn-sm"
                  >
                    Submit
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
