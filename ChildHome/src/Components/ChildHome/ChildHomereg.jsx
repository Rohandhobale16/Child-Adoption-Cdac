import React, { useState } from "react";
import "../Registration/Registration.css";
import { FaPhoneAlt, FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { registerChildhome } from "../../services/registration";

const ChildHomeReg = () => {
  const [chilhomeName, setChilhomeName] = useState("");
  const [Houseno, setHouse] = useState("");
  const [Street, setStreet] = useState("");
  const [District, setDistrict] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Managerfname, setManagerfname] = useState("");
  const [Managerlname, setManagerlname] = useState("");
  const [Bankaccountno, setBankaccountno] = useState("");
  const [Ifscno, setIfscno] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [InHome, setInHome] = useState("");
  const [Adaptable, setAdaptable] = useState("");

  const onRegister = async () => {
    if (chilhomeName.length === 0) {
      toast.warning("Please enter Child Home Name");
    } else if (Mobile.length === 0) {
      toast.warning("Please enter Mobile NO");
    } else if (Email.length === 0) {
      toast.warning("Please enter Email");
    } else if (Houseno.length === 0) {
      toast.warning("Please enter Houseno");
    } else if (Street.length === 0) {
      toast.warning("Please enter Street");
    } else if (District.length === 0) {
      toast.warning("Please enter District");
    } else if (City.length === 0) {
      toast.warning("Please enter City");
    } else if (State.length === 0) {
      toast.warning("Please enter State");
    } else if (Pincode.length === 0) {
      toast.warning("Please enter pincode");
    } else if (Managerfname.length === 0) {
      toast.warning("Please enter Manager First first name");
    } else if (Managerlname.length === 0) {
      toast.warning("Please enter Manager First last name");
    } else if (Bankaccountno.length === 0) {
      toast.warning("Please enter Bank Account No");
    } else if (Ifscno.length === 0) {
      toast.warning("Please enter IFSC code");
    } else if (Password.length === 0) {
      toast.warning("Please enter Bank Account No");
    } else if (InHome.length === 0) {
      toast.warning("Please enter Total Child Count");
    } else if (Adaptable.length === 0) {
      toast.warning("Please enter Adoptable child count");
    } else {
      const result = await registerChildhome(
        Houseno,
        Street,
        District,
        State,
        Pincode,
        City,
        chilhomeName,
        InHome,
        Adaptable,
        Managerfname,
        Managerlname,
        Mobile,
        Email,
        Password,
        Bankaccountno,
        Ifscno
      );
      if ((result.message = "success")) {
        toast.success("Registration Successfull");
      } else {
        toast.error("Registration Failed");
      }
    }
  };

  console.log(
    chilhomeName,
    Houseno,
    Street,
    District,
    City,
    State,
    Pincode,
    Mobile,
    Managerfname,
    Managerlname,
    Bankaccountno,
    Ifscno,
    Email,
    Password,
    InHome,
    Adaptable
  );

  return (
    <div className="container_background">
      <div className="registration-container">
        <h1 className="form-title text-primary">Child Home Registration </h1>

        <form>
          <div className="form-group">
            <label>Child Home Name :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setChilhomeName(e.target.value);
              }}
              type="text"
              name="childhomename"
              id="childhomename"
              placeholder="Child Home Name"
            />
          </div>
          <div className="form-group">
            <label>Addresse :</label>
            <br />
            <label>House No:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setHouse(e.target.value);
              }}
              type="text"
              name="houseno"
              id="houseno"
              placeholder="House Number"
            />
          </div>

          <div className="form-group">
            <label>Street :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              type="text"
              name="street"
              id="street"
              placeholder="Street "
            />
          </div>

          <div className="form-group">
            <label>District :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              type="text"
              name="district"
              id="district"
              placeholder="District "
            />
          </div>

          <div className="form-group">
            <label>City :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              name="city"
              id="city"
              placeholder="City "
            />
          </div>
          <div className="form-group">
            <label>State :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setState(e.target.value);
              }}
              type="text"
              name="state"
              id="state"
              placeholder="State "
            />
          </div>

          <div className="form-group">
            <label>Pincode :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              type="number"
              name="pincode"
              id="pincode"
              placeholder="Pincode "
            />
          </div>

          <div className="form-group">
            <label>Contact No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Contact No "
            />
          </div>
          <div className="form-group">
            <label>Total Child Count :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setInHome(e.target.value);
              }}
              type="number"
              name="inhome"
              id="inhome"
              placeholder="Total Child Count "
            />
          </div>
          <div className="form-group">
            <label>Adoptable Child Count:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setAdaptable(e.target.value);
              }}
              type="number"
              name="adoptable"
              id="adoptable"
              placeholder="Adoptable Child Count "
            />
          </div>
          <h1 className="form-title text-primary">Manager Details </h1>
          <div className="form-group">
            <label>First Name:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setManagerfname(e.target.value);
              }}
              type="text"
              name="managerfname"
              id="managerfname"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setManagerlname(e.target.value);
              }}
              type="text"
              name="managerlname"
              id="managerlname"
              placeholder="Last Name"
            />
          </div>

          <div className="form-group">
            <label>Bank Account No:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setBankaccountno(e.target.value);
              }}
              type="text"
              name="bankaccountno"
              id="bankaccountno"
              placeholder="Bank Account No"
            />
          </div>

          <div className="form-group">
            <label>Ifsc Code:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setIfscno(e.target.value);
              }}
              type="text"
              name="ifscno"
              id="ifscno"
              placeholder="Ifsc No"
            />
          </div>

          <div className="form-group">
            <label>Email Id:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Email Id"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <center>
            <button
              onClick={onRegister}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default ChildHomeReg;
