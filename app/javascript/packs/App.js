import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Oeuvres from "../components/Oeuvres";
import Home from "../pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/oeuvres">
            <Oeuvres />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
