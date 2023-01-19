import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  api  from './api/coreApiSlice';
import  authReducer  from './features/authSlice';


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    authSlice: authReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
    ),
})

setupListeners(store.dispatch);

export default store;