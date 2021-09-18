/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import {Dashboard,Events,Login,NewEvent,NotFound,UserList, Addproject } from './pages/index'
import { Routes } from "./routes";
import { StateProvider } from "./context/AdminContext";
require('dotenv').config()

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Switch>
        <Route exact path={Routes.Login.path} component={Login} />
        <StateProvider>
        <ProtectedRoute exact path={Routes.Dashboard.path} component={Dashboard} />
        <ProtectedRoute exact path={Routes.AddEvent.path} component={NewEvent} />
        <ProtectedRoute exact path={Routes.Events.path} component={Events} />
        <ProtectedRoute exact path={Routes.UserList.path} component={UserList} />
        <ProtectedRoute exact path={Routes.Addproject.path} component={Addproject} />
        </StateProvider>
        <Route component={NotFound} />
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
