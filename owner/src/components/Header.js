import React from 'react'

const Header = () => {
  return (

    <div>
       <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
        {/* Navbar (sit on top) */}
        <div className="w3-top w3-blue w3-center">
          <div className="w3-bar w3-card w3-blue" id="myNavbar">
          <a href="#" className="w3-bar-item w3-button w3-wide">
                
          <img src="./logo.jpg" alt="logo-ssi" style={{width: '3vw', height:'5vh'}} onclick="onClick(this)" className="w3-hover-opacity" /> Shree Sai Investment</a>
            {/* Right-sided navbar links */}
            
            {/* Hide right-floated links on small screens and replace them with a menu icon */}
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
  
    </div>
  )

}

export default Header
