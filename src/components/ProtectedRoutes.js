import { Navigate, Outlet } from 'react-router-dom';
import { Routes as routes } from '../routes';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to={routes.Login.path} />;
};

export default ProtectedRoutes;
