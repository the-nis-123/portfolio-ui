import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null, 
  token: null
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
    }
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer;