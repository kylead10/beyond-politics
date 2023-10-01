import React, { useState } from 'react';
import styled from 'styled-components';

const RegistrationFormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 2px solid #333;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: ${({ isRegistered }) => (isRegistered ? 'none' : 'block')};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  font-weight: bold;
  background-color: grey;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegistrationForm = () => {
  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // State variable to store submitted form data
  const [formData, setFormData] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to store the form data
    const submittedData = {
      name,
      email,
      mobile,
    };

    // Set the form data in the state
    setFormData(submittedData);

    // Reset form fields
    setName('');
    setEmail('');
    setMobile('');

    // Mark registration as complete
    setIsRegistered(true);
  };

  // Render the form or a confirmation message based on registration status
  return (
    <RegistrationFormContainer isRegistered={isRegistered}>
      {formData ? (
        <div>
          <h2>Registration Complete</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Mobile Number: {formData.mobile}</p>
        </div>
      ) : (
        <div>
          <h2>Register Here</h2>
          <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor='name'>Name:</FormLabel>
            <FormInput
              type='text'
              id='name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel htmlFor='email'>Email:</FormLabel>
            <FormInput
              type='email'
              id='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor='mobile'>Mobile Number:</FormLabel>
            <FormInput
              type='tel'
              id='mobile'
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <FormButton type='submit'>Submit</FormButton>
          </Form>
        </div>
      )}
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
