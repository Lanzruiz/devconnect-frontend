import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import { Routes, Route, Switch } from "react-router-dom";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Landing} />

          <Route exact path="/register" Component={Register} />
          <Route exact path="/login" Component={Login} />
        </Routes>
      </Fragment>
    </Provider>
  );
};

export default App;
