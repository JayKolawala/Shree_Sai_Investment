import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CarouselComp from './CarouselComp';

function Body() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/save', formData);
      console.log(response.data); // You can handle the response as per your requirement
      // Reset the form
      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      // Handle the error as per your requirement
    }
  };
  return (
    <div>
        <title>Shree Sai Investment</title>
       
        {/* Header with full-height image */}      
        

      <div>

  
      <CarouselComp />
{/*     
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta content="text/html; charset=iso-8859-2" httpEquiv="Content-Type" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
   */}

  </div>
        {/* About Section */}
        <div className="w3-container" style={{padding: '128px 16px'}} id="about">
          <h3 className="w3-center">ABOUT THE SHREE SAI INVESTMENT</h3>
          <p className="w3-center w3-large">Key features of our company</p>
          <div className="w3-row-padding w3-center" style={{marginTop: '64px'}}>
            <div className="w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
              <p className="w3-large">Responsive</p>
              <p>Unique Dreams deserve Unique Plans. We’re the bridge between where you are and where you want to be.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
              <p className="w3-large">VISSION</p>
              <p>Provide Good services to our client and getting good returns on investment.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
              <p className="w3-large">MISSION</p>
              <p>Our mission is to add value with active portfolio management to help our client reach their long term financial goals. We achieve this through our investment strategies, adhering to our value and investment principles.</p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-support w3-margin-bottom w3-jumbo" />
              <p className="w3-large">Support</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
        {/* Promo Section - "We know design" */}
        <div className="w3-container w3-light-grey" style={{padding: '128px 16px'}}>
          <div className="w3-row-padding">
            
              <h3>Advisor: </h3>
              
              <div className="w3-row">
                <div className="w3-col m2 text-center">
                  <img className="w3-circle" src="/w3images/avatar3.png" style={{width:'100px',height:'100px'}} />
                </div>
                <div className="w3-col m10 w3-container">
                  <h4>Satish Kolawala</h4>
                  <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                </div>
              </div>
            
          </div>
          </div>
        {/* Product Section */}
        <div className="w3-container" style={{padding: '128px 16px', aspectRatio: '3/2', objectFit: 'contain'}} id="products">
          <h3 className="w3-center">PRODUCTS</h3>
          <p className="w3-center w3-large">The ones who runs this company</p>
          <div className="w3-row-padding" style={{marginTop: '64px'}}>
            
            <div className="w3-col l3 m6 w3-margin-bottom">
              <Link to="./MutualFunds">
              <div className="w3-card">
                <img src="./img/MutualFunds.jpg" alt="mutualFunds" style={{width: '100%', height: '35vh'}} />
                <div className="w3-container">
                  <h3>Mutual Funds</h3>
                  
                  <p>Investing in a mutual fund is like an investment made by a collective.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
              </Link>
            </div>
         
            <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="./LifeInsurance">
            <div className="w3-card">
                <img src="./img/lifeInsurance.png" alt="lifeInsurance" style={{width: '100%', height: '35vh'}} />
                <div className="w3-container">
                  <h3>Life Insurance</h3>
                  
                  <p>You will do anything for the ones you love.Thinking about why you need.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
              </Link>
             
            </div>
            
            <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="./HealthInsurance">
            <div className="w3-card">
                <img src="./img/healthInsurance.jpg" alt="healthInsurance" style={{width: '100%', height: '35vh'}} />
                <div className="w3-container">
                  <h3>Health Insurance</h3>
                  
                  <p>Health insurance is the insurance which protects from any health emergencies.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>
            </Link>
            </div>

            <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="./FixDeposite">
            <div className="w3-card">
                <img src="./img/FixedDeposit.jpg" alt="FixDeposite" style={{width: '100%', height: '35vh'}} />
                <div className="w3-container">
                  <h3>Fixed Deposite</h3>
                  
                  <p>It provides financial protection to your family at the most affordable rates.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope" /> Contact</button></p>
                </div>
              </div>

            </Link>
            </div>

            
          </div>
        </div>
        {/* Promo Section "Statistics" */}
        <div className="w3-container w3-row w3-center w3-blue w3-padding-64">
          <div className="w3-quarter">
            <span className="w3-xxlarge">1</span>
            <br />Owner
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">55+</span>
            <br />Projects Done
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">600+</span>
            <br />Clients
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">100+</span>
            <br />Meetings
          </div>
        </div>
        {/* Service Section */}
        <div className="w3-container w3-light-gray" style={{padding: '128px 16px'}} id="services">
          <h3 className="w3-center">OUR SERVICES</h3>
          <p className="w3-center w3-large">What we've done for people</p>
          <div className="w3-row-padding" style={{marginTop: '64px'}}>
            
            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="/FamilyProtection">
              <img src="./img/familyprotection.jpg" alt="familyprotection" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Family Protection
              </Link>
            </div>

            <div className="w3-col l3 m6 w3-center w3-large">          
            <Link to="RetirementPlanning">
              <img src="./img/retirement.jpg" alt="retirement" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity"/>
               Retirement Planning 
                </Link>
            </div>

            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="DreamVacation">
              <img src="./img/dreamvacation.jpg" alt="dreamvacation" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Dream Vacation
              </Link>
            </div>
            
            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="DreamCar">
              <img src="./img/dreamcar.jpg" alt="dreamcaar" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Dream Car
              </Link>
            </div>
          </div>

          <div className="w3-row-padding w3-section ">
            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="ChildEducation">
              <img src="./img/childeducation.gif" alt="childeducation" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Child Education
              </Link>
            </div>
            
            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="Wedding">
              <img src="./img/wedding.jpg" alt="wedding" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Child Wedding
              </Link>
            </div>
            
            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="DreamHome">
              <img src="./img/dreamhome.jpg" alt="dreamhome" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Dream Home
              </Link>
            </div>
            
            <div className="w3-col l3 m6 w3-center w3-large">
            <Link to="CustomGoal">
              <img src="./img/customgoal.jpg" alt="customgoal" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              Custom Goals
              </Link>
            </div>
          </div>
        </div>
        {/* Modal for full size images on click*/}
        <div id="modal01" className="w3-modal w3-black" onclick="this.style.display='none'">
          <span className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
          <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" className="w3-image" />
            <p id="caption" className="w3-opacity w3-large" />
          </div>
        </div>
        {/* Skills Section */}
        
        {/* Calculator Section */}
        <div className="w3-container w3-center" style={{padding: '128px 16px'}} id="calculators">
          <h3>Calculators</h3>
          <p className="w3-large">Try financial calculators as per your needs.</p>
          <div className="w3-row-padding" style={{marginTop: '64px'}}>
            
            <div className="w3-third w3-section">
              <Link to="Crorepati">
              <ul className="w3-ul w3-white w3-hover-shadow">
              <img src="./img/crorepati_calc.png" alt="crorepati" style={{width: '50%', height: '15vh'}} />
                             
              </ul>
              </Link>
            </div>
            
            <div className="w3-third w3-section">
            <Link to="SIP">
              <ul className="w3-ul w3-white w3-hover-shadow">
              <img src="./img/SIP_calc.jpeg" alt="SIP_calc" style={{width: '50%', height: '15vh'}} />              
              </ul>
              </Link>
            </div>

            <div className="w3-third w3-section">
            <Link to="EMI">
              <ul className="w3-ul w3-white w3-hover-shadow">
              <img src="./img/EMI_calc.png" alt="EMI_calc" style={{width: '50%', height: '15vh'}} />            
              </ul>
              </Link>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
  <h3 className="w3-center">CONTACT US</h3>
  <p className="w3-center w3-large">Let's get in touch. Send us a message:</p>
  <div style={{ marginTop: '48px', display: 'flex' }}>
    <div style={{ flex: '1', marginRight: '16px' }}>
      <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right" />Shop No.9, Capital Complex, Nr. Honey Park, Adajan Road, Surat, INDIA</p>
      <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right" /> Phone: +91 9725031080</p>
      <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: shreesaiinvestment.surat@gmail.com</p>
    </div>
    <div className="w3-col m6">
      <form action="/action_page.php" target="_blank" method='POST' onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            className="w3-input w3-border"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </p>
        <p>
          <input
            type="text"
            className="w3-input w3-border"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </p>
        <p>
          <input
            type="text"
            className="w3-input w3-border"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="Number"
            required
          />
        </p>
        <p>
          <input
            type="text"
            className="w3-input w3-border"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            required
          />
        </p>
        <p>
          <input
            type="text"
            className="w3-input w3-border"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
          />
        </p>
        <p>
          <button className="w3-button w3-blue" type="submit">
            <i className="fa fa-paper-plane" /> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
      </div>
    </div>
 

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6781807275106!2d72.78487717454652!3d21.204939581705453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c30c478f5ad%3A0xf63f27548658f80e!2sCapital%20Complex%2C%20Vir%20Bhagat%20Singh%20Marg%2C%20Honey%20Park%20Area%2C%20Adajan%2C%20Surat%2C%20Gujarat%20395009!5e0!3m2!1sen!2sin!4v1687436858933!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
      
<div/>
</div>    
    // {/* Footer */}
        
      

  )
}

export default Body