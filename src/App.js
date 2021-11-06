/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import {
  Dashboard,
  Events,
  Login,
  NewEvent,
  NotFound,
  UserList,
  Addproject,
  EditEvent,
  Enrollment,
  EnrollmentStudent,
} from "./pages/index";
import { Routes } from "./routes";
require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path={Routes.Login.path} component={Login} />
          <ProtectedRoute
            exact
            path={Routes.Dashboard.path}
            component={Dashboard}
          />
          <ProtectedRoute
            exact
            path={Routes.AddEvent.path}
            component={NewEvent}
          />
          <ProtectedRoute exact path={Routes.Events.path} component={Events} />
          <ProtectedRoute
            exact
            path={Routes.UserList.path}
            component={UserList}
          />
          <ProtectedRoute
            exact
            path={Routes.Addproject.path}
            component={Addproject}
          />
          <ProtectedRoute
            exact
            path={`${Routes.EditProject.path}/:id`}
            component={EditEvent}
          />
          <ProtectedRoute
            exact
            path={Routes.Enrollment.path}
            component={Enrollment}
          />
           <ProtectedRoute
            exact
            path={Routes.EnrollmentStudent.path}
            component={EnrollmentStudent}
          />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
