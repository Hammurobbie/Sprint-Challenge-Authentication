import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={UserList} />
    </div>
  );
}

export default App;
