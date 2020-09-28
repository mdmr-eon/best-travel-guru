import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Registration from './components/Registatrion/Registation';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Room from './components/Room/Room';


export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
      isSingIn: false,
      name: '',
      email: '',
      password: '',
      cPassword: '',
      errorMassage: '',
      successMassage: false
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/booking/:hotelId">
          <Booking />
        </PrivateRoute>
        <PrivateRoute path="/room/:roomId">
          <Room />
        </PrivateRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
