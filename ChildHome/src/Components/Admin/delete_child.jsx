// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { child, deleteChild } from "../../services/admin_services";

// import AdminNavbar from "./adminNavbar";
// // import './card.css'; // Optional: For styling
// const AdminChild = () => {
//   return (
//     <div>
//       <AdminNavbar />
//       <div className="container ">
//         <div className="row">
//           {/* Sidebar */}
//           <aside className="col-2 bg-light shadow-lg position-fixed h-100">
//             <nav className="nav flex-column">
//               <Link className="nav-link active" to="/admin">
//                 Admin
//               </Link>
//               <Link className="nav-link" to="/admin/deletechild">
//                 Delete Child
//               </Link>
//               <Link className="nav-link" to="/admin/deleteparent">
//                 Delete Parent
//               </Link>
//             </nav>
//           </aside>

//           <main className="col-10 ab ">
//             <section>
//               <ChildHomeDetails />
//             </section>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminChild;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { viewSucess } from "../../services/admin_services";
import AdminNavbar from "./adminNavbar";

const AdminChild = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-2 bg-light shadow-lg position-fixed h-100 top-1">
          <nav className="nav flex-column">
            <Link className="nav-link active" to="/admin">
              Admin
            </Link>
            <Link className="nav-link" to="/admin/deleteparent">
              Delete Parent
            </Link>
            <Link className="nav-link" to="/admin/deletechild">
              Delete Child
            </Link>
          </nav>
        </aside>

        <main className="col-10 ms-auto p-4">
          <section>
            <ChildHomeDetails />
          </section>
        </main>
      </div>
    </div>
  );
};

// Separated Form Component
function ChildHomeDetails() {
  const [items, setItems] = useState([]);
  const onLoadItems = async () => {
    const result = await child();
    if (result["status"] === "success") {
      setItems(result["users"]);
    } else {
      toast.error(result["error"]);
    }
  };
  useEffect(() => {
    onLoadItems();
  }, []);
  const del = async (id) => {
    const result = await deleteChild(id);
    if (result["status"] === "success") {
      toast.success("deleted");
      onLoadItems();
    } else {
      toast.error(result["error"]);
    }
  };
  return (
    <div>
      <AdminNavbar />
      <center>
        <h2 className="heading">child home Details</h2>
      </center>
      {
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>lname</th>
              <th>email</th>
              <th>mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["id"]}</td>
                  <td>{item["name"]}</td>
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

export default AdminChild;
