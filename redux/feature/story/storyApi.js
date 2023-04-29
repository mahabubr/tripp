import apiSlice from "../api/apiSlice";

const storyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postStory: builder.mutation({
            query: (data) => ({
                url: '/story/',
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: data
            })
        }),
        getStory: builder.query({
            query: () => ({
                url: '/story/'
            })
        }),
    })
})

export const { usePostStoryMutation, useGetStoryQuery } = storyApi