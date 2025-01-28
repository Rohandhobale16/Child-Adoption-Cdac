import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getData = (e) => {
    console.log(email, password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', marginTop: '0' }}>
      <div className="card shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h1 className="text-center mb-4">Login</h1>
          <hr />
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Username</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="d-flex justify-content-between">
            <label>
              Don't have an account? <a href="/">Register</a>
            </label>
            <label>
              <a href="/">Forgot password?</a>
            </label>
          </div>
          <button className="btn btn-primary w-100 mt-3" onClick={getData}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;