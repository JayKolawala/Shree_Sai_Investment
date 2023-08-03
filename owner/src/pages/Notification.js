import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navaigation from '../components/navaigation';
import axios from 'axios';

const Notification = () => {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contact/getAll');
      setToDo(response.data);
    } catch (error) {
      console.log(error);
      setToDo([]);
    }
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
            <h3>Messages</h3>
            <table className="w3-table w3-striped w3-white">
              <tbody>
                <tr>
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Subject</th>
                  <th>Message</th>
                </tr>

                {toDo.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.subject}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;