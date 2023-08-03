import React from 'react';
import App from '../App';

function Header() {
  return (
    <div>
       <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        {/* Navbar (sit on top) */}
        <div className="w3-top">
          <div className="w3-bar w3-blue w3-card w3-blue" id="myNavbar">
          <a href="http://localhost:3000/" className="w3-bar-item w3-button w3-wide">
          <img src="./logo-ssi.jpg" alt="logo-ssi" style={{width: '3vw', height:'5vh'}} onclick="onClick(this)" className="w3-hover-opacity" /> Shree Sai Investment</a>
            {/* Right-sided navbar links */}
            <div className="w3-right w3-hide-small">
              <a href="#about" className="w3-bar-item w3-button"><i className="fa fa-user " /> ABOUT</a>
              <a href="#products" className="w3-bar-item w3-button"><i class="fas fa-clipboard-check" /> PRODUCTS</a>
              <a href="#services" className="w3-bar-item w3-button"><i className="fa fa-th" /> SERVICES</a>
              <a href="#calculators" className="w3-bar-item w3-button"><i className="fa fa-usd" />CALCULATORS </a>
              <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope" /> CONTACT</a>
            </div>
            {/* Hide right-floated links on small screens and replace them with a menu icon */}
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
        {/* Sidebar on small screens when clicking the menu icon */}
        <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: 'none'}} id="mySidebar">
          <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
          <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">ABOUT</a>
          <a href="#team" onclick="w3_close()" className="w3-bar-item w3-button">TEAM</a>
          <a href="#services" onclick="w3_close()" className="w3-bar-item w3-button">SERVICES</a>
          <a href="#calculators" onclick="w3_close()" className="w3-bar-item w3-button">PRODUCTS</a>
          <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button">CONTACT</a>
        </nav>
    </div>
  )
}

export default Header