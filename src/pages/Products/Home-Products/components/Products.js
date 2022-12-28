import React from "react"
import "./productCard.scss"
import { Button, Col, Container, Row, CardBody, Card } from "reactstrap"

function Products() {
  return (
    <Row className="product_container">
      <Col md={4} className="product_wrapper">
        <div className="product">
          <span className="product__price">$120</span>
          <img
            className="product__image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
          />
          <h1 className="product__title">Nike Roshe Run Print</h1>
          <hr />
          <p className="product__summary">
            The Nike Roshe One Print Men's Shoe offers breathability,
            lightweight cushioning and bold style with an injected unit midsole
            and colorful mesh upper.
          </p>
          <Button href="#" className="product__btn btn">
            Buy Now
          </Button>
        </div>
      </Col>
      <Col md={4} className="product_wrapper">
        <div className="product">
          <span className="product__price">$120</span>
          <img
            className="product__image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
          />
          <h1 className="product__title">Nike Roshe Run Print</h1>
          <hr />
          <p className="product__summary">
            The Nike Roshe One Print Men's Shoe offers breathability,
            lightweight cushioning and bold style with an injected unit midsole
            and colorful mesh upper.
          </p>
          <Button href="#" className="product__btn btn">
            Buy Now
          </Button>
        </div>
      </Col>
      <Col md={4} className="product_wrapper">
        <div className="product">
          <span className="product__price">$120</span>
          <img
            className="product__image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
          />
          <h1 className="product__title">Nike Roshe Run Print</h1>
          <hr />
          <p className="product__summary">
            The Nike Roshe One Print Men's Shoe offers breathability,
            lightweight cushioning and bold style with an injected unit midsole
            and colorful mesh upper.
          </p>
          <Button href="#" className="product__btn btn">
            Buy Now
          </Button>
        </div>
      </Col>
      <Col md={4} className="product_wrapper">
        <div className="product">
          <span className="product__price">$120</span>
          <img
            className="product__image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
          />
          <h1 className="product__title">Nike Roshe Run Print</h1>
          <hr />
          <p className="product__summary">
            The Nike Roshe One Print Men's Shoe offers breathability,
            lightweight cushioning and bold style with an injected unit midsole
            and colorful mesh upper.
          </p>
          <Button href="#" className="product__btn btn">
            Buy Now
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default Products
