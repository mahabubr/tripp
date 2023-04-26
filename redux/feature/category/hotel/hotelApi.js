import apiSlice from "../../api/apiSlice";

const hotelApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        geHotel: builder.query({
            query: () => ({
                url: '/hotel/'
            })
        }),
        getSortHotel: builder.query({
            query: () => ({
                url: '/sort-hotel/'
            })
        }),
        getSingleHotel: builder.query({
            query: (id) => ({
                url: `/hotel/${id}`
            })
        })
    })
})

export const {
    useGeHotelQuery,
    useGetSingleHotelQuery,
    useGetSortHotelQuery
}
    = hotelApi