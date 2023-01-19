import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithRefresh from './baseQueryWithRefresh';

const baseQuery = baseQueryWithRefresh();

const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery,
 
  endpoints: builder => ({
    getProjects: builder.query({
      query: () => '/api/public/projects'
    }),

    getProfile: builder.query({
      query: () => '/api/public/profile'
    }),

    getAwards: builder.query({
      query: () => '/api/public/awards'
    }),

    deleteData: builder.mutation({
      query: optionsObject => ({
        ...optionsObject,
        method: 'DELETE'
      })
    }),

    editData: builder.mutation({
      query: optionsObject => ({
        method: 'PATCH',
        ...optionsObject
      })
    }),

    uploadData: builder.mutation({
      query: optionsObject => ({
        method: 'POST',
        ...optionsObject
      })
    })
  })
});

export default coreApi;

export const {
  useGetAwardsQuery,
  useGetProjectsQuery,
  useGetProfileQuery,
  useUploadDataMutation,
  useEditDataMutation,
  useDeleteDataMutation
} = coreApi;