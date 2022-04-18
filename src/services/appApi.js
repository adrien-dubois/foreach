import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// define a service user and base URL

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),

    endpoints: (builder) => ({
        // creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: "POST",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url:'/users/login',
                method: "POST",
                body: user,
            }),
        }),

        // update
        updateUser: builder.mutation({
            query: (user) => ({
                url:'/users/update',
                method: "PATCH",
                body: user,
            }),
        }),

        //logout
        logoutUser: builder.mutation({
            query: (payload) => ({
                url: '/logout',
                method: "DELETE",
                body: payload,
            }),
        }),
    }),
});

export const { useSignupUserMutation, useLoginUserMutation, useUpdateUserMutation, useLogoutUserMutation } = appApi;

export default appApi;