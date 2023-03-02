import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
    tagTypes: ['user'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState();
      console.log(token);
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
          url: `users/signup`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['user'],
    }),

    login: builder.mutation({
      query(body) {
        return {
          url: `users/login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['user'],
    }),

    current: builder.query({
      query: () => 'users/current',
      providesTags: ['user'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation, useLoginMutation, useCurrentQuery } = authApi;
