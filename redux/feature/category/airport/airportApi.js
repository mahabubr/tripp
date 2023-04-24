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
    })
})

export const { useGetAirportQuery, useGetSortAirportQuery } = airportApi