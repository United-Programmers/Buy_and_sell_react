import React from "react"
import "./Styles.css"
import {
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

function FourStarReviews() {
    return (
        <Card className="shadow-none">
            <ListGroup flush>
              <ListGroupItem>
                <Card className="border-0 text-start shadow-none">
                  <CardTitle tag="h5">Loadshedding</CardTitle>
                  <div className="d-flex">
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
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
                    <AiFillStar size={16} className="text-warning" />
                    <AiFillStar size={16} className="text-warning" />
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
    )
}

export default FourStarReviews