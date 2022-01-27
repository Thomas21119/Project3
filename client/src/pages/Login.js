import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';


import "./login.css"

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

const Login = () => {
// if (Auth.loggedIn()) {
//     console.log();
// }
    return (
        <div className="loginPage">
                <h2> Log In to Your Account </h2>
            <form>
                <section>
                    <label for="email"> Email </label>
                    <input type="email" name="email" id="email" placeholder="john.doe@gmail.com" />
                </section>
                <section>
                    <label for="password"> Password </label>
                    <input type="password" id="password" name="password" placeholder="Your Strong Password" />
                </section>
                <section>
                    <input id="loginBtn" type="submit" value="Sign In" />
                    <a id="signupLink" href="/signup"> Sign Up </a>
                </section>
                {/* if time do forgot password */}
                {/* <a href="#@"> Forgot Password </a> */}
            </form>
        </div>
    )
}

export default Login