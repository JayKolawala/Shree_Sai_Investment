import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event?.target?.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event?.target?.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password match
    if (username === 'satishkolawala' && password === 'Satish@123') {
      // Successful login
      setErrorMessage('');
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      // Invalid credentials
      setErrorMessage('Invalid username or password');
    }};

  return (
    <>
      <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }}>
        <div className="row">
          <div className="col-md-6 calculator-container w3-row-padding">
            <div className="w3-col m6">
            <img src="./logo.jpg" className="image"  alt="logo" width={100}
              height={100   }/>
            </div>
            <h2 className="w3-center">Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <br />
            <br />
        <form action="DashBoard" target="DashBoard" method='POST' onSubmit={handleSubmit}>      
        <p>
        <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </p>
        
        <p>
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </p>
        
        <p>
          <button className="w3-button w3-blue" type="submit">
            <i className="fa fa-paper-plane" /> submit
          </button>
        </p>
      </form>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
}

export default Login;
