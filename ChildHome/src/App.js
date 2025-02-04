import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
// import Applicantreg from './Components/Registration/Applicantreg'
import Childhhomereg from "./Components/ChildHome/ChildHomereg";
import RazorpayPayment from "./Components/Donation/RazorpayPayment";
import Layout from "./Components/Navbar/Layout";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import AddChildForm from "./Components/ChildHome/AddChildForm";
import ChildHomeTable from "./Components/ChildHome/ChildHomeTable";
import ParentRegistration from "./Components/Registration/ParentRegistration";
import SchemesAndGuidelinesPage from "./Components/Resources/SchemesAndGuidelinesPage";
import ImportantCourtOrdersPage from "./Components/Resources/ImportantCourtOrdersPage";
import AnnualReportPage from "./Components/Resources/AnnualReportPage";
import AdminProfile from "./Components/Parent/adminprofile";
import BookingStatus from "./Components/Parent/BookingStatus";
import EditProfile from "./Components/Parent/EditProfile";
import AdminHome from "./Components/Admin/admin_home";
import AdminChild from "./Components/Admin/delete_child";
import AdminParent from "./Components/Admin/delete_parent";
import InitiateAdoptionRequest from "./Components/ChildHome/InitiateAdoptionRequest";
import SocialWorkerRegistration from "./Components/Socialworker/SocialWorkerRegistration";
import UploadCertificate from "./Components/ChildHome/UploadCertificate";
import ChildHomeEvents from "./Components/ChildHome/ChildHomeEvents";
import EditHomeProfile from "./Components/ChildHome/EditProfile";
import ChildHomeProfile from "./Components/ChildHome/ChildHomeProfile";
import SocialWorkerEdit from "./Components/Socialworker/SocialWorkerEdit";
import EditRequestStatus from "./Components/Socialworker/EditRequestStatus.jsx";
import SocialWorkerProfile from "./Components/Socialworker/SocialWorkerProfile";
import Events from "./Components/Event/Events.jsx";
import ParentFeedback from "./Components/Feedback/Feedback";
import Feedback from "./Components/Admin/Feedback.jsx";

function App() {
  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Applicantreg" element={<ParentRegistration />} />
          <Route path="/Childhomereg" element={<Childhhomereg />} />
          <Route path="/donate" element={<RazorpayPayment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/childhome/addchild" element={<AddChildForm />} />
          <Route path="/displayhomes" element={<ChildHomeTable />} />
          <Route path="/events" element={<Events />} />
          <Route
            path="/schemesAndGuidelinesPage"
            element={<SchemesAndGuidelinesPage />}
          />
          <Route
            path="/importantCourtOrdersPage"
            element={<ImportantCourtOrdersPage />}
          />
          <Route path="/annualReportPage" element={<AnnualReportPage />} />
          <Route path="/parent" element={<AdminProfile />} />
          <Route path="/parent/feedback" element={<ParentFeedback />} />
          <Route path="/parent/status" element={<BookingStatus />} />
          <Route path="/parent/edit" element={<EditProfile />} />

          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/deleteparent" element={<AdminParent />} />
          <Route path="/admin/deletechild" element={<AdminChild />} />
          <Route path="/admin/feedback/:id" element={<Feedback />} />

          <Route path="/childhome" element={<InitiateAdoptionRequest />} />
          <Route
            path="/childhome/registerSocialWorker"
            element={<SocialWorkerRegistration />}
          />
          <Route
            path="/childhome/uploadcertifiacte"
            element={<UploadCertificate />}
          />
          <Route path="/childhome/addevent" element={<ChildHomeEvents />} />
          <Route path="/childhome/edit" element={<EditHomeProfile />} />

          <Route path="/childHomeProfile" element={<ChildHomeProfile />} />

          <Route path="/social/edit" element={<SocialWorkerEdit />} />
          <Route path="/social" element={<EditRequestStatus />} />
          <Route
            path="/socialWorkerProfile"
            element={<SocialWorkerProfile />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
