import { createContext } from 'react'
import { useGetProfileQuery, useGetAwardsQuery, useGetSkillsQuery } from '../app/api/coreApiSlice';

export const userContext = createContext();


const ProfileContext = ({children}) => {
  const { isLoading, error, data: userProfile} = useGetProfileQuery();
  const { error: awardsError, data: awards, isLoading: awardsLoading} = useGetAwardsQuery();
  const { error: skillsError, data: skills, isLoading: skillsLoading} = useGetSkillsQuery();
 

  return (
    <userContext.Provider value={{
      userProfile, error, isLoading, 
      awards, awardsError, awardsLoading,
      skills, skillsError, skillsLoading
    }}>
      {children}
    </userContext.Provider>
  )
}

export default ProfileContext;