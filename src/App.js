/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          {/* Add routes here */}
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
