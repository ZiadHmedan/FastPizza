// import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// export const apiSlice = createApi({
//     reducerPath:'api',
//     baseQuery:fetchBaseQuery({baseUrl:'https://react-fast-pizza-api.onrender.com/api'}),
//     endpoints: (builder) => ({
//         getMenus: builder.query({
//             query: () => './menu'
//         }),
//         getOrder: builder.query({
//             query: (id) => `/order/${id}`
//         })
//     })
// }) 
// export const{
// useGetMenusQuery,
// useGetOrderQuery,
// } = apiSlice