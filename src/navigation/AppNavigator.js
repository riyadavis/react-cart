import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../Components/Navbar";
import Products from "../Components/Products";
import Cart from "../Components/Cart";

const AppNavigator = ({ ...props }) => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Products products={{ ...props }} />
      </Route>
      <Route path="/cart">
        <Cart {...props} />
      </Route>
    </Switch>
  </Router>
);

export default AppNavigator;
