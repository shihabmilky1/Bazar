import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Help from './components/Help/Help';
import SignUp from './components/LoginManager/SignUp/SignUp';
import Login from './components/LoginManager/Login.js/Login';
import TermsAndService from './components/Privacy/TremsAndService/TermsAndService';
import Checkout from './components/shared/Cart/Checkout/Checkout';
import PrivetRoute from './components/LoginManager/PrivetRoute/PrivetRoute';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Orders from './components/Orders/Orders';
import 'rsuite/dist/styles/rsuite-default.css'
import OrdersDetail from './components/OrderDetail/OrdersDetail';
import Offer from './components/Offer/Offer';

export const ApplicationProvider = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((isUser) => {
      if (isUser) {
        setUser(isUser)
      }
    });

  }, [])
  return (
    <ApplicationProvider.Provider value={[cart, setCart, user, setUser]}>
      <Router>
        <Toaster />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/help'>
            <Help />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/terms'>
            <TermsAndService />
          </Route>
          <Route path='/privacy'>
            <TermsAndService />
          </Route>
          <PrivetRoute path='/checkout'>
            <Checkout />
          </PrivetRoute>
          <PrivetRoute path='/orders'>
            <Orders />
          </PrivetRoute>
          <PrivetRoute path='/ordersDetail/:id'>
            <OrdersDetail />
          </PrivetRoute>
          <Route path='/offer'>
            <Offer />
          </Route>
        </Switch>
      </Router>
    </ApplicationProvider.Provider>
  );
}

export default App;
