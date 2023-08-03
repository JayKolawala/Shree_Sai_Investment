import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navaigation from '../components/navaigation';
import axios from 'axios';
import { getAllToDo } from '../utils/HandleApi';
import { BiEdit } from "react-icons/bi";

const Services = () =>  {
  const [toDo, setToDo] = useState([]);
  useEffect(() => {
    getAllToDo(setToDo);
    }, []);

  const getAToDo = (id) => {
    axios
      .get(`http://localhost:5000/service/Geta/${id}`)
      .then(({ data }) => {
        setFormData({
          id,
          title: data.title,
          description: data.description,
          image: data.image,
        });

        // Assuming the image URL is stored in the data object
        // Update the URL accordingly based on your data structure
 

        navigate(`/services/${id}`, { state: { title: data.title, description: data.description, image: data.image } });
      })
      .catch((error) => {
        console.error('Error fetching service:', error);
      });
  };
  
  


  const navigate = useNavigate();

    const [formData,setFormData] = useState({
        title: '',
        description: '',
      });
    
      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        // Perform any necessary operations with the file
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic
      };
    
      

  return (

    <>
    <div>
      <Header />
    </div>
    <div>
      <Navaigation />
    </div>
      <div className="w3-panel w3-center w3-container w3-light-grey" style={{ padding: '128px 128px' }}>
    <div className="w3-main" style={{ marginLeft: 500, marginTop: 43 }}>
      <div className="w3-twothird">
        <h3>Services</h3>
        <table className="w3-table w3-striped w3-white">
          <tbody>
          {toDo.map((item) => (
                <tr>
                <td>
                  <i className="fa fa-user w3-text-blue w3-large" />
                </td>
                <td>{item.title}</td>
                <td>
                <BiEdit className="icon" onClick={()=>{ getAToDo(item._id)}} />
                </td>
            </tr>
          ))}
  
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  <hr />
    </>    
  )
}

export default Services