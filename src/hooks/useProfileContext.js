import { userContext } from '../contexts/ProfileContext';
import { useContext } from 'react';

const useProfileContext = () => {
  return useContext(userContext);
}

export default useProfileContext;