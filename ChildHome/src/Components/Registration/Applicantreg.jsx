import { useState } from "react";
import "./Registration.css";
import { register } from "../../Routes/Applicationrouter";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Applicantreg = () => {
  const nevigate = useNavigate();

  const [material, setMaterial] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [Gender, setGender] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Age, setAge] = useState("");
  const [Dob, setDob] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Adhar, setAdhar] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Income, setIncome] = useState("");
  const [Houseno, setHouse] = useState("");
  const [Street, setStreet] = useState("");
  const [District, setDistrict] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Partnerfname, setPartnerfname] = useState("");
  const [Partnerlname, setPartnerlname] = useState("");
  const [Partnergender, setPartnergender] = useState("");
  const [Partnerdob, setPartnerdob] = useState("");
  const [Partneradhar_no, setPartneradhar_no] = useState("");
  const [Partnermobile, setPartnermobile] = useState("");
  const [Partneremail, setPartneremail] = useState("");
  const [Partnerincome, setPartnerincome] = useState("");
  const [Partneroccupation, setPartneroccupation] = useState("");
  const [Partnernationality, setPartnernationality] = useState("");
  const [Partnerage, setPartnerage] = useState("");

  const onRegister = async () => {
    if (material.length === 0) {
      toast.warning("Please select material");
    } else if (material == "Married") {
      setPartnergender(Gender == "Male" ? "Female" : "Male");
      if (fname.length === 0) {
        toast.warning("Please enter first name");
      } else if (lname.length === 0) {
        toast.warning("Please enter last name");
      } else if (Gender.length === 0) {
        toast.warning("Please Select Gender");
      } else if (Nationality.length === 0) {
        toast.warning("Please enter Nationality");
      } else if (Age.length === 0) {
        toast.warning("Please enter Age");
      } else if (Dob.length === 0) {
        toast.warning("Please enter  Birth Date");
      } else if (Occupation.length === 0) {
        toast.warning("Please enter Occupation");
      } else if (Adhar.length === 0) {
        toast.warning("Please enter Adhar no");
      } else if (Mobile.length === 0) {
        toast.warning("Please enter Mobile NO");
      } else if (Email.length === 0) {
        toast.warning("Please enter Email");
      } else if (Income.length === 0) {
        toast.warning("Please enter Income");
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
      } else if (Partnerfname.length === 0) {
        toast.warning("Please enter Partner last name");
      } else if (Partnerlname.length === 0) {
        toast.warning("Please enter Partner last name");
      } else if (Partneradhar_no.length === 0) {
        toast.warning("Please enter Partner Adhar No");
      } else if (Partnerdob.length === 0) {
        toast.warning("Please enter Partner Birth Date");
      } else if (Partnermobile.length === 0) {
        toast.warning("Please enter Partner Mobile No ");
      } else if (Partneremail.length === 0) {
        toast.warning("Please enter Partner Email");
      } else if (Partnerincome.length === 0) {
        toast.warning("Please enter Partner  Income");
      } else if (Partneroccupation.length === 0) {
        toast.warning("Please select Partner Occupation");
      } else if (Partnernationality.length === 0) {
        toast.warning("Please select Partner Nationality");
      } else if (Partneradhar_no.length === 0) {
        toast.warning("Please enter Partner Adhar No");
      } else {
        // call register function to consume register API
        const result = await register(
          material,
          fname,
          lname,
          Gender,
          Nationality,
          Age,
          Dob,
          Occupation,
          Adhar,
          Mobile,
          Email,
          Income,
          Houseno,
          Street,
          District,
          City,
          State,
          Pincode,
          Partnerfname,
          Partnerlname,
          Partnergender,
          Partnerdob,
          Partneradhar_no,
          Partnermobile,
          Partneremail,
          Partnerincome,
          Partneroccupation,
          Partnerage,
          Partnernationality
        );
        if (result) {
          toast.success("Registration Successfull");
          nevigate("/");
        } else {
          toast.error("Registration Failed");
        }
      }
    } else {
      if (fname.length === 0) {
        toast.warning("Please enter first name");
      } else if (lname.length === 0) {
        toast.warning("Please enter last name");
      } else if (Gender.length === 0) {
        toast.warning("Please Select Gender");
      } else if (Nationality.length === 0) {
        toast.warning("Please enter Nationality");
      } else if (Age.length === 0) {
        toast.warning("Please enter Age");
      } else if (Dob.length === 0) {
        toast.warning("Please enter  Birth Date");
      } else if (Occupation.length === 0) {
        toast.warning("Please enter Occupation");
      } else if (Adhar.length === 0) {
        toast.warning("Please enter Adhar no");
      } else if (Mobile.length === 0) {
        toast.warning("Please enter Mobile NO");
      } else if (Email.length === 0) {
        toast.warning("Please enter Email");
      } else if (Income.length === 0) {
        toast.warning("Please enter Income");
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
      } else {
        const result = await register(
          material,
          fname,
          lname,
          Gender,
          Nationality,
          Age,
          Dob,
          Occupation,
          Adhar,
          Mobile,
          Email,
          Income,
          Houseno,
          Street,
          District,
          City,
          State,
          Pincode
        );
        if (result) {
          toast.success("Registration Successfull");
          nevigate("/");
        } else {
          toast.error("Registration Failed");
        }
      }
    }
  };

  console.log(
    material,
    fname,
    lname,
    Gender,
    Nationality,
    Age,
    Dob,
    Occupation,
    Adhar,
    Mobile,
    Email,
    Income,
    Houseno,
    Street,
    District,
    City,
    State,
    Pincode,
    Partnerfname,
    Partnerlname,
    Partnergender,
    Partnerdob,
    Partneradhar_no,
    Partnermobile,
    Partneremail,
    Partnerincome,
    Partneroccupation,
    Partnerage,
    Partnernationality
  );

  return (
    <div className="container">
      <div className="form_container">
        <h1>Parent Registration</h1>
        <hr />

        <table>
          <div>
            <tr>
              <td>
                <h3>Marital Detail </h3>
              </td>
            </tr>
            <tr>
              <td>
                <label>Material Status :</label>
              </td>
              <td>
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
              </td>
              <td>
                <label>Applicant Gender :</label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  Personal Information :{Gender == "Male" ? "Male" : "Female"}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <label>First Name :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </td>
              <td>
                <label>Last Name :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Nationality :</label>
              </td>
              <td>
                <select
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                  name="nationality"
                  id="nationality"
                >
                  <option value="">-- select one --</option>
                  <option value="afghan">Afghan</option>
                  <option value="albanian">Albanian</option>
                  <option value="algerian">Algerian</option>
                  <option value="american">American</option>
                  <option value="andorran">Andorran</option>
                  <option value="angolan">Angolan</option>
                  <option value="antiguans">Antiguans</option>
                  <option value="argentinean">Argentinean</option>
                  <option value="armenian">Armenian</option>
                  <option value="australian">Australian</option>
                  <option value="austrian">Austrian</option>
                  <option value="azerbaijani">Azerbaijani</option>
                  <option value="bahamian">Bahamian</option>
                  <option value="bahraini">Bahraini</option>
                  <option value="bangladeshi">Bangladeshi</option>
                  <option value="barbadian">Barbadian</option>
                  <option value="barbudans">Barbudans</option>
                  <option value="batswana">Batswana</option>
                  <option value="belarusian">Belarusian</option>
                  <option value="belgian">Belgian</option>
                  <option value="belizean">Belizean</option>
                  <option value="beninese">Beninese</option>
                  <option value="bhutanese">Bhutanese</option>
                  <option value="bolivian">Bolivian</option>
                  <option value="bosnian">Bosnian</option>
                  <option value="brazilian">Brazilian</option>
                  <option value="british">British</option>
                  <option value="bruneian">Bruneian</option>
                  <option value="bulgarian">Bulgarian</option>
                  <option value="burkinabe">Burkinabe</option>
                  <option value="burmese">Burmese</option>
                  <option value="burundian">Burundian</option>
                  <option value="cambodian">Cambodian</option>
                  <option value="cameroonian">Cameroonian</option>
                  <option value="canadian">Canadian</option>
                  <option value="cape verdean">Cape Verdean</option>
                  <option value="central african">Central African</option>
                  <option value="chadian">Chadian</option>
                  <option value="chilean">Chilean</option>
                  <option value="chinese">Chinese</option>
                  <option value="colombian">Colombian</option>
                  <option value="comoran">Comoran</option>
                  <option value="congolese">Congolese</option>
                  <option value="costa rican">Costa Rican</option>
                  <option value="croatian">Croatian</option>
                  <option value="cuban">Cuban</option>
                  <option value="cypriot">Cypriot</option>
                  <option value="czech">Czech</option>
                  <option value="danish">Danish</option>
                  <option value="djibouti">Djibouti</option>
                  <option value="dominican">Dominican</option>
                  <option value="dutch">Dutch</option>
                  <option value="east timorese">East Timorese</option>
                  <option value="ecuadorean">Ecuadorean</option>
                  <option value="egyptian">Egyptian</option>
                  <option value="emirian">Emirian</option>
                  <option value="equatorial guinean">Equatorial Guinean</option>
                  <option value="eritrean">Eritrean</option>
                  <option value="estonian">Estonian</option>
                  <option value="ethiopian">Ethiopian</option>
                  <option value="fijian">Fijian</option>
                  <option value="filipino">Filipino</option>
                  <option value="finnish">Finnish</option>
                  <option value="french">French</option>
                  <option value="gabonese">Gabonese</option>
                  <option value="gambian">Gambian</option>
                  <option value="georgian">Georgian</option>
                  <option value="german">German</option>
                  <option value="ghanaian">Ghanaian</option>
                  <option value="greek">Greek</option>
                  <option value="grenadian">Grenadian</option>
                  <option value="guatemalan">Guatemalan</option>
                  <option value="guinea-bissauan">Guinea-Bissauan</option>
                  <option value="guinean">Guinean</option>
                  <option value="guyanese">Guyanese</option>
                  <option value="haitian">Haitian</option>
                  <option value="herzegovinian">Herzegovinian</option>
                  <option value="honduran">Honduran</option>
                  <option value="hungarian">Hungarian</option>
                  <option value="icelander">Icelander</option>
                  <option value="indian">Indian</option>
                  <option value="indonesian">Indonesian</option>
                  <option value="iranian">Iranian</option>
                  <option value="iraqi">Iraqi</option>
                  <option value="irish">Irish</option>
                  <option value="israeli">Israeli</option>
                  <option value="italian">Italian</option>
                  <option value="ivorian">Ivorian</option>
                  <option value="jamaican">Jamaican</option>
                  <option value="japanese">Japanese</option>
                  <option value="jordanian">Jordanian</option>
                  <option value="kazakhstani">Kazakhstani</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="kittian and nevisian">
                    Kittian and Nevisian
                  </option>
                  <option value="kuwaiti">Kuwaiti</option>
                  <option value="kyrgyz">Kyrgyz</option>
                  <option value="laotian">Laotian</option>
                  <option value="latvian">Latvian</option>
                  <option value="lebanese">Lebanese</option>
                  <option value="liberian">Liberian</option>
                  <option value="libyan">Libyan</option>
                  <option value="liechtensteiner">Liechtensteiner</option>
                  <option value="lithuanian">Lithuanian</option>
                  <option value="luxembourger">Luxembourger</option>
                  <option value="macedonian">Macedonian</option>
                  <option value="malagasy">Malagasy</option>
                  <option value="malawian">Malawian</option>
                  <option value="malaysian">Malaysian</option>
                  <option value="maldivan">Maldivan</option>
                  <option value="malian">Malian</option>
                  <option value="maltese">Maltese</option>
                  <option value="marshallese">Marshallese</option>
                  <option value="mauritanian">Mauritanian</option>
                  <option value="mauritian">Mauritian</option>
                  <option value="mexican">Mexican</option>
                  <option value="micronesian">Micronesian</option>
                  <option value="moldovan">Moldovan</option>
                  <option value="monacan">Monacan</option>
                  <option value="mongolian">Mongolian</option>
                  <option value="moroccan">Moroccan</option>
                  <option value="mosotho">Mosotho</option>
                  <option value="motswana">Motswana</option>
                  <option value="mozambican">Mozambican</option>
                  <option value="namibian">Namibian</option>
                  <option value="nauruan">Nauruan</option>
                  <option value="nepalese">Nepalese</option>
                  <option value="new zealander">New Zealander</option>
                  <option value="ni-vanuatu">Ni-Vanuatu</option>
                  <option value="nicaraguan">Nicaraguan</option>
                  <option value="nigerien">Nigerien</option>
                  <option value="north korean">North Korean</option>
                  <option value="northern irish">Northern Irish</option>
                  <option value="norwegian">Norwegian</option>
                  <option value="omani">Omani</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="palauan">Palauan</option>
                  <option value="panamanian">Panamanian</option>
                  <option value="papua new guinean">Papua New Guinean</option>
                  <option value="paraguayan">Paraguayan</option>
                  <option value="peruvian">Peruvian</option>
                  <option value="polish">Polish</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="qatari">Qatari</option>
                  <option value="romanian">Romanian</option>
                  <option value="russian">Russian</option>
                  <option value="rwandan">Rwandan</option>
                  <option value="saint lucian">Saint Lucian</option>
                  <option value="salvadoran">Salvadoran</option>
                  <option value="samoan">Samoan</option>
                  <option value="san marinese">San Marinese</option>
                  <option value="sao tomean">Sao Tomean</option>
                  <option value="saudi">Saudi</option>
                  <option value="scottish">Scottish</option>
                  <option value="senegalese">Senegalese</option>
                  <option value="serbian">Serbian</option>
                  <option value="seychellois">Seychellois</option>
                  <option value="sierra leonean">Sierra Leonean</option>
                  <option value="singaporean">Singaporean</option>
                  <option value="slovakian">Slovakian</option>
                  <option value="slovenian">Slovenian</option>
                  <option value="solomon islander">Solomon Islander</option>
                  <option value="somali">Somali</option>
                  <option value="south african">South African</option>
                  <option value="south korean">South Korean</option>
                  <option value="spanish">Spanish</option>
                  <option value="sri lankan">Sri Lankan</option>
                  <option value="sudanese">Sudanese</option>
                  <option value="surinamer">Surinamer</option>
                  <option value="swazi">Swazi</option>
                  <option value="swedish">Swedish</option>
                  <option value="swiss">Swiss</option>
                  <option value="syrian">Syrian</option>
                  <option value="taiwanese">Taiwanese</option>
                  <option value="tajik">Tajik</option>
                  <option value="tanzanian">Tanzanian</option>
                  <option value="thai">Thai</option>
                  <option value="togolese">Togolese</option>
                  <option value="tongan">Tongan</option>
                  <option value="trinidadian or tobagonian">
                    Trinidadian or Tobagonian
                  </option>
                  <option value="tunisian">Tunisian</option>
                  <option value="turkish">Turkish</option>
                  <option value="tuvaluan">Tuvaluan</option>
                  <option value="ugandan">Ugandan</option>
                  <option value="ukrainian">Ukrainian</option>
                  <option value="uruguayan">Uruguayan</option>
                  <option value="uzbekistani">Uzbekistani</option>
                  <option value="venezuelan">Venezuelan</option>
                  <option value="vietnamese">Vietnamese</option>
                  <option value="welsh">Welsh</option>
                  <option value="yemenite">Yemenite</option>
                  <option value="zambian">Zambian</option>
                  <option value="zimbabwean">Zimbabwean</option>
                </select>
              </td>
              <td>
                <label>Age :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="number"
                  name="age"
                  id="age"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Date Of Birth :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  type="date"
                ></input>
              </td>
              <td>
                <label>Occupation :</label>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <label>Adhar Card No :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setAdhar(e.target.value);
                  }}
                  type="number"
                  name="adhar_card_no"
                  id="adhar"
                ></input>
              </td>
              <td>
                <label>Mobile No :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  type="number"
                  name="mobile_no"
                  id="mobile"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Email ID :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                ></input>
              </td>
              <td>
                <label>Annual Income :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setIncome(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
            </tr>
            <tr>
              <h3>Address :</h3>
            </tr>
            <tr>
              <td>
                <label>House No :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setHouse(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
              <td>
                <label>Street :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>District :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
              <td>
                <label>City :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>State :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
              <td>
                <label>Pincode :</label>
              </td>
              <td>
                <input
                  onChange={(e) => {
                    setPincode(e.target.value);
                  }}
                  type="text"
                ></input>
              </td>
            </tr>
          </div>
          {material === "Married" ? (
            <div>
              <tr>
                <h3>
                  Personal Information :{Gender == "Male" ? "Female" : "Male"}
                </h3>
              </tr>
              <tr>
                <td>
                  <label>First Name</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartnerfname(e.target.value);
                    }}
                    type="text"
                    name="first_name"
                    id="first_name"
                  />
                </td>
                <td>
                  <label>Last Name</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartnerlname(e.target.value);
                    }}
                    type="text"
                    name="last_name"
                    id="last_name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Nationality :</label>
                </td>
                <td>
                  <select
                    onChange={(e) => {
                      setPartnernationality(e.target.value);
                    }}
                    name="nationality"
                    id="nationality"
                  >
                    <option value="">-- select one --</option>
                    <option value="afghan">Afghan</option>
                    <option value="albanian">Albanian</option>
                    <option value="algerian">Algerian</option>
                    <option value="american">American</option>
                    <option value="andorran">Andorran</option>
                    <option value="angolan">Angolan</option>
                    <option value="antiguans">Antiguans</option>
                    <option value="argentinean">Argentinean</option>
                    <option value="armenian">Armenian</option>
                    <option value="australian">Australian</option>
                    <option value="austrian">Austrian</option>
                    <option value="azerbaijani">Azerbaijani</option>
                    <option value="bahamian">Bahamian</option>
                    <option value="bahraini">Bahraini</option>
                    <option value="bangladeshi">Bangladeshi</option>
                    <option value="barbadian">Barbadian</option>
                    <option value="barbudans">Barbudans</option>
                    <option value="batswana">Batswana</option>
                    <option value="belarusian">Belarusian</option>
                    <option value="belgian">Belgian</option>
                    <option value="belizean">Belizean</option>
                    <option value="beninese">Beninese</option>
                    <option value="bhutanese">Bhutanese</option>
                    <option value="bolivian">Bolivian</option>
                    <option value="bosnian">Bosnian</option>
                    <option value="brazilian">Brazilian</option>
                    <option value="british">British</option>
                    <option value="bruneian">Bruneian</option>
                    <option value="bulgarian">Bulgarian</option>
                    <option value="burkinabe">Burkinabe</option>
                    <option value="burmese">Burmese</option>
                    <option value="burundian">Burundian</option>
                    <option value="cambodian">Cambodian</option>
                    <option value="cameroonian">Cameroonian</option>
                    <option value="canadian">Canadian</option>
                    <option value="cape verdean">Cape Verdean</option>
                    <option value="central african">Central African</option>
                    <option value="chadian">Chadian</option>
                    <option value="chilean">Chilean</option>
                    <option value="chinese">Chinese</option>
                    <option value="colombian">Colombian</option>
                    <option value="comoran">Comoran</option>
                    <option value="congolese">Congolese</option>
                    <option value="costa rican">Costa Rican</option>
                    <option value="croatian">Croatian</option>
                    <option value="cuban">Cuban</option>
                    <option value="cypriot">Cypriot</option>
                    <option value="czech">Czech</option>
                    <option value="danish">Danish</option>
                    <option value="djibouti">Djibouti</option>
                    <option value="dominican">Dominican</option>
                    <option value="dutch">Dutch</option>
                    <option value="east timorese">East Timorese</option>
                    <option value="ecuadorean">Ecuadorean</option>
                    <option value="egyptian">Egyptian</option>
                    <option value="emirian">Emirian</option>
                    <option value="equatorial guinean">
                      Equatorial Guinean
                    </option>
                    <option value="eritrean">Eritrean</option>
                    <option value="estonian">Estonian</option>
                    <option value="ethiopian">Ethiopian</option>
                    <option value="fijian">Fijian</option>
                    <option value="filipino">Filipino</option>
                    <option value="finnish">Finnish</option>
                    <option value="french">French</option>
                    <option value="gabonese">Gabonese</option>
                    <option value="gambian">Gambian</option>
                    <option value="georgian">Georgian</option>
                    <option value="german">German</option>
                    <option value="ghanaian">Ghanaian</option>
                    <option value="greek">Greek</option>
                    <option value="grenadian">Grenadian</option>
                    <option value="guatemalan">Guatemalan</option>
                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                    <option value="guinean">Guinean</option>
                    <option value="guyanese">Guyanese</option>
                    <option value="haitian">Haitian</option>
                    <option value="herzegovinian">Herzegovinian</option>
                    <option value="honduran">Honduran</option>
                    <option value="hungarian">Hungarian</option>
                    <option value="icelander">Icelander</option>
                    <option value="indian">Indian</option>
                    <option value="indonesian">Indonesian</option>
                    <option value="iranian">Iranian</option>
                    <option value="iraqi">Iraqi</option>
                    <option value="irish">Irish</option>
                    <option value="israeli">Israeli</option>
                    <option value="italian">Italian</option>
                    <option value="ivorian">Ivorian</option>
                    <option value="jamaican">Jamaican</option>
                    <option value="japanese">Japanese</option>
                    <option value="jordanian">Jordanian</option>
                    <option value="kazakhstani">Kazakhstani</option>
                    <option value="kenyan">Kenyan</option>
                    <option value="kittian and nevisian">
                      Kittian and Nevisian
                    </option>
                    <option value="kuwaiti">Kuwaiti</option>
                    <option value="kyrgyz">Kyrgyz</option>
                    <option value="laotian">Laotian</option>
                    <option value="latvian">Latvian</option>
                    <option value="lebanese">Lebanese</option>
                    <option value="liberian">Liberian</option>
                    <option value="libyan">Libyan</option>
                    <option value="liechtensteiner">Liechtensteiner</option>
                    <option value="lithuanian">Lithuanian</option>
                    <option value="luxembourger">Luxembourger</option>
                    <option value="macedonian">Macedonian</option>
                    <option value="malagasy">Malagasy</option>
                    <option value="malawian">Malawian</option>
                    <option value="malaysian">Malaysian</option>
                    <option value="maldivan">Maldivan</option>
                    <option value="malian">Malian</option>
                    <option value="maltese">Maltese</option>
                    <option value="marshallese">Marshallese</option>
                    <option value="mauritanian">Mauritanian</option>
                    <option value="mauritian">Mauritian</option>
                    <option value="mexican">Mexican</option>
                    <option value="micronesian">Micronesian</option>
                    <option value="moldovan">Moldovan</option>
                    <option value="monacan">Monacan</option>
                    <option value="mongolian">Mongolian</option>
                    <option value="moroccan">Moroccan</option>
                    <option value="mosotho">Mosotho</option>
                    <option value="motswana">Motswana</option>
                    <option value="mozambican">Mozambican</option>
                    <option value="namibian">Namibian</option>
                    <option value="nauruan">Nauruan</option>
                    <option value="nepalese">Nepalese</option>
                    <option value="new zealander">New Zealander</option>
                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                    <option value="nicaraguan">Nicaraguan</option>
                    <option value="nigerien">Nigerien</option>
                    <option value="north korean">North Korean</option>
                    <option value="northern irish">Northern Irish</option>
                    <option value="norwegian">Norwegian</option>
                    <option value="omani">Omani</option>
                    <option value="pakistani">Pakistani</option>
                    <option value="palauan">Palauan</option>
                    <option value="panamanian">Panamanian</option>
                    <option value="papua new guinean">Papua New Guinean</option>
                    <option value="paraguayan">Paraguayan</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="polish">Polish</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="qatari">Qatari</option>
                    <option value="romanian">Romanian</option>
                    <option value="russian">Russian</option>
                    <option value="rwandan">Rwandan</option>
                    <option value="saint lucian">Saint Lucian</option>
                    <option value="salvadoran">Salvadoran</option>
                    <option value="samoan">Samoan</option>
                    <option value="san marinese">San Marinese</option>
                    <option value="sao tomean">Sao Tomean</option>
                    <option value="saudi">Saudi</option>
                    <option value="scottish">Scottish</option>
                    <option value="senegalese">Senegalese</option>
                    <option value="serbian">Serbian</option>
                    <option value="seychellois">Seychellois</option>
                    <option value="sierra leonean">Sierra Leonean</option>
                    <option value="singaporean">Singaporean</option>
                    <option value="slovakian">Slovakian</option>
                    <option value="slovenian">Slovenian</option>
                    <option value="solomon islander">Solomon Islander</option>
                    <option value="somali">Somali</option>
                    <option value="south african">South African</option>
                    <option value="south korean">South Korean</option>
                    <option value="spanish">Spanish</option>
                    <option value="sri lankan">Sri Lankan</option>
                    <option value="sudanese">Sudanese</option>
                    <option value="surinamer">Surinamer</option>
                    <option value="swazi">Swazi</option>
                    <option value="swedish">Swedish</option>
                    <option value="swiss">Swiss</option>
                    <option value="syrian">Syrian</option>
                    <option value="taiwanese">Taiwanese</option>
                    <option value="tajik">Tajik</option>
                    <option value="tanzanian">Tanzanian</option>
                    <option value="thai">Thai</option>
                    <option value="togolese">Togolese</option>
                    <option value="tongan">Tongan</option>
                    <option value="trinidadian or tobagonian">
                      Trinidadian or Tobagonian
                    </option>
                    <option value="tunisian">Tunisian</option>
                    <option value="turkish">Turkish</option>
                    <option value="tuvaluan">Tuvaluan</option>
                    <option value="ugandan">Ugandan</option>
                    <option value="ukrainian">Ukrainian</option>
                    <option value="uruguayan">Uruguayan</option>
                    <option value="uzbekistani">Uzbekistani</option>
                    <option value="venezuelan">Venezuelan</option>
                    <option value="vietnamese">Vietnamese</option>
                    <option value="welsh">Welsh</option>
                    <option value="yemenite">Yemenite</option>
                    <option value="zambian">Zambian</option>
                    <option value="zimbabwean">Zimbabwean</option>
                  </select>
                </td>
                <td>
                  <label>Age :</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartnerage(e.target.value);
                    }}
                    type="number"
                    name="age"
                    id="age"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Date Of Birth :</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartnerdob(e.target.value);
                    }}
                    type="date"
                  ></input>
                </td>
                <td>
                  <label>Occupation :</label>
                </td>
                <td>
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
                        - Other Healthcare Practitioners and Technical
                        Occupation
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
                      <option value="18">
                        - General and Operations Manager
                      </option>
                      <option value="19">
                        - Advertising, Marketing, Promotions, Public Relations,
                        and Sales Manager
                      </option>
                      <option value="20">
                        - Operations Specialties Manager (e.g., IT or HR
                        Manager)
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
                        - Primary, Secondary, or Special Education School
                        Teacher
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
                        - Counselor, Social Worker, or Other Community and
                        Social Service Specialist
                      </option>
                      <option value="37">- Lawyer, Judge</option>
                      <option value="38">
                        - Life Scientist (e.g., Animal, Food, Soil, or
                        Biological Scientist, Zoologist)
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
                      <option value="42">
                        - Other Professional Occupation
                      </option>
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
                        - Protective Service (e.g., Fire Fighting, Police
                        Officer, Correctional Officer)
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
                      <option value="54">
                        - Sales Supervisor, Retail Sales
                      </option>
                      <option value="55">- Retail Sales Worker</option>
                      <option value="56">- Insurance Sales Agent</option>
                      <option value="57">- Sales Representative</option>
                      <option value="58">- Real Estate Sales Agent</option>
                      <option value="59">- Other Services Occupation</option>
                    </optgroup>
                    <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                      <option value="60">
                        - Construction and Extraction (e.g., Construction
                        Laborer, Electrician)
                      </option>
                      <option value="61">
                        - Farming, Fishing, and Forestry
                      </option>
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
                </td>
              </tr>
              <tr>
                <td>
                  <label>Adhar Card No :</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartneradhar_no(e.target.value);
                    }}
                    type="number"
                    name="adhar_card_no"
                    id="adhar"
                  ></input>
                </td>
                <td>
                  <label>Mobile No :</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartnermobile(e.target.value);
                    }}
                    type="number"
                    name="mobile_no"
                    id="mobile"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email ID :</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartneremail(e.target.value);
                    }}
                    type="email"
                  ></input>
                </td>
                <td>
                  <label>Annual Income :</label>
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setPartnerincome(e.target.value);
                    }}
                    type="text"
                  ></input>
                </td>
              </tr>
            </div>
          ) : null}

          <tr>
            <td rowspan="2" style={{ textAlign: "center" }}>
              <button onClick={onRegister} id="btn">
                Register
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Applicantreg;
