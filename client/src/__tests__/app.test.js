import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './pages/Header';
import Calender from './pages/Calender';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddItem from './pages/addItem';

test('CarComponent renders', () => {
  render(
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/calender">
        <Header />
        <Calender />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/additem">
        <AddItem />
      </Route>
    </Router>
  );
});
