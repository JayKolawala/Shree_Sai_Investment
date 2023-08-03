import React from 'react';
import '../App.css'

function navaigation() {

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    window.location.href = '/';
    // Function logic here
    console.log('Link clicked!');
  };
  
  return (
    <div>
        <nav
    className="w3-sidebar w3-collapse w3-blue w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container w3-row">
      <div className="w3-col w3-center s8 w3-bar">
        <span>
          Welcome, <strong>Satish</strong>
        </span>
        <br />
        <a href="./Notification" className="w3-bar-item w3-center w3-button">
          <i className="fa fa-envelope" />
        </a>
        <a href="./Profile" className="w3-bar-item w3-center w3-button">
          <i className="fa fa-user" />
        </a>
        <a href="#" className="w3-bar-item w3-center w3-button">
          <i className="fa fa-cog" />
        </a>
      </div>
    </div>
    <hr />
    <div className="w3-container">
      {/*   <h5>Dashboard</h5> */}
    </div>
    <div className="w3-bar-block">
      <a
        href="#"
        className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
        onclick="w3_close()"
        title="close menu"
      >
        <i className="fa fa-remove fa-fw" />
        &nbsp; Close Menu
      </a>
      <a href="./Profile" className="w3-bar-item w3-button w3-padding">
      <i className="fa fa-user fa-fw" />
        &nbsp; Profile
      </a>

      <a href="./services" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-users fa-fw" />
        &nbsp; Services
      </a>
      <a href="./Notification" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bell fa-fw" />
        &nbsp; Notifications
      </a>

      <a href="./" className="w3-bar-item w3-button w3-padding" onClick={()=>handleLogout()}>
        <i className="fa fa-history fa-fw" />
        &nbsp; Logout
      </a>
      
      <br />
    </div>
  </nav>
    </div>
    
  )
}

export default navaigation