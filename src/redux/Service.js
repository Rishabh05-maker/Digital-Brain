import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const DigitalBrainApiSlice = createApi({
    
  reducerPath:"digitalBrainAPI",
  baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_APP_BASE_URL}),
  endpoints:(builder)=>({

    register:builder.mutation({

      query:(userData)=>({
        url:"/user/register",
        method:"POST",
        body: userData

      }),
     
    }),

    login:builder.mutation({
      query:(userData)=>({
        url:'/user/login',
        method:"POST",
        body: userData
      })
    }),

    category:builder.mutation({
      query:({categoryName})=>({
        url:'/category/create',
        method:"POST",
        body: {categoryName}
      })
      }),

      getAllcategory:builder.query({
        query:(body)=>({
          url:'/category/getAllcategory',
          method:"GET",
          body
        })
        }),



      subcategory:builder.mutation({
        query:(body)=>({
          url:'/subcategory/createsubcategory',
          method:"POST",
          body
        })
    }),
    getSubcategory:builder.query({
      query:(body)=>({
        url:'/subcategory/getAllSubcategory',
        method:"GET",
        body
      })
  }),


  })
})

export default DigitalBrainApiSlice


export const {useRegisterMutation, useLoginMutation, useCategoryMutation,
   useSubcategoryMutation, useGetAllcategoryQuery, useGetSubcategoryQuery } = DigitalBrainApiSlice
