import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logout } from '../features/authSlice';

const baseURL = 'http://localhost:9000';
const refreshURL = baseURL + '/refresh';

const basequeryWithRefresh = () => {
  
const baseQuery = fetchBaseQuery({ 
  baseUrl: 'http://localhost:9000',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) =>{
      const token = getState().authSlice.token;
      if(token){
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  });

  //adding refresh to our baseQuery
  const baseQueryWithResfreshAuth = async (args, api, otherOptions) =>{
    let result = await baseQuery(args, api, otherOptions);

    if(result?.error?.originalStatus === 403){
      const refreshRes = baseQuery(refreshURL, api, otherOptions);

      if(refreshRes?.data){
        const user = api.getState().authSlice.user;
        //store new refresh token
        api.dispatch(setCredentials({...refreshRes.data, user}));
        //retry original failed request
        result = await baseQuery(args, api, otherOptions);
      }else{
        api.dispatch(logout())
      }
    }

    return result;
  } 
  
  return baseQueryWithResfreshAuth;
}

export default basequeryWithRefresh;