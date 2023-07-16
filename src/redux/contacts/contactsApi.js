import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = process.env.REACT_APP_API_URL;

const HOST_NAME = `${apiUrl}/api/contacts`;

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contacts'],
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
    fetchContacts: builder.query({
      query: () => `/`,
      providesTags: ['contacts'],
    }),

    getFavorites: builder.query({
      query: () => `/?favorite=true`,
      providesTags: ['contacts'],
    }),
    getContactById: builder.query({
      query: id => `/${id}`,
      providesTags: ['contacts'],
    }),

    addContact: builder.mutation({
      query: values => ({
        url: '/',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),

    updateContact: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['contacts'],
    }),

    updateFavorite: builder.mutation({
      query(data) {
        const { _id, ...body } = data;
        return {
          url: `/${_id}/favorite`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
  useUpdateFavoriteMutation,
  useGetFavoritesQuery,
} = contactsApi;

export const contactsApiReducer = contactsApi.reducer;
