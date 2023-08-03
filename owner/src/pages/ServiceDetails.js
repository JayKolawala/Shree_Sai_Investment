import React, { useState } from 'react';
import Header from '../components/Header';
import Navaigation from '../components/navaigation';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceDetails = () => {
  const location = useLocation();
  const { id } = useParams();

  const { _id, title: initialTitle, description: initialDescription } = location.state;
  console.log(id);
  const [formData, setFormData] = useState({
    title: initialTitle,
    description: initialDescription,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic

    const updatedService = {
      title: formData.title,
      description: formData.description,
    };

    axios
      .put(`http://localhost:5000/service/edit/${id}`, updatedService)
      .then((response) => {
        // Handle the successful update
        console.log('Service updated:', response.data);
        navigate("/services")

        // Optionally update the state or perform any other actions
      })
      .catch((error) => {
        // Handle the error
        console.error('Error updating service:', error);
      });
  };

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <Navaigation />
    </div>

    <div className="w3-container w3-light-grey" style={{ marginLeft: 300, marginTop: 20, padding: '128px 16px' }}>
      <div className="col-md-6 calculator-container w3-row-padding">
        <div className="w3-col">
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                className="w3-input w3-border"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <textarea
                className="w3-input w3-border"
                name="description"
                rows={5}
                cols={80}
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </p>
            {/* <p>
              <input type="file" name="image" accept="image/*"  />
            </p> */}
            <p>
              <button className="w3-button w3-blue" type="submit">
                <i className="fa fa-paper-plane" /> Update
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>

    </>
      );
};

export default ServiceDetails;
