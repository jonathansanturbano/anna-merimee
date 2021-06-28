import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Home from "../pages/Home";
import Oeuvres from "../pages/Oeuvres";
import APropos from "../pages/APropos";
import Expositions from "../pages/Expositions";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Modal />
        <Switch>
          <Route exact path="/accueil">
            <Home />
          </Route>
          <Route exact path="/oeuvres">
            <Oeuvres />
          </Route>
          <Route exact path="/a-propos">
            <APropos />
          </Route>
          <Route exact path="/expositions">
            <Expositions />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
