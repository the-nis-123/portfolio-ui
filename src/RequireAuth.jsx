import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const location = useLocation();
  const currentToken = useSelector(state=>state.authSlice.token);
  
  return currentToken?
  <Outlet /> : 
  <Navigate to='/login' state={{ from: location }} replace />
}

export default RequireAuth;