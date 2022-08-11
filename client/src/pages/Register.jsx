import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('form');
  };
  const handlechange = (event) => {};
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="name"></div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Confirm Password"
            name="confimpassword"
            onChange={(e) => {
              handlechange(e);
            }}
          ></input>
          <button type="submit">Create user</button>
          <span>
            already have an account? <Link to="./Login.jsx">Login</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #292a2b;

  .name {
    background-color: rgb(7, 95, 130);
    color: white;
    align-self: center;
    font-size: 3rem;
    border-radius: 2rem;
  }
  form::before {
    border-radius: 3rem;
    width: 150%;
    height: 150%;
    background: conic-gradient(#19f9d8, #e65cfc, #aa28a7, #66a5e4);
    position: absolute;
  }
  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }
  form {
    padding: 3rem;
    background-color: #222223;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
  }

  input {
    color: white;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: transparent;
    border: 0.1rem solid white;
    border-radius: 0.5rem;

    &:focus {
      color: #19f9d8;
      outline-color: #19f9d8;
    }
  }
  input::placeholder {
    color: white;
  }

  button {
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: 0 transparent;
    min-height: 3rem;
    transition-duration: 0.4s;
    &:hover {
      background-color: #e65cfc;
    }
  }

  span {
    color: white;
    font-size: 1.2rem;
  }
  a {
    font-size: 1.2rem;
    color: #19f9d8;
    text-decoration: none;
  }
`;

export default Register;
