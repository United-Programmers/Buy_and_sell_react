import React from "react"
import MetaTags from "react-meta-tags"
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Badge,
  CardText,
} from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb"
import { withRouter, Link } from "react-router-dom"
import PageWrapper from "components/PageWrapper"

const Orders = () => {
  const orderDetails = [
    {
      orderId: "#SK2540",
      productName:
        "https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      productInfo: "MacBook air M2",
      price: "$400",
      link: "#",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      productName:
        "https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      productInfo: "MacBook air M2",
      price: "$380",
      link: "#",
    },
    {
      id: "customCheck4",
      orderId: "#SK2542",
      productName:
        "https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      productInfo: "MacBook air M2",
      price: "$384",
      link: "#",
    },
    {
      id: "customCheck5",
      orderId: "#SK2543",
      productName:
        "https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      productInfo: "MacBook air M2",
      price: "$412",
      link: "#",
    },
    {
      id: "customCheck6",
      orderId: "#SK2544",
      productName:
        "https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      productInfo: "MacBook air M2",
      price: "$404",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      productName:
        "https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      productInfo: "MacBook air M2",
      price: "$392",
      link: "#",
    },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags title_sco="Orders page | Buy and sell" />

        <PageWrapper>
          <Breadcrumb
            default="/orders"
            defaultName="Products"
            title="all product"
          />

          <Card>
            <CardBody>
              <CardTitle className="mb-4">New Orders</CardTitle>
              <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="align-middle">Order ID</th>
                      <th className="align-middle">Product image</th>
                      <th className="align-middle">Product Details</th>
                      <th className="align-middle">Price</th>
                      <th className="align-middle"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.map((orderDetails, key) => (
                      <tr key={"_tr_" + key}>
                        <td>
                          <Link to="#" className="text-body fw-bold">
                            {" "}
                            {orderDetails.orderId}{" "}
                          </Link>{" "}
                        </td>

                        {/* product image */}
                        <td>
                          <img
                            src="https://images.pexels.com/photos/14018171/pexels-photo-14018171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                            style={{
                              height: 50,
                              width: 50,
                            }}
                          />
                        </td>

                        {/* product info */}
                        <td>{orderDetails.productInfo}</td>

                        {/* product price */}
                        <td>{orderDetails.price}</td>

                        <td className="align-end">
                          <Button
                            type="button"
                            color="primary"
                            size="sm"
                            className="btn-rounded waves-effect waves-light"
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </PageWrapper>
      </div>
    </React.Fragment>
  )
}

export default Orders
