import React from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags title_sco="Product page | Buy and sell" />

        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Product page</h6>

              </Col>


            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard