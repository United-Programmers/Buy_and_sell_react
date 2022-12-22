import React from "react"
import MetaTags from "react-meta-tags"
import {Col,
    Container,
    Row,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,} from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import PageWrapper from "components/PageWrapper"

const Account = () => {
    const userName = "John Doe";

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags title_sco="Account page | Buy and sell" />

        <PageWrapper>
          <Breadcrumb
            default="/account"
            defaultName="Account"
            title="account"
          />

          {/* WRITE YOUR CODE HERE */}
          <div>
            <Card inverse>
              <CardImg
                className="rounded"
                alt="Card image cap"
                src="https://www.wallpaperup.com/uploads/wallpapers/2013/12/12/193670/63bad3beee18eef1a2767ad7fee9b8fb-700.jpg"
                style={{
                  height: 200,
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle className="text-white">
                  <h1>Hi {userName} </h1>
                </CardTitle>
              </CardImgOverlay>
            </Card>

            <Row className="gy-2 my-3">
              <Col>
                <Card sm className="p-2 border rounded">
                  <Row className="gy-2 align-items-center">
                    <Col xs="3">
                      <CardImg
                        className="rounded-circle me-1"
                        alt="Card image cap"
                        src="https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        style={{
                          height: 70,
                          width: 70,
                        }}
                      />
                    </Col>
                    <Col xs="9">
                      <CardTitle className="text-muted">
                        <h4>Your Order</h4>
                      </CardTitle>
                      <CardText className="text-muted">
                        Track, Return or Buy again
                      </CardText>
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col>
                <Card sm className="p-2 border rounded">
                  <Row className="gy-2 align-items-center">
                    <Col xs="3">
                      <CardImg
                        className="rounded-circle"
                        alt="Card image cap"
                        src="https://images.pexels.com/photos/2928232/pexels-photo-2928232.jpeg?auto=compress&cs=tinysrgb&w=400"
                        style={{
                          height: 70,
                          width: 70,
                        }}
                      />
                    </Col>
                    <Col xs="9">
                      <CardTitle className="text-muted">
                        <h4>Your Profile</h4>
                      </CardTitle>
                      <CardText className="text-muted">
                        View and manage your profile
                      </CardText>
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col>
                <Card sm className="p-2 border rounded">
                  <Row className="gy-2 align-items-center">
                    <Col xs="3">
                      <CardImg
                        className="rounded-circle"
                        alt="Card image cap"
                        src="https://images.pexels.com/photos/177707/pexels-photo-177707.jpeg?auto=compress&cs=tinysrgb&w=400"
                        style={{
                          height: 70,
                          width: 70,
                        }}
                      />
                    </Col>
                    <Col xs="9">
                      <CardTitle className="text-muted">
                        <h4>Your Messages</h4>
                      </CardTitle>
                      <CardText className="text-muted">
                        Talk directly to the vendors
                      </CardText>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </PageWrapper>
      </div>
    </React.Fragment>
  )
}

export default Account
