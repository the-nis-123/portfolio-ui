import { createContext } from 'react'
import { useGetProfileQuery, useGetAwardsQuery } from '../app/api/coreApiSlice';

export const userContext = createContext();


const ProfileContext = ({children}) => {
  const { isLoading, error, data: userProfile} = useGetProfileQuery();
  const { error: awardsError, data: awards, isLoading: awardsLoading} = useGetAwardsQuery();
 

  return (
    <userContext.Provider value={{
      userProfile, error, isLoading, 
      awards, awardsError, awardsLoading
    }}>
      {children}
    </userContext.Provider>
  )
}

export default ProfileContext;