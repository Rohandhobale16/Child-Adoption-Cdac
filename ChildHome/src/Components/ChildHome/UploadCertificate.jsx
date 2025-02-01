import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UploadCertificate = () => {
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
  const [form, setForm] = useState({
    childId: "",
    childName: "",
    parentId: "",
    parentName: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.file) {
      toast.error("Please upload a certificate file");
      return;
    }

    const formData = new FormData();
    formData.append("childId", form.childId);
    formData.append("childName", form.childName);
    formData.append("parentId", form.parentId);
    formData.append("parentName", form.parentName);
    formData.append("file", form.file);

    try {
      const response = await fetch("/api/upload-certificate", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Certificate uploaded successfully!");
      } else {
        toast.error("Failed to upload certificate");
      }
    } catch (error) {
      toast.error("Error uploading certificate");
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-primary">
        Upload Adoption Certificate
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="childId" className="form-label">
            Child ID:
          </label>
          <input
            type="text"
            name="childId"
            value={form.childId}
            onChange={handleChange}
            className="form-control"
            id="childId"
            placeholder="Enter Child ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="childName" className="form-label">
            Child Name:
          </label>
          <input
            type="text"
            name="childName"
            value={form.childName}
            onChange={handleChange}
            className="form-control"
            id="childName"
            placeholder="Enter Child Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="parentId" className="form-label">
            Parent ID:
          </label>
          <input
            type="text"
            name="parentId"
            value={form.parentId}
            onChange={handleChange}
            className="form-control"
            id="parentId"
            placeholder="Enter Parent ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="parentName" className="form-label">
            Parent Name:
          </label>
          <input
            type="text"
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            className="form-control"
            id="parentName"
            placeholder="Enter Parent Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            Certificate File:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
            id="file"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Upload Certificate
        </button>
      </form>
    </div>
  );
};

export default UploadCertificate;
