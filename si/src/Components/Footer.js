import React from 'react'

function Footer() {
  return (
    <>
    <footer class="w3-padding-64 w3-light-grey w3-small" id="footer">
    <div class="w3-row-padding">
   
      <div class="w3-col s5 w3-left">
      <a href="#home" className="w3-bar-item w3-button w3-wide">
      <img src="./logo-ssi.jpg" alt="logo-ssi" style={{width: '6vw', height:'10vh'}} onclick="onClick(this)" className="w3-hover-opacity" /><h3>Shree Sai Investment</h3></a>
      <br />

      <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"/><b>Office : </b>
      Shop No.9, Capital Complex, Nr. Honey Park, Adajan Road, Surat</p>
      <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"/><b>Mobile No. : </b>
      (+91) 9725031080</p>
      
      <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"/><b>Email : </b>
      shreesaiinvestment.surat@gmail.com</p>
    
      </div>

      <div class="w3-col s3  w3-center">
        <h4>Services</h4>
        <p><a href="#">Family Protection</a></p>
        <p><a href="#">Retirement Planning</a></p>
        <p><a href="#">Dream Vacation</a></p>
        <p><a href="#">Dream Car</a></p>
        <p><a href="#">Child Education</a></p>
        <p><a href="#">Child Wedding</a></p>
        <p><a href="#">Dream Home</a></p>
        <p><a href="#">Custom Goals</a></p>
      </div>

      <div class="w3-col s3  w3-center">
        <h4>Products</h4>
        <p><a href="#">Mutual Funds</a></p>
        <p><a href="#">Life Insurance</a></p>
        <p><a href="#">Health Insurance</a></p>
        <p><a href="#">Term Insurance</a></p>

        <h4>Links</h4>
        <p><a href="#">About us</a></p>
        <p><a href="#">Products</a></p>
        <p><a href="#">Services</a></p>
        <p><a href="#">Calculators</a></p>
        <p><a href="#">Advisor</a></p>
      </div>
     
    </div>
  </footer>

  <div class="w3-blue w3-center w3-padding-24">Designed & Developed by <a href="#" title="" class="w3-hover-opacity">Jay Kolawala</a>
  <a href="#home" class="w3-button w3-black w3-right"><i class="fa fa-arrow-up w3-margin-right"></i></a></div>
</>    
    
    
  )
}

export default Footer