/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          {/* Add routes here */}
          <Route exact path={Routes.Login.path} component={Login} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
