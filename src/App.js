import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Products from "./Pages/Products";
import NavBar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { incrementHandler, decrementHandler } from "./Redux/Actions/action";

function App({ ...props }) {
  // console.log(props.cart);
  return (
    <div className="App">
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
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
function mapDispatchToProps(dispatch) {
  return {
    increment: data => dispatch(incrementHandler(data)),
    decrement: id => dispatch(decrementHandler(id))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
