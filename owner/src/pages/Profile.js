import React from 'react';

import Header from '../components/Header';
import Navaigation from '../components/navaigation';

const Profile = () => {
  return (
    <>
      <div>
          <Header />
      </div>
      <div>
      <Navaigation />
    </div>
      <header className="w3-container w3-center" style={{marginLeft: 300, marginTop: 43, paddingTop: 50 }} >
      <h5>
      <img
        className="profile-image"
        src="profile-photo.png"
        alt="Profile Photo"
      />
        <b>
        <h1>Admin Profile</h1>
        </b>
      </h5>
    </header>
    <div className="profile-container w3-main" style={{ marginLeft: 500, marginTop: 80 }}>
            
      <table className="w3-table w3-striped w3-white profile-details">
          <tbody>
          <tr>
              <td>
                <i className="fa fa-user w3-text-blue w3-large" />
              </td>
              <td><strong>Full Name :</strong></td>
              <td>
               Satish Kolawala
              </td>
          </tr>

          <tr>
              <td>
                <i className="fa fa-user w3-text-blue w3-large" />
              </td>
              <td><strong>Contact Number :</strong></td>
              <td>
               +91 9725031080
              </td>
          </tr>
          <tr>
              <td>
                <i className="fa fa-user w3-text-blue w3-large" />
              </td>
              <td><strong>Email :</strong></td>
              <td>
              SatishKolawala@gmail.com
              </td>
          </tr>
          <tr>
              <td>
                <i className="fa fa-user w3-text-blue w3-large" />
              </td>
              <td><strong>Birth Date :</strong></td>
              <td>
               15th June 1968
              </td>
          </tr>
          <tr>
              <td>
                <i className="fa fa-user w3-text-blue w3-large" />
              </td>
              <td><strong>Business/Job :</strong></td>
              <td>
               Financial Advisor
              </td>
          </tr>
            </tbody>
        </table>

      
    </div>
  </>
  
  )
}

export default Profile
