/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/">
          <h2>Admin area</h2>
        </Route>
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
