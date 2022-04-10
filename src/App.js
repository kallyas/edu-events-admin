/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes as routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { Login, Dashboard, Projects, Enrollments, Users } from "./pages/index";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/dashboard" element={<ProtectedRoutes />}>
              <Route path={routes.Dashboard.path} element={<Dashboard />} />
              <Route path={routes.Projects.path} element={<Projects />} />
            </Route>
            <Route exact path={routes.Login.path} element={<Login />} />
            <Route exact path={routes.Enrollments.path} element={<Enrollments />} />
            <Route exact path={routes.Users.path} element={<Users />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
