import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { viewSucess } from "../../services/admin_services";

import "../Admin/Admin_Slider.css";
import AdminSidebar from "./AdminSidebar";

const AdminHome = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSidebar/>
        </div>

        <div className="col-10 ms-auto p-4">
          <section>
            <SucessTable />
          </section>
        </div>
      </div>
    </div>
  );
};

// Separated Form Component
function SucessTable() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const onLoadItems = async () => {
    const result = await viewSucess();
    if (result["status"] === "success") {
      setItems(result["users"]);
    } else {
      toast.error(result["error"]);
    }};
  
  const book = async (id) => {
    navigate(`/feedback/${id}`);
  };
  useEffect(() => {
     onLoadItems();
    // const result = await viewSucess();
    // if (result["status"] === "success") {
    //   setItems(result["users"]);
    // } else {
    //   toast.error(result["error"]);
    // }
    console.log("calling");
  }, []);
  return (
    <div>
      <div>
        <h1 className="form-title text-primary">Request Details</h1>
      </div>
      {
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>parentName</th>
              <th>childName</th>
              <th>ChildHome</th>
              <th>Status</th>
              <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                //change the colomn name according to the data in the table
                <tr key={index}>
                  <td>{item["id"]}</td>
                  <td>{item["name"]}</td>
                  <td>{item["cname"]}</td>
                  <td>{item["childhomename"]}</td>
                  <td>{item["status"]}</td>
                  <button
                    onClick={() => book(item["id"])}
                    className="btn btn-sm ms-2"
                  >
                    delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
};


export default AdminHome;
