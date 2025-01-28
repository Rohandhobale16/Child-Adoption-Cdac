
import './App.css';
import {  Routes, Route } from "react-router-dom";

import Login from './Components/Login/Login';
// import Applicantreg from './Components/Registration/Applicantreg'
import Childhhomereg from './Components/ChildHome/Childhhomereg';
import RazorpayPayment from './Components/Donation/RazorpayPayment';
import Layout from './Components/Navbar/Layout';
import Home from './Components/Navbar/Home';
import ContactUs from './Components/Login/ContactUs';
import AddChildForm from './Components/ChildHome/AddChildForm';
import ChildHomeTable from './Components/ChildHome/ChildHomeTable';
import ParentRegistration from './Components/Registration/ParentRegistration';
import SchemesAndGuidelinesPage from './Components/Resources/SchemesAndGuidelinesPage';
import ImportantCourtOrdersPage from './Components/Resources/ImportantCourtOrdersPage';
import AnnualReportPage from './Components/Resources/AnnualReportPage';

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
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/addchild' element={<AddChildForm />} />
          <Route path='/displayhomes' element={<ChildHomeTable />} />
          <Route path='/schemesAndGuidelinesPage' element={<SchemesAndGuidelinesPage />} />
          <Route path='/importantCourtOrdersPage' element={<ImportantCourtOrdersPage />} />
          <Route path='/annualReportPage' element={<AnnualReportPage />} />
          
        </Routes>
      </Layout>
    

    </>
  );
}

export default App;
