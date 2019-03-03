import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./app.scss";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home-page/Home-Page";
import { AddPlace } from "./pages/Add-Place/Add-Place";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

export const App = props => {
  return (
    <Layout>
      <div className="App">
        <Switch>
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/addplace" exact component={AddPlace} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect from="/" to="/homepage" />
        </Switch>
      </div>
    </Layout>
  );
};
