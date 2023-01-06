import React from 'react';
import Product2 from "./Product2";
import { productData } from "./productData";
import { Button, Col, Container, Row, CardBody, Card } from "reactstrap"

function Products2() {
    const results= productData.map(eachData=>{
        return (
          <Row xs={3} className='products2 '>
            <Product2 new={eachData.new} num={eachData.num}/>
          </Row> 
        )
    })
  return (
   
    <div >
        <Row md={2} lg={2} xl={3}  className='products2 sm:grid md:-cols-2 xl:grid-cols-3 align-items-center justify-content-center '>
          {results}
        </Row>
      
   
    </div>
  )
}

export default Products2