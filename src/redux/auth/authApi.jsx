import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = process.env.REACT_APP_API_URL;

const HOST_NAME = `${apiUrl}/api/users`;

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: HOST_NAME,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
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

      invalidatesTags: ['auth'],
    }),

    login: builder.mutation({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['auth'],
    }),

    logout: builder.mutation({
      query: id => ({
        url: `logout`,
        method: 'POST',
        body: id,
      }),
      invalidatesTags: ['auth'],
    }),

    current: builder.query({
      query: () => `current`,
      providesTags: ['auth'],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useCurrentQuery,
} = authApi;

export const authApiReducer = authApi.reducer;
