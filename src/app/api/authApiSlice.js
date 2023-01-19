import coreApi  from './coreApiSlice';
import { setCredentials } from '../features/authSlice';

const authBaseUrl = '/api/public';

const newExtendedApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${authBaseUrl}/login`,
        method: 'POST',
        body: credentials
      })
    }),

    logOut: builder.query({query: () => `${authBaseUrl}/logout`}),

    refreshToken: builder.mutation({
      query: () => ({
        url: `${authBaseUrl}/refresh`,
        method: 'GET',
      }),

      async onQueryStarted(arg, {dispatch, queryFulfilled}){
        try{
          const {data} = await queryFulfilled;
          const { accessToken} = data;
          dispatch(setCredentials({accessToken}));
        }catch(err){
        }
      }
    }),
  }),

  overrideExisting: false,
})

export const {
  useRegisterMutation, 
  useLoginMutation, 
  useLogOutQuery, 
  useRefreshTokenMutation
} = newExtendedApi