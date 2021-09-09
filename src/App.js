/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/events";
import Login from './pages/Login';
import NewEvent from "./pages/NewEvent";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import { Routes } from "./routes";
import useToken from "./utils/useToken";

require('dotenv').config()

function App() {
  const { token } = useToken();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.Login.path} >
          { token ? <Redirect to={Routes.Dashboard.path} /> : <Login />}
        </Route>
        <ProtectedRoute exact path={Routes.Dashboard.path} component={Dashboard} />
        <ProtectedRoute exact path={Routes.AddEvent.path} component={NewEvent} />
        <ProtectedRoute exact path={Routes.Events.path} component={Events} />
        <ProtectedRoute exact path={Routes.UserList.path} component={UserList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
