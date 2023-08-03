import React from 'react';
import familyprotection from "../images/services/familyprotection.jpg";
import childeducation from "../images/services/childeducation.gif";
import customgoal from "../images/services/customgoal.jpg";
import dreamcar from "../images/services/dreamcar.jpg";
import dreamhome from "../images/services/dreamhome.jpg";
import dreamvacation from "../images/services/dreamvacation.jpg";
import retirement from "../images/services/retirement.jpg";
import wedding from "../images/services/wedding.jpg";
import '../App.css';

function services() {
  return (
    <div>
        
        {/* Work Section */}
        <div className="w3-container" style={{padding: '128px 16px'}} id="work">
          <h3 className="w3-center">OUR SERVICES</h3>
          <p className="w3-center w3-large">What we've done for people</p>
          <div className="w3-row-padding" style={{marginTop: '64px'}}>
            <div className="w3-col l3 m6">
              <img src={familyprotection} alt="familyprotection" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity"  />
              <p className="w3-center w3-large">Family Protection</p>
            </div>
            <div className="w3-col l3 m6">
              <img src={retirement} alt="retirement" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity"  />
              <p className="w3-center w3-large">Retirement Planning</p>
            </div>
            <div className="w3-col l3 m6">
              <img src={dreamvacation} alt="dreamvacation" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity"  />
              <p className="w3-center w3-large">Dream Vacation</p>
            </div>
            <div className="w3-col l3 m6">
              <img src={dreamcar} alt="dreamcaar" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity"  />
              <p className="w3-center w3-large">Dream Car</p>
            </div>
          </div>
          <div className="w3-row-padding w3-section">
            <div className="w3-col l3 m6">
              <img src={childeducation} alt="childeducation" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              <p className="w3-center w3-large">Child Education</p>
            </div>
            <div className="w3-col l3 m6">
              <img src={wedding} alt="wedding" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              <p className="w3-center w3-large">Child Wedding</p>
            </div>
            <div className="w3-col l3 m6">
              <img src={dreamhome} alt="dreamhome" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              <p className="w3-center w3-large">Dream Home</p>
            </div>
            <div className="w3-col l3 m6">
              <img src={customgoal} alt="customgoal" style={{width: '100%'}} onclick="onClick(this)" className="w3-hover-opacity" />
              <p className="w3-center w3-large">Custom Goals</p>
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
    </div>
  )
}

export default services