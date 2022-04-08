/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes as routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Login, Dashboard } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Add routes here */}
          <Route exact path={routes.Login.path} element={<Login />} />
          <Route exact path={routes.Dashboard.path} element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
