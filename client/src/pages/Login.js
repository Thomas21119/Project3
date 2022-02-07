import React, { useEffect, useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
  useQuery,
} from '@apollo/client';

import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

import './login.css';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
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
    console.log(value);

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
        <section>
          <button type="submit"> Login </button>
          <a href="/signup" id="signInLink">
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
