import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Friends List!</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/amigos">Friends Page</Link>
          </li>
          <li>
            <Link to="/add">Add a Friend!</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/add" component={FriendsForm} />
          <PrivateRoute path="/amigos" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
