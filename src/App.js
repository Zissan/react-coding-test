import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import PageNotFound from "./components/error/PageNotFound";
import Header from "./components/header";
import ManageEmployee from "./components/employee/ManageEmployee";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/new" component={ManageEmployee} exact />
        <Route path="/update/:id" component={ManageEmployee} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
