import React from "react"
import ProductImage from "../../../../../src/assets/images/product/img-4.png"
import Table from "react-bootstrap/Table"
import { BsThreeDots } from "react-icons/bs"
import "../style.css"

export const AssigOrderPage = () => {
  return (
    <div className="bg-white rounded">
      <div>
        <h5 className=" text-sm  py-3 px-2">Assign Orders</h5>
      </div>

      <Table style={{ width: "100%" }}>
        <thead className="bg-white">
          <tr className="text-center">
            <th>Pic</th>
            <th>Product name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Deliver Type</th>
            <th>Total Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="bg-white   ">
          <tr>
            <td style={{ width: "10%", height: "10%" }}>
              <img src={ProductImage} alt="productImage"></img>
            </td>
            <td>
              <h6 className="text-sm">Red T-shirt</h6>
              <p className="text-primary ">Jumia Proudct</p>
            </td>
            <td>Red</td>
            <td>Sm</td>
            <td>Paid</td>
            <td>5</td>
            <td>200</td>
            <td>on-site</td>
            <td>#200</td>
            <td>12/05/2030</td>
            <td>
              <BsThreeDots color="black" size={20} />
              <BsThreeDots color="black" size={20} />
            </td>
          </tr>
          <tr>
            <td style={{ width: "10%", height: "10%" }}>
              <img src={ProductImage} alt="productImage"></img>
            </td>
            <td>
              <h6 className="text-sm">Red T-shirt</h6>
              <p className="text-primary ">Jumia Proudct</p>
            </td>
            <td>Red</td>
            <td>Sm</td>
            <td>Paid</td>
            <td>5</td>
            <td>200</td>
            <td>on-site</td>
            <td>#200</td>
            <td>12/05/2030</td>
            <td>
              <BsThreeDots color="black" size={20} />
              <BsThreeDots color="black" size={20} />
            </td>
          </tr>
          <tr>
            <td style={{ width: "10%", height: "10%" }}>
              <img src={ProductImage} alt="productImage"></img>
            </td>
            <td>
              <h6 className="text-sm">Red T-shirt</h6>
              <p className="text-primary ">Jumia Proudct</p>
            </td>
            <td>Red</td>
            <td>Sm</td>
            <td>Paid</td>
            <td>5</td>
            <td>200</td>
            <td>on-site</td>
            <td>#200</td>
            <td>12/05/2030</td>
            <td>
              <BsThreeDots color="black" size={20} />
              <BsThreeDots color="black" size={20} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
