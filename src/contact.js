import React, { useState } from 'react';
import Navbars from './navbar';
import './contact.css';
import axios from 'axios';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Submit form data
    axios.post('http://localhost:5050/contact', { name, email, message })
      .then(res => {
        // Handle successful response
        console.log('Response:', res.data);
        // Optionally, reset form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        // Handle error
        console.error('Error posting data:', error);
      });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
    <Navbars/>
    <div className="container text-white text-center mt-5 justify-content-center">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex justify-content-center mt-5">
          <label htmlFor="name" className="mr-2">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '20rem' }} />
        </div>
        <div className="form-group d-flex justify-content-center">
          <label htmlFor="email" className="">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '20rem' }} />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>
        <div className="form-group d-flex justify-content-center">
          <label htmlFor="message" className="mr-2">Message:</label>
          <textarea className="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required style={{ width: '20rem', height:'10rem' }} placeholder='enter what did you feel about website'></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
