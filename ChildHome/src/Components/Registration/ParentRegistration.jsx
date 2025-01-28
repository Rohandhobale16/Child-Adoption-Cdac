import React, { useState } from 'react';

const ParentRegistration = () => {
  const [material, setMaterial] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [adhar, setAdhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [houseNo, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  
  const [partnerFname, setPartnerFname] = useState("");
  const [partnerLname, setPartnerLname] = useState("");
  const [partnerGender, setPartnerGender] = useState("");
  const [partnerDob, setPartnerDob] = useState("");
  const [partnerAdharNo, setPartnerAdharNo] = useState("");
  const [partnerMobile, setPartnerMobile] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerIncome, setPartnerIncome] = useState("");
  const [partnerOccupation, setPartnerOccupation] = useState("");
  const [partnerNationality, setPartnerNationality] = useState("");
  const [partnerAge, setPartnerAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      material,
      fname,
      lname,
      gender,
      nationality,
      age,
      dob,
      occupation,
      adhar,
      mobile,
      email,
      income,
      houseNo,
      street,
      district,
      city,
      state,
      pincode,
      partner: {
        partnerFname,
        partnerLname,
        partnerGender,
        partnerDob,
        partnerAdharNo,
        partnerMobile,
        partnerEmail,
        partnerIncome,
        partnerOccupation,
        partnerNationality,
        partnerAge,
      }
    };
    console.log(formData);
  };

  return (
    <div className="container my-5">
      <h2>Parent Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Marital Detail */}
        <div className="mb-3">
          <label>Material Status:</label>
          <select
            className="form-control"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        {/* Applicant Gender */}
        <div className="mb-3">
          <label>Applicant Gender:</label>
          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Personal Information */}
        <h4>Personal Information</h4>
        <div className="mb-3">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nationality:</label>
          <select
            className="form-control"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="indian">Indian</option>
            <option value="foreign">Foreign</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Date Of Birth:</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Occupation:</label>
          <select
            className="form-control"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="employed">Employed</option>
            <option value="self-employed">Self-employed</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Adhar Card No:</label>
          <input
            type="text"
            className="form-control"
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Mobile No:</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email ID:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Annual Income:</label>
          <input
            type="number"
            className="form-control"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        {/* Address */}
        <h4>Address</h4>
        <div className="mb-3">
          <label>House No:</label>
          <input
            type="text"
            className="form-control"
            value={houseNo}
            onChange={(e) => setHouse(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Street:</label>
          <input
            type="text"
            className="form-control"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>District:</label>
          <input
            type="text"
            className="form-control"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>State:</label>
          <input
            type="text"
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Pincode:</label>
          <input
            type="text"
            className="form-control"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        {/* Partner Details */}
        <h4>Partner Details</h4>
        <div className="mb-3">
          <label>Partner First Name:</label>
          <input
            type="text"
            className="form-control"
            value={partnerFname}
            onChange={(e) => setPartnerFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={partnerLname}
            onChange={(e) => setPartnerLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Gender:</label>
          <select
            className="form-control"
            value={partnerGender}
            onChange={(e) => setPartnerGender(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Partner Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            value={partnerDob}
            onChange={(e) => setPartnerDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Adhar Card No:</label>
          <input
            type="text"
            className="form-control"
            value={partnerAdharNo}
            onChange={(e) => setPartnerAdharNo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Mobile No:</label>
          <input
            type="text"
            className="form-control"
            value={partnerMobile}
            onChange={(e) => setPartnerMobile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Email ID:</label>
          <input
            type="email"
            className="form-control"
            value={partnerEmail}
            onChange={(e) => setPartnerEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Income:</label>
          <input
            type="number"
            className="form-control"
            value={partnerIncome}
            onChange={(e) => setPartnerIncome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Partner Occupation:</label>
          <select
            className="form-control"
            value={partnerOccupation}
            onChange={(e) => setPartnerOccupation(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="employed">Employed</option>
            <option value="self-employed">Self-employed</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Partner Nationality:</label>
          <select
            className="form-control"
            value={partnerNationality}
            onChange={(e) => setPartnerNationality(e.target.value)}
          >
            <option value="">-- select one --</option>
            <option value="indian">Indian</option>
            <option value="foreign">Foreign</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Partner Age:</label>
          <input
            type="number"
            className="form-control"
            value={partnerAge}
            onChange={(e) => setPartnerAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParentRegistration;
