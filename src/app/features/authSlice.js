import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null, 
  token:null,
  userId:null
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setCredentials: (state, action) => { 
      return { 
        ...state,  
        user:action.payload.user,
        token:action.payload.accessToken,
      }
    },

    logout: (state, action) => { 
      return { 
        ...state,  
        user:null,
        token: null
      }
    },

    setUserId: (state, action) => { 
      return { 
        ...state,  
        userId: action.payload
      }
    },
  },
})

export const { setCredentials, logout, setUserId } = authSlice.actions

export default authSlice.reducer;