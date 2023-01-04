import React from 'react'
import Product2 from "./Product2"
import { productData } from "./productData";

function Products2() {
    const results= productData.map(eachData=>{
        return (
          <Product2/>
        )
    })
  return (
   
    <div className='product2'>
        
      {results}
        
        
    </div>
  )
}

export default Products2