import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

import './login.css';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = data.login.token;
      Auth.login(token);
      if (data) {
        <Redirect to="/calender" />;
      } else {
        console.log('fail');
      }
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginPage">
      <h2> Log In to Your Account </h2>
      <form className="loginForm" onSubmit={handleFormSubmit}>
        <section>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@gmail.com"
            value={formState.email}
            onChange={handleChange}
          />
        </section>
        <section>
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            value={formState.password}
            onChange={handleChange}
          />
        </section>
        <section className="btnSection">
          <button type="submit" id="loginBtn">
            {' '}
            Login{' '}
          </button>
          <a href="/signup" id="signUpLink">
            Don't have an account? Sign Up
          </a>
        </section>
        {/* if time do forgot password */}
        {/* <a href="#@"> Forgot Password </a> */}
      </form>
    </div>
  );
};

export default Login;
