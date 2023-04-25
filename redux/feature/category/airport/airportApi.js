import apiSlice from "../../api/apiSlice";

const airportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAirport: builder.query({
            query: () => ({
                url: '/airport/'
            })
        }),
        getSortAirport: builder.query({
            query: () => ({
                url: '/sort-airport/'
            })
        }),
        getSingleAirport: builder.query({
            query: (id) => ({
                url: `/airport/${id}`
            })
        })
    })
})

export const {
    useGetAirportQuery,
    useGetSortAirportQuery,
    useGetSingleAirportQuery
} = airportApi