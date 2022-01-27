import React, {useState} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './pages/Header';
import Calender from './pages/Calender';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="signup">
          <SignUp />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;