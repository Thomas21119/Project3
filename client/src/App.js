import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './pages/Header';
import Calender from './pages/Calender';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddItem from './pages/addItem';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/additem">
          <AddItem />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
