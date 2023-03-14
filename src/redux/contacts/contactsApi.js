import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HOST_NAME = 'http://localhost:8080/api/contacts';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: HOST_NAME,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);
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
        console.log(data);
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
} = contactsApi;

export const contactsApiReducer = contactsApi.reducer;
