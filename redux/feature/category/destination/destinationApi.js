import apiSlice from "../../api/apiSlice";

const destinationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDestination: builder.query({
            query: () => ({
                url: '/destination/'
            })
        })
    })
})

export const { useGetDestinationQuery } = destinationApi