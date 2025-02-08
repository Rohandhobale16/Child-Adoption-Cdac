import { useState } from "react";
import Parent_Slider from "./Parent_Slider";
import "../Parent/Parent_Slider.css";
import { useAuth } from "../Authenticate/AuthContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchParent } from "../../services/Parentservice";

const Parentprofile = () => {
  return (
    <div
      className="container-fluid"
      // style={{
      //   backgroundImage: `url('/images/ParentProfileBackground.avif')`,
      //   backgroundRepeat: `no-repeat`,
      //   backgroundPosition: `center`,
      // }}
    >
      <div className="row">
        <div className="col-2 ">
          <Parent_Slider />
        </div>
        <div className="col-8" style={{ textAlign: `center` }}>
          <img
            src="/images/ParentProfileBackground.avif"
            class="img-fluid"
            alt="Parent Dashborad image"
          />
        </div>
        <div className="col-2 " style={{ float: `right` }}>
          <Profile />
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const { user, logout } = useAuth();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const response = async () => {
      if (user) {
        try {
          const response = await fetchParent(user);

          const data = {
            name: response.name,
            email: response.email,
            phone: response.mobile,
          };
          setProfile(data);

          // //Testing data
          // const dummyData = {
          //   name: "omkar",
          //   email: "om@gmail.com",
          //   phone: "2345678",
          // };
          // setProfile(dummyData);
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error("Failed to fetch data");
        }
      }
    };
    response();
  }, [user]);
  return (
    <div>
      <h5 class="">Welcome {profile.name}</h5>
      <p class="">
        Email: {profile.email}
        <br />
        Mobile No: {profile.mobile}
      </p>
      <button onClick={logout} class="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Parentprofile;
