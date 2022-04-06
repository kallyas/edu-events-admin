/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Login, Dashboard } from "./pages/index";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          {/* Add routes here */}
          <Route exact path={Routes.Login.path} component={Login} />
          <ProtectedRoute
            exact
            path={Routes.Dashboard.path}
            component={Dashboard}
          />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
