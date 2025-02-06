import { useState } from "react";
import "./Registration.css";
// import { register } from "../../Routes/Applicationrouter";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register1, register2 } from "../../services/registration";
// import { FaUser, FaLock } from "react-icons/fa";

const ParentRegistration = () => {
  const navigate = useNavigate();

  const [material, setMaterial] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aadhar, setAdhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [houseNo, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [partnerfname, setPartnerfname] = useState("");
  const [partnerlname, setPartnerlname] = useState("");
  const [partnergender, setPartnergender] = useState("");
  const [partnerdob, setPartnerdob] = useState("");
  const [partneraadhar, setPartneradhar_no] = useState("");
  const [partnermobile, setPartnermobile] = useState("");
  const [partneremail, setPartneremail] = useState("");
  const [partnerincome, setPartnerincome] = useState("");
  const [partneroccupation, setPartneroccupation] = useState("");
  const [partnernationality, setPartnernationality] = useState("");
  const [Partnerage, setPartnerage] = useState("");

  const onRegister = async () => {
    if (material.length === 0) {
      toast.warning("Please select material");
    } else if (material === "Married") {
      setPartnergender(gender === "Male" ? "Female" : "Male");
      if (fname.length === 0) {
        toast.warning("Please enter first name");
      } else if (lname.length === 0) {
        toast.warning("Please enter last name");
      } else if (gender.length === 0) {
        toast.warning("Please Select Gender");
      } else if (nationality.length === 0) {
        toast.warning("Please enter Nationality");
      } else if (password.length === 0) {
        toast.warning("Please enter Age");
      } else if (dob.length === 0) {
        toast.warning("Please enter  Birth Date");
      } else if (occupation.length === 0) {
        toast.warning("Please enter Occupation");
      } else if (aadhar.length === 0) {
        toast.warning("Please enter Adhar no");
      } else if (mobile.length === 0) {
        toast.warning("Please enter Mobile NO");
      } else if (email.length === 0) {
        toast.warning("Please enter Email");
      } else if (income.length === 0) {
        toast.warning("Please enter Income");
      } else if (houseNo.length === 0) {
        toast.warning("Please enter Houseno");
      } else if (street.length === 0) {
        toast.warning("Please enter Street");
      } else if (district.length === 0) {
        toast.warning("Please enter District");
      } else if (city.length === 0) {
        toast.warning("Please enter City");
      } else if (state.length === 0) {
        toast.warning("Please enter State");
      } else if (pincode.length === 0) {
        toast.warning("Please enter pincode");
      } else if (partnerfname.length === 0) {
        toast.warning("Please enter Partner last name");
      } else if (partnerlname.length === 0) {
        toast.warning("Please enter Partner last name");
      } else if (partneraadhar.length === 0) {
        toast.warning("Please enter Partner Adhar No");
      } else if (partnerdob.length === 0) {
        toast.warning("Please enter Partner Birth Date");
      } else if (partnermobile.length === 0) {
        toast.warning("Please enter Partner Mobile No ");
      } else if (partneremail.length === 0) {
        toast.warning("Please enter Partner Email");
      } else if (partnerincome.length === 0) {
        toast.warning("Please enter Partner  Income");
      } else if (partneroccupation.length === 0) {
        toast.warning("Please select Partner Occupation");
      } else if (partnernationality.length === 0) {
        toast.warning("Please select Partner Nationality");
      } else if (partneraadhar.length === 0) {
        toast.warning("Please enter Partner Adhar No");
      } else {
        // call register function to consume register API
        const result = await register1(
          material,
          fname,
          lname,
          gender,
          nationality,
          dob,
          occupation,
          aadhar,
          mobile,
          email,
          income,
          houseNo,
          street,
          district,
          city,
          state,
          pincode,
          partnerfname,
          partnerlname,
          partnergender,
          partnerdob,
          partneraadhar,
          partnermobile,
          partneremail,
          partnerincome,
          partneroccupation,
          partnernationality,
          password
        );
        if (result.message="success") {
          toast.success("Registration Successfull");
          navigate("/");
        } else {
          toast.error("Registration Failed");
        }
      }
    } else {
      if (fname.length === 0) {
        toast.warning("Please enter first name");
      } else if (lname.length === 0) {
        toast.warning("Please enter last name");
      } else if (gender.length === 0) {
        toast.warning("Please Select Gender");
      } else if (nationality.length === 0) {
        toast.warning("Please enter Nationality");
      } else if (password.length === 0) {
        toast.warning("Please enter Age");
      } else if (dob.length === 0) {
        toast.warning("Please enter  Birth Date");
      } else if (occupation.length === 0) {
        toast.warning("Please enter Occupation");
      } else if (aadhar.length === 0) {
        toast.warning("Please enter Adhar no");
      } else if (mobile.length === 0) {
        toast.warning("Please enter Mobile NO");
      } else if (email.length === 0) {
        toast.warning("Please enter Email");
      } else if (income.length === 0) {
        toast.warning("Please enter Income");
      } else if (houseNo.length === 0) {
        toast.warning("Please enter Houseno");
      } else if (street.length === 0) {
        toast.warning("Please enter Street");
      } else if (district.length === 0) {
        toast.warning("Please enter District");
      } else if (city.length === 0) {
        toast.warning("Please enter City");
      } else if (state.length === 0) {
        toast.warning("Please enter State");
      } else if (pincode.length === 0) {
        toast.warning("Please enter pincode");
      } else {
        const result = await register2(
          material,
          fname,
          lname,
          gender,
          nationality,
          dob,
          occupation,
          aadhar,
          mobile,
          email,
          income,
          houseNo,
          street,
          district,
          city,
          state,
          pincode,
          password,
        );
        if (result.message="success") {
          toast.success("Registration Successfull");
          navigate("/");
        } else {
          toast.error("Registration Failed");
        }
      }
    }
  };

  // console.log(
  //   material,
  //   fname,
  //   lname,
  //   Gender,
  //   Nationality,
  //   Age,
  //   Dob,
  //   Occupation,
  //   Adhar,
  //   Mobile,
  //   Email,
  //   Income,
  //   Houseno,
  //   Street,
  //   District,
  //   City,
  //   State,
  //   Pincode,
  //   Partnerfname,
  //   Partnerlname,
  //   Partnergender,
  //   Partnerdob,
  //   Partneradhar_no,
  //   Partnermobile,
  //   Partneremail,
  //   Partnerincome,
  //   Partneroccupation,
  //   Partnerage,
  //   Partnernationality
  // );

  return (
    <div className="container_background">
      <div className="registration-container">
        <h1 className="form-title text-primary">Parent Registration</h1>

        <form>
          <h3>Marital Detail </h3>

          <div className="form-group">
            <label>Material Status :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setMaterial(e.target.value);
              }}
              name="material_status"
              id="material_status"
            >
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Applicant Gender :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name="applicant_gender"
              id="applicant_gender"
            >
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <h3>
              Personal Information :{gender === "Male" ? "Male" : "Female"}
            </h3>
          </div>

          <div className="form-group">
            <label>First Name :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setfname(e.target.value);
              }}
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <label>Last Name :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setlname(e.target.value);
              }}
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>

          <div className="form-group">
            <label>Nationality :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setNationality(e.target.value);
              }}
              name="nationality"
              id="nationality"
            >
              <option value="">-- select one --</option>
              <option value="Indian">Indian</option>
              <option value="NRI">NRI</option>
            </select>
          </div>
          <div className="form-group">
            <label>Password :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              type="text"
              name="age"
              id="age"
            />
          </div>

          <div className="form-group">
            <label>Date Of Birth :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              name="date"
              id="date"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              type="date"
            />
          </div>
          <div className="form-group">
            <label>Occupation :</label>
          </div>
          <div className="form-group">
            <select
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
              name="occupation"
              id="occupation"
            >
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <optgroup label="Healthcare Practitioners and Technical Occupations:">
                <option value="1">- Chiropractor</option>
                <option value="2">- Dentist</option>
                <option value="3">- Dietitian or Nutritionist</option>
                <option value="4">- Optometrist</option>
                <option value="5">- Pharmacist</option>
                <option value="6">- Physician</option>
                <option value="7">- Physician Assistant</option>
                <option value="8">- Podiatrist</option>
                <option value="9">- Registered Nurse</option>
                <option value="10">- Therapist</option>
                <option value="11">- Veterinarian</option>
                <option value="12">- Health Technologist or Technician</option>
                <option value="13">
                  - Other Healthcare Practitioners and Technical Occupation
                </option>
              </optgroup>
              <optgroup label="Healthcare Support Occupations:">
                <option value="14">
                  - Nursing, Psychiatric, or Home Health Aide
                </option>
                <option value="15">
                  - Occupational and Physical Therapist Assistant or Aide
                </option>
                <option value="16">
                  - Other Healthcare Support Occupation
                </option>
              </optgroup>
              <optgroup label="Business, Executive, Management, and Financial Occupations:">
                <option value="17">- Chief Executive</option>
                <option value="18">- General and Operations Manager</option>
                <option value="19">
                  - Advertising, Marketing, Promotions, Public Relations, and
                  Sales Manager
                </option>
                <option value="20">
                  - Operations Specialties Manager (e.g., IT or HR Manager)
                </option>
                <option value="21">- Construction Manager</option>
                <option value="22">- Engineering Manager</option>
                <option value="23">- Accountant, Auditor</option>
                <option value="24">
                  - Business Operations or Financial Specialist
                </option>
                <option value="25">- Business Owner</option>
                <option value="26">
                  - Other Business, Executive, Management, Financial Occupation
                </option>
              </optgroup>
              <optgroup label="Architecture and Engineering Occupations:">
                <option value="27">
                  - Architect, Surveyor, or Cartographer
                </option>
                <option value="28">- Engineer</option>
                <option value="29">
                  - Other Architecture and Engineering Occupation
                </option>
              </optgroup>
              <optgroup label="Education, Training, and Library Occupations:">
                <option value="30">
                  - Postsecondary Teacher (e.g., College Professor)
                </option>
                <option value="31">
                  - Primary, Secondary, or Special Education School Teacher
                </option>
                <option value="32">- Other Teacher or Instructor</option>
                <option value="33">
                  - Other Education, Training, and Library Occupation
                </option>
              </optgroup>
              <optgroup label="Other Professional Occupations:">
                <option value="34">
                  - Arts, Design, Entertainment, Sports, and Media Occupations
                </option>
                <option value="35">
                  - Computer Specialist, Mathematical Science
                </option>
                <option value="36">
                  - Counselor, Social Worker, or Other Community and Social
                  Service Specialist
                </option>
                <option value="37">- Lawyer, Judge</option>
                <option value="38">
                  - Life Scientist (e.g., Animal, Food, Soil, or Biological
                  Scientist, Zoologist)
                </option>
                <option value="39">
                  - Physical Scientist (e.g., Astronomer, Physicist, Chemist,
                  Hydrologist)
                </option>
                <option value="40">
                  - Religious Worker (e.g., Clergy, Director of Religious
                  Activities or Education)
                </option>
                <option value="41">
                  - Social Scientist and Related Worker
                </option>
                <option value="42">- Other Professional Occupation</option>
              </optgroup>
              <optgroup label="Office and Administrative Support Occupations:">
                <option value="43">
                  - Supervisor of Administrative Support Workers
                </option>
                <option value="44">- Financial Clerk</option>
                <option value="45">
                  - Secretary or Administrative Assistant
                </option>
                <option value="46">
                  - Material Recording, Scheduling, and Dispatching Worker
                </option>
                <option value="47">
                  - Other Office and Administrative Support Occupation
                </option>
              </optgroup>
              <optgroup label="Services Occupations:">
                <option value="48">
                  - Protective Service (e.g., Fire Fighting, Police Officer,
                  Correctional Officer)
                </option>
                <option value="49">- Chef or Head Cook</option>
                <option value="50">- Cook or Food Preparation Worker</option>
                <option value="51">
                  - Food and Beverage Serving Worker (e.g., Bartender, Waiter,
                  Waitress)
                </option>
                <option value="52">
                  - Building and Grounds Cleaning and Maintenance
                </option>
                <option value="53">
                  - Personal Care and Service (e.g., Hairdresser, Flight
                  Attendant, Concierge)
                </option>
                <option value="54">- Sales Supervisor, Retail Sales</option>
                <option value="55">- Retail Sales Worker</option>
                <option value="56">- Insurance Sales Agent</option>
                <option value="57">- Sales Representative</option>
                <option value="58">- Real Estate Sales Agent</option>
                <option value="59">- Other Services Occupation</option>
              </optgroup>
              <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                <option value="60">
                  - Construction and Extraction (e.g., Construction Laborer,
                  Electrician)
                </option>
                <option value="61">- Farming, Fishing, and Forestry</option>
                <option value="62">
                  - Installation, Maintenance, and Repair
                </option>
                <option value="63">- Production Occupations</option>
                <option value="64">
                  - Other Agriculture, Maintenance, Repair, and Skilled Crafts
                  Occupation
                </option>
              </optgroup>
              <optgroup label="Transportation Occupations:">
                <option value="65">- Aircraft Pilot or Flight Engineer</option>
                <option value="66">
                  - Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck
                  Driver)
                </option>
                <option value="67">- Other Transportation Occupation</option>
              </optgroup>
              <optgroup label="Other Occupations:">
                <option value="68">- Military</option>
                <option value="69">- Homemaker</option>
                <option value="70">- Other Occupation</option>
                <option value="71">- Don't Know</option>
                <option value="72">- Not Applicable</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <label>Adhar Card No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setAdhar(e.target.value);
              }}
              type="number"
              name="adhar_card_no"
              id="adhar"
            ></input>
          </div>
          <div className="form-group">
            <label>Mobile No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              type="number"
              name="mobile_no"
              id="mobile"
            ></input>
          </div>

          <div className="form-group">
            <label>Email ID :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            ></input>
          </div>
          <div className="form-group">
            <label>Annual Income :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setIncome(e.target.value);
              }}
              type="text"
            ></input>
          </div>

          <h3>Address :</h3>

          <div className="form-group">
            <label>House No :</label>
          </div>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => {
                setHouse(e.target.value);
              }}
              type="text"
            ></input>
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
            ></input>
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
            ></input>
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
            ></input>
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
            ></input>
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
              type="text"
            ></input>
          </div>

          {material === "Married" ? (
            <div>
              <h3>
                Personal Information :{gender === "Male" ? "Female" : "Male"}
              </h3>

              <div className="form-group">
                <label>First Name</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerfname(e.target.value);
                    setPartnergender(gender === "Male" ? "Female" : "Male")
                  }}
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerlname(e.target.value);
                  }}
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </div>

              <div className="form-group">
                <label>Nationality :</label>
              </div>
              <div className="form-group">
                <select
                  onChange={(e) => {
                    setPartnernationality(e.target.value);
                  }}
                  name="nationality"
                  id="nationality"
                >
                  <option value="">-- select one --</option>
                  <option value="Indian">Indian</option>
                  <option value="NRI">NRI</option>
                </select>
              </div>

              <div className="form-group">
                <label>Age :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerage(e.target.value);
                  }}
                  type="number"
                  name="age"
                  id="age"
                />
              </div>

              <div className="form-group">
                <label>Date Of Birth :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerdob(e.target.value);
                  }}
                  type="date"
                ></input>
              </div>
              <div className="form-group">
                <label>Occupation :</label>
              </div>
              <div className="form-group">
                <select
                  onChange={(e) => {
                    setPartneroccupation(e.target.value);
                  }}
                  name="occupation"
                  id="occupation"
                >
                  <option value="" selected="selected" disabled="disabled">
                    -- select one --
                  </option>
                  <optgroup label="Healthcare Practitioners and Technical Occupations:">
                    <option value="1">- Chiropractor</option>
                    <option value="2">- Dentist</option>
                    <option value="3">- Dietitian or Nutritionist</option>
                    <option value="4">- Optometrist</option>
                    <option value="5">- Pharmacist</option>
                    <option value="6">- Physician</option>
                    <option value="7">- Physician Assistant</option>
                    <option value="8">- Podiatrist</option>
                    <option value="9">- Registered Nurse</option>
                    <option value="10">- Therapist</option>
                    <option value="11">- Veterinarian</option>
                    <option value="12">
                      - Health Technologist or Technician
                    </option>
                    <option value="13">
                      - Other Healthcare Practitioners and Technical Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Healthcare Support Occupations:">
                    <option value="14">
                      - Nursing, Psychiatric, or Home Health Aide
                    </option>
                    <option value="15">
                      - Occupational and Physical Therapist Assistant or Aide
                    </option>
                    <option value="16">
                      - Other Healthcare Support Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Business, Executive, Management, and Financial Occupations:">
                    <option value="17">- Chief Executive</option>
                    <option value="18">- General and Operations Manager</option>
                    <option value="19">
                      - Advertising, Marketing, Promotions, Public Relations,
                      and Sales Manager
                    </option>
                    <option value="20">
                      - Operations Specialties Manager (e.g., IT or HR Manager)
                    </option>
                    <option value="21">- Construction Manager</option>
                    <option value="22">- Engineering Manager</option>
                    <option value="23">- Accountant, Auditor</option>
                    <option value="24">
                      - Business Operations or Financial Specialist
                    </option>
                    <option value="25">- Business Owner</option>
                    <option value="26">
                      - Other Business, Executive, Management, Financial
                      Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Architecture and Engineering Occupations:">
                    <option value="27">
                      - Architect, Surveyor, or Cartographer
                    </option>
                    <option value="28">- Engineer</option>
                    <option value="29">
                      - Other Architecture and Engineering Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Education, Training, and Library Occupations:">
                    <option value="30">
                      - Postsecondary Teacher (e.g., College Professor)
                    </option>
                    <option value="31">
                      - Primary, Secondary, or Special Education School Teacher
                    </option>
                    <option value="32">- Other Teacher or Instructor</option>
                    <option value="33">
                      - Other Education, Training, and Library Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Other Professional Occupations:">
                    <option value="34">
                      - Arts, Design, Entertainment, Sports, and Media
                      Occupations
                    </option>
                    <option value="35">
                      - Computer Specialist, Mathematical Science
                    </option>
                    <option value="36">
                      - Counselor, Social Worker, or Other Community and Social
                      Service Specialist
                    </option>
                    <option value="37">- Lawyer, Judge</option>
                    <option value="38">
                      - Life Scientist (e.g., Animal, Food, Soil, or Biological
                      Scientist, Zoologist)
                    </option>
                    <option value="39">
                      - Physical Scientist (e.g., Astronomer, Physicist,
                      Chemist, Hydrologist)
                    </option>
                    <option value="40">
                      - Religious Worker (e.g., Clergy, Director of Religious
                      Activities or Education)
                    </option>
                    <option value="41">
                      - Social Scientist and Related Worker
                    </option>
                    <option value="42">- Other Professional Occupation</option>
                  </optgroup>
                  <optgroup label="Office and Administrative Support Occupations:">
                    <option value="43">
                      - Supervisor of Administrative Support Workers
                    </option>
                    <option value="44">- Financial Clerk</option>
                    <option value="45">
                      - Secretary or Administrative Assistant
                    </option>
                    <option value="46">
                      - Material Recording, Scheduling, and Dispatching Worker
                    </option>
                    <option value="47">
                      - Other Office and Administrative Support Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Services Occupations:">
                    <option value="48">
                      - Protective Service (e.g., Fire Fighting, Police Officer,
                      Correctional Officer)
                    </option>
                    <option value="49">- Chef or Head Cook</option>
                    <option value="50">
                      - Cook or Food Preparation Worker
                    </option>
                    <option value="51">
                      - Food and Beverage Serving Worker (e.g., Bartender,
                      Waiter, Waitress)
                    </option>
                    <option value="52">
                      - Building and Grounds Cleaning and Maintenance
                    </option>
                    <option value="53">
                      - Personal Care and Service (e.g., Hairdresser, Flight
                      Attendant, Concierge)
                    </option>
                    <option value="54">- Sales Supervisor, Retail Sales</option>
                    <option value="55">- Retail Sales Worker</option>
                    <option value="56">- Insurance Sales Agent</option>
                    <option value="57">- Sales Representative</option>
                    <option value="58">- Real Estate Sales Agent</option>
                    <option value="59">- Other Services Occupation</option>
                  </optgroup>
                  <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                    <option value="60">
                      - Construction and Extraction (e.g., Construction Laborer,
                      Electrician)
                    </option>
                    <option value="61">- Farming, Fishing, and Forestry</option>
                    <option value="62">
                      - Installation, Maintenance, and Repair
                    </option>
                    <option value="63">- Production Occupations</option>
                    <option value="64">
                      - Other Agriculture, Maintenance, Repair, and Skilled
                      Crafts Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Transportation Occupations:">
                    <option value="65">
                      - Aircraft Pilot or Flight Engineer
                    </option>
                    <option value="66">
                      - Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or
                      Truck Driver)
                    </option>
                    <option value="67">
                      - Other Transportation Occupation
                    </option>
                  </optgroup>
                  <optgroup label="Other Occupations:">
                    <option value="68">- Military</option>
                    <option value="69">- Homemaker</option>
                    <option value="70">- Other Occupation</option>
                    <option value="71">- Don't Know</option>
                    <option value="72">- Not Applicable</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-group">
                <label>Adhar Card No :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartneradhar_no(e.target.value);
                  }}
                  type="number"
                  name="adhar_card_no"
                  id="adhar"
                ></input>
              </div>
              <div className="form-group">
                <label>Mobile No :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnermobile(e.target.value);
                  }}
                  type="number"
                  name="mobile_no"
                  id="mobile"
                ></input>
              </div>

              <div className="form-group">
                <label>Email ID :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartneremail(e.target.value);
                  }}
                  type="email"
                ></input>
              </div>
              <div className="form-group">
                <label>Annual Income :</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setPartnerincome(e.target.value);
                  }}
                  type="text"
                ></input>
              </div>
            </div>
          ) : null}

          {/* <div className="col" rowspan="2" style={{ textAlign: "center" }}> */}
          <center>
            <button
              onClick={onRegister}

              type="button
              "
              className="btn  btn-primary"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};
export default ParentRegistration;
