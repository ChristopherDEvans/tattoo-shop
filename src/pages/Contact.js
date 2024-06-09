import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  input, textarea {
    padding: 0.5rem;
    width: 80%;
    max-width: 500px;
  }

  button {
    padding: 0.5rem 2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default Contact;
