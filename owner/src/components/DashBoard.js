import React from 'react';
import Header from './Header';
import Navaigation from './navaigation';
import Profile from '../pages/Profile';
//import '../App.css';

function DashBoard() {

  return (
    <>
  <title>DashBoard</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nhtml,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}\n'
    }}
  />
  {/* Top container */}
  <div className="w3-bar w3-top w3-blue w3-large" style={{ zIndex: 4 }}>
    <Header />
  </div>
  {/* Sidebar/menu */}

  
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    onclick="w3_close()"
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginTop: 43 }}>
    {/* Header */}
    
    <div>
      <Profile />
    </div>
    </div>
  <br />
  
  {/* Footer */}
  
  {/* End page content */}
</>


  )
}

export default DashBoard