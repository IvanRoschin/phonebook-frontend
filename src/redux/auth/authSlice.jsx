import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nodejs-homework-rest-api-sandy.vercel.app/api',
    // prepareHeaders: (headers, { getState }) => {
    //   const { token } = getState().auth;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ['User'],
  //   refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: values => ({
        url: '/users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    // deleteContact: builder.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
    // editContact: builder.mutation({
    //   query: fields => ({
    //     url: `/contacts/${fields.id}`,
    //     method: 'PUT',
    //     body: { name: fields.name, number: fields.number },
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
  }),
});

export const { useRegisterUserMutation } = authApi;
