import React, { useState, useRef, useEffect } from "react"
import "./Styles.css"
import { products } from "./data"
import Colors from "./Colors"
import DetailsThumb from "./DetailsThumb"
import Size from "./Size"
import { Card } from "reactstrap"

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
          </div>

          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <Colors colors={item.colors} />
            <Size sizes={item.size} />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ))}
    </Card>
  )
}

export default ProductDetails
