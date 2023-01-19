import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { useRefreshTokenMutation } from "./app/api/authApiSlice";
import usePersist from "./hooks/usePersist";
import Loading from "./components/loading/Loading";

const PersistLogin = () => {
    const [persist] = usePersist()
    const token = useSelector(state => state.authSlice.token);
    const effectRan = useRef(false)
    const location = useLocation();
    
    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
      isUninitialized,
      isLoading,
      isSuccess,
      isError,
      error
    }] = useRefreshTokenMutation()

    useEffect(() => {
      if (effectRan.current === true || process.env.NODE_ENV !== 'development') { // React 18 Strict Mode
        const verifyRefreshToken = async () => {
          try {
            await refresh();
            setTrueSuccess(true);
          }
          catch (err) {
          }
        }

        if (!token) verifyRefreshToken()
      }

      return () => effectRan.current = true
    }, []);


    let content;

    if (!persist) {
      content = <Outlet />
    } else if (isLoading) {
      content = <Loading/>
    } else if (isError) {
      return <Navigate to='/login' state={{ from: location }}  replace />;
    } else if (isSuccess && trueSuccess) { 
      content = <Outlet />
  } else if (token && isUninitialized) {
      content = <Outlet />
    }

    return content
}
export default PersistLogin;