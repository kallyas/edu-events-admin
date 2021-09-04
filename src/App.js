/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/events";
import Login from './pages/Login';
import NewEvent from "./pages/NewEvent";
import { Routes } from "./routes";

require('dotenv').config()

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.Login.path} component={Login} />
        <ProtectedRoute exact path={Routes.Dashboard.path} component={Dashboard} />
        <ProtectedRoute exact path={Routes.AddEvent.path} component={NewEvent} />
        <ProtectedRoute exact path={Routes.Events.path} component={Events} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
