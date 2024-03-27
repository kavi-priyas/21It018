import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here, such as sending it to a server
    console.log(formData);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Owner Name:
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Roll No:
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Owner Email:
          <input
            type="email"
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Access Code:
          <input
            type="text"
            name="accessCode"
            value={formData.accessCode}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <Link to="/productList">
          <button type="submit">Register</button>
        </Link>
      </form>
    </div>
  );
}

export default RegistrationForm;
