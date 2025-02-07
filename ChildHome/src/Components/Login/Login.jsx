import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { useAuth } from "../Authenticate/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //Testing data
      const data = {
        email: "om@gmail.com",
        password: "1234",
        userRole: "ROLE_PARENT",
        id: "1",
      };

      // const response = await axios.post("/api/login", { email, password });
      // const userData = response.data;

      const userData = data; //  demo purposes

      if (userData) {
        setUser(userData);

        if (userData.userRole === "ROLE_CHILDHOME") {
          navigate("/childHomeProfile");
        } else if (userData.userRole === "ROLE_ADMIN") {
          navigate("/admin");
        } else if (userData.userRole === "ROLE_PARENT") {
          navigate("/parent");
        } else if (userData.userRole === "ROLE_EMPLOYEE") {
          navigate("/socialWorkerProfile");
        } else {
          toast.warning("Invalid credentials or user role.");
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <h2 className="login-title">Sign In</h2>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-options">
            <a href="/">Forgot Password?</a>
            <a href="/">Register</a>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
