import React from "react";
import "App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home/Home.js";
import TraderNavbar from "./Trader/TraderNavbar";
import AddTrader from "./Trader/AddTrader/AddTrader.js";
import ViewCustomer from "./Trader/ViewCustomers/ViewCustomer.js";
import Stocks from "./Trader/Stock/stock.js";
import Update from "./Trader/Update/Update.js";
import AddStock from "./Trader/AddStock/AddStock.js";
import CustomerNavbar from "./Customer/CustomerNavbar.js";

import CreateProfile from "./Customer/CreateCustomerProfile/CreateProfile.js";
import cusStock from "./Customer/Stock/cusStock.js";


function App() {

  return (
    <div>
      <Router>
        <Switch>
          {/* trader */}
          <Route path='/' exact component={Home} />
          <Route path='/profile' exact component={AddTrader} />
          <Route path='/allCus' exact component={ViewCustomer} />
          <Route path='/allstocks' exact component={Stocks} />
          <Route path='/trader' exact component={TraderNavbar} />
          <Route path='/update/:id' exact component={Update} />
          <Route path='/addItem' exact component={AddStock} />


          {/* customer */}
          <Route path='/customer' exact component={CustomerNavbar} />
          <Route path='/cusProfile' exact component={CreateProfile} />
          <Route path='/cusAllStocks' exact component={cusStock} />


        </Switch>

      </Router>

    </div>
  )
}

export default App;
