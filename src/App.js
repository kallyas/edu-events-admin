/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/events";
import Login from './pages/Login';
import NewEvent from "./pages/NewEvent";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import { Routes } from "./routes";

require('dotenv').config()

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Switch>
        <Route exact path={Routes.Login.path} component={Login} />
        <ProtectedRoute exact path={Routes.Dashboard.path} component={Dashboard} />
        <ProtectedRoute exact path={Routes.AddEvent.path} component={NewEvent} />
        <ProtectedRoute exact path={Routes.Events.path} component={Events} />
        <ProtectedRoute exact path={Routes.UserList.path} component={UserList} />
        <Route component={NotFound} />
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
