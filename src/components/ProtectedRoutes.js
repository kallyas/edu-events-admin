import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Routes as routes } from '../routes';
import { useAuth } from '../context/AuthContext';
import { fetchUsersAsync } from '../features/users/usersSlice'
import { getEnrollmentAsync } from '../features/enrollment/enrollmentSlice';
import { fetchEventsAsync } from '../features/events/eventsSlice';
import { fetchProjectsAsync } from '../features/projects/projectSlice';


const ProtectedRoutes = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch()

  useEffect(() => {
    if(currentUser) {
      dispatch(fetchUsersAsync())
      dispatch(getEnrollmentAsync());
      dispatch(fetchEventsAsync());
      dispatch(fetchProjectsAsync());
    }
  }, [dispatch, currentUser])

  return currentUser ? <Outlet /> : <Navigate to={routes.Login.path} />;
};

export default ProtectedRoutes;
