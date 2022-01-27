import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

const SignUp = () => {
// if (Auth.loggedIn()) {
//     console.log();
// }

    return (
        <div className="signUpPage">
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
                    <input id="signUpBtn" type="submit" value="Sign In" />
                    <a id="loginLink" href="/signup"> Sign Up </a>
                </section>
                {/* if time do forgot password */}
                {/* <a href="#@"> Forgot Password </a> */}
            </form>
        </div>
    )
}

export default SignUp