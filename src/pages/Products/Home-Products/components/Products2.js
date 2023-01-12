import React from "react"
import "./productCard.scss"
import { Button, Col, Container, Row, CardBody, Card } from "reactstrap"

function Products() {
    return (
        <Row className="product_container">
            <Col md={3}>
                <h3>card 1</h3>
            </Col>
            <Col md={3}>
                <h3>card 2</h3>
            </Col>
            <Col md={3}>
                <h3>card 3</h3>
            </Col>
            <Col md={3}>
                <h3>card 4</h3>
            </Col>
        </Row>
    )
}

export default Products
