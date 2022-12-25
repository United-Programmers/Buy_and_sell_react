import React from 'react'
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
  Collapse,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import { orderDetails } from "./data"
import { withRouter, Link } from "react-router-dom"

function NewOrders() {

    return (
        <Card>
            <CardBody>
              <CardTitle className="mb-4">New Orders</CardTitle>
              <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="align-middle">Order ID</th>
                      <th className="align-middle">Date</th>
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

                        {/* Date */}
                        <td>{orderDetails.Date}</td>

                        {/* product image */}
                        <td>
                          <img className="rounded-circle"
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
    )
}

export default NewOrders