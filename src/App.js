import React from "react";
import "./App.css";
import Navibar from "./HeaderComponents/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import SigninPage from "./BodyComponents/UserAuth/SigninPage";
import HomePage from "./BodyComponents/Home/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Dashboard from "./BodyComponents/adminPanel/shared/Dashboard";
import Resources from "./BodyComponents/adminPanel/components/Resources";
function App() {
  return (
    <Router>
      <Navibar />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/signin" exact>
            <SigninPage />
          </Route>
          <Route path="/admin" exact>
            <Dashboard />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
