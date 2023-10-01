import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here, e.g., send data to a server

    // Reset form fields
    setName('');
    setEmail('');
    setMobile('');

    // Mark registration as complete
    setIsRegistered(true);
  };

  // Render the form or a confirmation message based on registration status
  return (
    <div>
      {isRegistered ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Mobile Number: {mobile}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='mobile'>Mobile Number:</label>
            <input
              type='tel'
              id='mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
