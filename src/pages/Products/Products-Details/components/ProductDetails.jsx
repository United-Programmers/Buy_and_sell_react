import React, { useState, useRef, useEffect } from "react"
import "./Styles.css"
import { products } from "./data"
import Colors from "./Colors"
import DetailsThumb from "./DetailsThumb"
import Size from "./Size"
import { Card, Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import { MdShoppingCart } from "react-icons/md"

const ProductDetails = () => {
  const myRef = useRef()
  const [productData, setProductData] = useState(products)
  const [index, setIndex] = useState(0)

  const handleTab = index => {
    setIndex(index)
    const images = myRef.current.children
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "")
    }
    images[index].className = "active"
  }
  useEffect(() => {
    myRef.current.children[index].className = "active"
  }, [])
  return (
    <Card>
      {productData.map(item => (
        <div className="details" key={item._id}>
          <div className="big-img">
            <img src={item.src[index]} alt="" />
            <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />
          </div>

          <div className="box">
            <Row>
              <Col md={8}><h2>{item.title}</h2> </Col>
              <Col md={4}> <h3>${item.price}</h3> </Col>
            </Row>
            <Row>
              <Col md={8}>
                Choose color : <Colors colors={item.colors} /> </Col>
              <Col md={4}> Select Size: <Size sizes={item.size} /> </Col>
            </Row>
            <div>
              <p>Availability: In stock(55)</p>
              <p>Product code: 0405689</p>
              <p>Brand: Lee</p>
              <p>{item.description}</p>
              <p>{item.content}</p>
            </div>

            <Link to={`/shopping-cart`} className="btn-grp "><button className="cart__btn view__btn w-50"><span className="icon"><MdShoppingCart /></span> + Add to cart </button></Link>
          </div>
        </div>
      ))}
    </Card>
  )
}

export default ProductDetails
