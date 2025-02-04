import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; // Import FontAwesome icons
import "./Login.css"; // Custom CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Admin / Parent Login</h2>
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
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
