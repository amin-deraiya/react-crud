import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from './components/user_list';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <UserList />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
