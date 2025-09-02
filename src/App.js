import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Routes, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Landing} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </Fragment>
  );
};

export default App;
