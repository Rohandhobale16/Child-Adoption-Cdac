import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login/Login";
// import Applicantreg from './Components/Registration/Applicantreg'
import AdminHome from "./Components/Admin/admin_home";
import AdminChild from "./Components/Admin/ChildHome_Details.jsx";
import Feedback from "./Components/Admin/Feedback.jsx";
import AdminParent from "./Components/Admin/Parent_Details";
import AddChildForm from "./Components/ChildHome/AddChildForm";
import ChildHomeEvents from "./Components/ChildHome/ChildHomeEvents";
import ChildHomeProfile from "./Components/ChildHome/ChildHomeProfile";
import Childhhomereg from "./Components/ChildHome/ChildHomereg";
import ChildHomeTable from "./Components/ChildHome/ChildHomeTable";
import EditHomeProfile from "./Components/ChildHome/EditProfile";
import InitiateAdoptionRequest from "./Components/ChildHome/InitiateAdoptionRequest";
import UploadCertificate from "./Components/ChildHome/UploadCertificate";
import ContactUs from "./Components/ContactUs/ContactUs";
import RazorpayPayment from "./Components/Donation/RazorpayPayment";
import Events from "./Components/Event/Events.jsx";
import Home from "./Components/Home/Home";
import Layout from "./Components/Navbar/Layout";
import BookingStatus from "./Components/Parent/BookingStatus";
import EditProfile from "./Components/Parent/EditProfile";
import ParentFeedback from "./Components/Parent/ParentFeedback.jsx";
import ParentProfile from "./Components/Parent/Parentprofile";
import ParentRegistration from "./Components/Registration/ParentRegistration";
import AnnualReportPage from "./Components/Resources/AnnualReportPage";
import ImportantCourtOrdersPage from "./Components/Resources/ImportantCourtOrdersPage";
import SchemesAndGuidelinesPage from "./Components/Resources/SchemesAndGuidelinesPage";
import EditRequestStatus from "./Components/Socialworker/EditRequestStatus.jsx";
import SocialWorkerEdit from "./Components/Socialworker/SocialWorkerEdit";
import SocialWorkerProfile from "./Components/Socialworker/SocialWorkerProfile";
import SocialWorkerRegistration from "./Components/Socialworker/SocialWorkerRegistration";

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
          <Route path="/parent" element={<ParentProfile />} />
          <Route path="/parent/feedback" element={<ParentFeedback />} />
          <Route path="/parent/status" element={<BookingStatus />} />
          <Route path="/parent/edit" element={<EditProfile />} />

          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/parentdetails" element={<AdminParent />} />
          <Route path="/admin/childhomedetails" element={<AdminChild />} />
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
