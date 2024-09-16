import React from 'react'
import { useGetSubcategoryQuery } from '../redux/Service'





const CheckApi = () => {
    
const {data:hello} = useGetSubcategoryQuery()

console.log(hello)


  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default CheckApi
