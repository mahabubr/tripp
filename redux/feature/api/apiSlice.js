// import { SERVER_BASE_URL } from '@env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.0.2.2:5000'
    }),
    endpoints: (builder) => ({})
})

export default apiSlice