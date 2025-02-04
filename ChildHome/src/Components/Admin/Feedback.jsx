import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { feedback } from "../../services/admin_services";
import "../Admin/Admin_Slider.css";
import Admin_Sidebar from "./Admin_Sidebar";

// import './card.css'; // Optional: For styling

const Feedback = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Admin_Sidebar />
        </div>
        <div className="col-10 ms-auto p-4">
          <Content />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <main className="col-10 ms-auto ">
        <section>
          <CardComponent />
        </section>
      </main>
    </div>
  );
};
const CardComponent = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const onLoadItems = async () => {
    const result = await feedback(id);
    if (result["status"] === "success") {
      setItems(result["users"]);
    } else {
      toast.error(result["error"]);
    }
  };
  useEffect(() => {
    onLoadItems();
  }, []);
  return (
    <div className="card ">
      <h2>Request ID: {items.fname}</h2>
      <p>Description: {items.description}</p>
    </div>
  );
};

export default Feedback;
