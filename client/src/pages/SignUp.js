import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import './signup.css';

const SignUp = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signUpPage">
      <h2> Create An Account </h2>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit} className="signUpForm">
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
              placeholder="Your Strong Password"
              value={formState.password}
              onChange={handleChange}
            />
          </section>
          <section className="btnSection">
            <button type="submit" id="signUpBtn">
              {' '}
              Sign Up{' '}
            </button>
            <a href="/" id="signInLink">
              Already have an account? Sign In{' '}
            </a>
          </section>
          {/* if time do forgot password */}
          {/* <a href="#@"> Forgot Password </a> */}
        </form>
      )}
      {error && <div className="error">{error.message}</div>}
    </div>
  );
};

export default SignUp;
