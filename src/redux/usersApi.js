import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  keepUnusedDataFor: 10,
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: (limit = '') => `users?${limit && `_limit=${limit}`}`,
      providesTags: () => ['Users'],
    }),
    getUser: build.query({
      query: (userId) => `users/${userId}`,
    }),
    editUser: build.mutation({
      query: (data) => ({
        url: `users/${data.id}`,
        method: 'put',
        body: data,
      }),
      invalidatesTags: ['Users'],
    }),
    addUser: build.mutation({
      query: (data) => ({
        url: `users`,
        method: 'post',
        body: data,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: build.mutation({
      query: (userId) => ({
        url: `users/${userId}`,
        method: 'delete',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useEditUserMutation,
  useAddUserMutation,
  useDeleteUserMutation,
} = usersApi;