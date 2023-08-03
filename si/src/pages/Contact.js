import React, { useState } from 'react';
import axios from 'axios';


const url = 'mongodb://localhost:27017/SSI';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

function Contact() {
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
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/todos', formData);
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
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
      <h3 className="w3-center">CONTACT</h3>
      <p className="w3-center w3-large">Let's get in touch. Send us a message:</p>
      <div style={{ marginTop: '48px' }}>
        <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right" /> Surat, INDIA</p>
        <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right" /> Phone: +91 9725031080</p>
        <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: shreesaiinvestment.surat@gmail.com</p>
        <br />
        <form action="/action_page.php" target="_blank" onSubmit={handleSubmit}>
        <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    placeholder="Name"
    required
  />
  <input
    type="text"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    placeholder="Email"
    required
  />
  <input
    type="text"
    name="number"
    value={formData.number}
    onChange={handleInputChange}
    placeholder="Number"
    required
  />
  <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleInputChange}
    placeholder="subject"
    required
  />
  <input
    type="text"
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    placeholder="message"
    required
  />
           {/* <p><input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" value={email} onChange={e => setEmail(e.target.value)} /></p>
          <p><input className="w3-input w3-border" type="text" placeholder="Subject" required name="Subject" value={subject} onChange={e => setSubject(e.target.value)} /></p>
          <p><input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" value={message} onChange={e => setMessage(e.target.value)} /></p> */}
          <p> 
          <button type="submit">Save</button>
            {/* <button className="w3-button w3-black" type="submit">
              <i className="fa fa-paper-plane" /> SEND MESSAGE
            </button> */}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
