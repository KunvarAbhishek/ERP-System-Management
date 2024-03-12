import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Customers from './components/Customers/Customers';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import CalenderView from './components/CalenderView/CalenderView';
import RightSideProducts from './components/RightSideProducts/RightSideProducts';
import RightSideOrders from './components/RightSideOrders/RightSideOrders';
import RightSideCustomer from './components/RightSideCustomer/RightSideCustomer';
import RightSideCalenderView from './components/RightSideCalenderView/RightSideCalenderView';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const isDashboard = window.location.pathname === '/';

  return (
    <Router>
      <div className="App">
        <div
          className="AppGlass"

        >
          <Sidebar />
          <Switch>
            <Route path="/" exact render={() => (
              <>
                <MainDash />
                <RightSide />
              </>
            )} />
            <Route path="/orders" render={() => (
              <>
                <Orders />
                <RightSideOrders />
               
              </>
            )} />
            <Route path="/customers" render={() => (
              <>
                <Customers />
                <RightSideCustomer/>
              </>
            )} />
            <Route path="/products" render={() => (
              <>
                <Products />
                <RightSideProducts />
              </>
            )} />
            <Route path="/calenderview" render={() => (
              <>
                <CalenderView />
                <RightSideCalenderView/>
              </>
            )} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
