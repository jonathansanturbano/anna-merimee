import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Oeuvres from "../components/Oeuvres";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Oeuvres />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
