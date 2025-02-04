import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deletes, homeC } from "../../services/admin_services";
import Admin_Sidebar from "./Admin_Sidebar";
import "../Admin/Admin_Slider.css";
// import AdminNavbar from "./adminNavbar";
// import './card.css'; // Optional: For styling
const AdminParent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 ">
          <Admin_Sidebar />
        </div>

        <div className="col-10 ms-auto p-4">
          <ParentDetails />
        </div>
      </div>
    </div>
  );
};
function ParentDetails() {
  const [items, setItems] = useState([]);
  const onLoadItems = async () => {
    const result = await homeC();
    if (result["status"] == "success") {
      setItems(result["users"]);
    } else {
      toast.error(result["error"]);
    }
  };
  useEffect(() => {
    onLoadItems();
  }, []);
  const del = async (id) => {
    const result = await deletes(id);
    if (result["status"] == "success") {
      toast.success("deleted");
      onLoadItems();
    } else {
      toast.error(result["error"]);
    }
  };
  return (
    <div>
      <div>
        <h1 className="form-title text-primary">Parent Details</h1>
      </div>
      {
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email id</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["id"]}</td>
                  <td>{item["fname"]}</td>
                  <td>{item["lname"]}</td>
                  <td>{item["email"]}</td>
                  <td>{item["mobile"]}</td>
                  <td>
                    <button
                      onClick={() => del(item["id"])}
                      className="btn btn-danger btn-sm ms-2"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
}

export default AdminParent;
