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
    <RegistrationFormContainer isRegistered={isRegistered}>
      <h2>Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor='name'>Name:</FormLabel>
        <FormInput
          type='text'
          id='name'
          required
          // Add value and onChange handlers as needed
        />
        <FormLabel htmlFor='email'>Email:</FormLabel>
        <FormInput
          type='email'
          id='email'
          required
          // Add value and onChange handlers as needed
        />
        <FormLabel htmlFor='mobile'>Mobile Number:</FormLabel>
        <FormInput
          type='tel'
          id='mobile'
          required
          // Add value and onChange handlers as needed
        />
        <FormButton type='submit'>Register</FormButton>
      </Form>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
