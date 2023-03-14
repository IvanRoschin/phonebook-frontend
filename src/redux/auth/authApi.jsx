import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST_NAME = 'http://localhost:8080/api/users';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({
    baseUrl: HOST_NAME,
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token;
      // console.log(token);
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  endpoints: builder => ({
    signup: builder.mutation({
      query(body) {
        return {
          url: `signup`,
          method: 'POST',
          body,
        };
      },

      invalidatesTags: ['user'],
    }),

    login: builder.mutation({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['user'],
    }),

    logout: builder.query({
      query: id => 'logout',
      providesTags: ['user'],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutQuery } = authApi;

export const authApiReducer = authApi.reducer;
