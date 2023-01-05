import React from "react"
import "./Styles.css"
import {
  Col,
  Container,
  Row,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardLink,
  Progress,
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap"
import { withRouter, Link } from "react-router-dom"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { FaThumbsUp } from "react-icons/fa"

function AllReviews() {
  return (
    <div>
      <Row>
        <Col xs="12" lg="4">
          <Card className="bg-white p-3 shadow-lg">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h1 className="fw-bolder text-dark display-4">4.6</h1>
              <span className="d-flex">
                <AiFillStar size={20} className="text-warning" />
                <AiFillStar size={20} className="text-warning" />
                <AiFillStar size={20} className="text-warning" />
                <AiFillStar size={20} className="text-warning" />
                <AiFillStar size={20} className="text-warning" />
              </span>
              <p className="mt-2 text-dark">333 Reviews</p>
            </div>

            <div>
              <Link>
                <Row className="progress-perc m-0 p-0 align-items-center justify">
                  <Col className="text-dark m-0 p-0">5</Col>
                  <Col>
                    <AiFillStar size={16} className="text-warning m-0 p-0" />
                  </Col>
                  <Col xs={8} className="mb-30 m-0 p-0">
                    <Progress color="primary" value={80} />
                  </Col>
                  <Col xs={2} className="text-dark text-end m-0 p-0">
                    241
                  </Col>
                </Row>
              </Link>
              <Link>
                <Row className="progress-perc m-0 p-0 align-items-center justify">
                  <Col className="text-dark m-0 p-0">4</Col>
                  <Col>
                    <AiFillStar size={16} className="text-warning m-0 p-0" />
                  </Col>
                  <Col xs={8} className="mb-30 m-0 p-0">
                    <Progress color="success" value={12} />
                  </Col>
                  <Col xs={2} className="text-dark text-end m-0 p-0">
                    64
                  </Col>
                </Row>
              </Link>
              <Link>
                <Row className="progress-perc m-0 p-0 align-items-center justify">
                  <Col className="text-dark m-0 p-0">3</Col>
                  <Col>
                    <AiFillStar size={16} className="text-warning m-0 p-0" />
                  </Col>
                  <Col xs={8} className="mb-30 m-0 p-0">
                    <Progress color="info" value={4} />
                  </Col>
                  <Col xs={2} className="text-dark text-end m-0 p-0">
                    14
                  </Col>
                </Row>
              </Link>
              <Link>
                <Row className="progress-perc m-0 p-0 align-items-center justify">
                  <Col className="text-dark m-0 p-0">2</Col>
                  <Col>
                    <AiFillStar size={16} className="text-warning m-0 p-0" />
                  </Col>
                  <Col xs={8} className="mb-30 m-0 p-0">
                    <Progress color="warning" value={2} />
                  </Col>
                  <Col xs={2} className="text-dark text-end m-0 p-0">
                    4
                  </Col>
                </Row>
              </Link>
              <Link>
                <Row className="progress-perc m-0 p-0 align-items-center justify">
                  <Col className="text-dark m-0 p-0">1</Col>
                  <Col>
                    <AiFillStar size={16} className="text-warning m-0 p-0" />
                  </Col>
                  <Col xs={8} className="mb-30 m-0 p-0">
                    <Progress color="danger" value={3} />
                  </Col>
                  <Col xs={2} className="text-dark text-end m-0 p-0">
                    12
                  </Col>
                </Row>
              </Link>
            </div>
          </Card>
        </Col>
        <Col xs="12" lg="8">
          <Card className="shadow-lg">
            <ListGroup flush>
              <ListGroupItem>
                <Card className="border-0 text-start shadow-none">
                  <CardTitle tag="h5">Loadshedding</CardTitle>
                  <div className="d-flex">
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
                    <AiOutlineStar size={16} className="text-warning" />
                    <AiOutlineStar size={16} className="text-warning" />
                  </div>
                  <CardSubtitle className="my-3 text-muted" tag="h6">
                    <span tag="h6">Anya - 22 Jun 2022 </span>
                    <span className="fst-italic fw-light">
                      (Reviewed a month after purchase)
                    </span>
                  </CardSubtitle>
                  <CardText>
                    Got this to help during loadshedding with alarm system - 3
                    point pronk cannot easily insert - not really for an elderly
                    person usage.
                  </CardText>
                  <div class="d-flex align-items-center">
                    <CardLink
                      href="#"
                      className="d-inline-flex border rounded-pill align-items-center px-3 py-2 g-2"
                    >
                      <FaThumbsUp />
                      <span className="mx-1">Helpful</span>
                      <span>(8)</span>
                    </CardLink>
                    <CardLink href="#">Report Review</CardLink>
                  </div>
                </Card>
              </ListGroupItem>
              <ListGroupItem>
                <Card className="border-0 text-start shadow-none">
                  <CardTitle tag="h5">Disappointing</CardTitle>
                  <div className="d-flex">
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
                    <AiOutlineStar size={16} className="text-warning" />
                    <AiOutlineStar size={16} className="text-warning" />
                    <AiOutlineStar size={16} className="text-warning" />
                  </div>
                  <CardSubtitle className="my-3 text-muted" tag="h6">
                    <span tag="h6">Mike - 26 Nov 2022 </span>
                    <span className="fst-italic fw-light">
                      (Reviewed 4 days after purchase)
                    </span>
                  </CardSubtitle>
                  <CardText>
                    Got this to help during loadshedding with alarm system - 3
                    point pronk cannot easily insert - not really for an elderly
                    person usage. Got this to help during loadshedding with
                    alarm system - 3 point pronk cannot easily insert - not
                    really for an elderly person usage. Got this to help during
                    loadshedding with alarm system - 3 point pronk cannot easily
                    insert - not really for an elderly person<Link>... Read more</Link>
                  </CardText>
                  <div class="d-flex align-items-center">
                    <CardLink
                      href="#"
                      className="d-inline-flex border rounded-pill align-items-center px-3 py-2 g-2"
                    >
                      <FaThumbsUp />
                      <span className="mx-1">Helpful</span>
                      <span>(3)</span>
                    </CardLink>
                    <CardLink href="#">Report Review</CardLink>
                  </div>
                </Card>
              </ListGroupItem>
              <ListGroupItem>
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink>Previous</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink>
                      2<span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">Next</PaginationLink>
                  </PaginationItem>
                </Pagination>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AllReviews
