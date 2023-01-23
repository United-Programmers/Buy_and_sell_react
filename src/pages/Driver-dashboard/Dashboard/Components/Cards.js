import React from "react"
import { Row, Card, Col } from "react-bootstrap"
import { CardBody } from "reactstrap"
import { DataCards } from "./DataCards"
import { AiFillStar } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { withRouter, Link } from "react-router-dom"

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container-one">
        {DataCards.map(data => {
          return (
            <div>
              <Card className="card__wrapper p-3 mb-0">
                <CardBody className="mt-0 pt-0">
                  <h4 className="text-uppercase mt-0 pt-0 font-size-17 text-muted text-center">
                    {data.title}
                  </h4>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="float-start font-size-20 text-primary">
                      {data.icon}
                    </div>
                    <h5 className="fw-medium font-size-15 mt-2">
                      {data.value}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h5>
                  </div>
                  <div className="pt-1">
                    <div className="float-end">
                      <Link to="#" className="text-muted">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-muted mb-0 mt-1">{data.date}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards
