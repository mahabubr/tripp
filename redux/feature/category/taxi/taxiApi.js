import apiSlice from "../../api/apiSlice";

const airportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTaxi: builder.query({
            query: () => ({
                url: '/taxi/'
            })
        }),
        getSortTaxi: builder.query({
            query: () => ({
                url: '/sort-taxi/'
            })
        }),
        getSingleTaxi: builder.query({
            query: (id) => ({
                url: `/taxi/${id}`
            })
        })
    })
})

export const {
    useGetSingleTaxiQuery,
    useGetSortTaxiQuery,
    useGetTaxiQuery
} = airportApi