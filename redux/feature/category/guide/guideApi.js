import apiSlice from "../../api/apiSlice";

const guideApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGuide: builder.query({
            query: () => ({
                url: '/guide/'
            })
        }),
        getSortGuide: builder.query({
            query: () => ({
                url: '/sort-guide/'
            })
        }),
        getSingleGuide: builder.query({
            query: (id) => ({
                url: `/guide/${id}`
            })
        })
    })
})

export const { useGetSingleGuideQuery, useGetSortGuideQuery, useGetGuideQuery } = guideApi