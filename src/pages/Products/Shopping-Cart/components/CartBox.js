import React from "react"
import { Card, Col, Row } from "reactstrap"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useDispatch_2 } from "../../../../index"
import {
  decrease,
  increase,
  removeItem,
} from "./../../../../Redux/Slices/cartSlice"
import { MdDeleteOutline } from "react-icons/md"

function CartBox({ items }) {
  const dispatch = useDispatch_2()
  const { img, title, id, price, amount } = items

  return (
    <Card className="cart-item bg-white d-flex flex-direction-row" key={id}>
      <Row className="p-4">
          <Col xs={2} className="d-flex justify-content-center align-items-center"><img src={img} alt={title} /></Col>
          <Col xs={7}>
              <div className="text-start">
                <h5>{title}</h5>
                <p>
                  {" "}
                  Got this to help during loadshedding with alarm system - 3 point pronk
                  cannot easily insert
                </p>
                <div className="d-flex align-items-center">
                  {/* quantity buttons */}
                  <button
                    className="amount-btn bg-light p-1 rounded" style={{width:"auto"}}
                    onClick={() => {
                      if (amount === 1) {
                        dispatch(removeItem(id))
                        return
                      }
                      dispatch(decrease({ id }))
                    }}
                  >
                    <IoRemoveOutline size={22} />
                  </button>
                  <p className="amount mx-2">{amount}</p>
                  <button
                    className="amount-btn me-1 bg-primary text-light p-1 rounded" style={{width:"auto"}}
                    onClick={() => dispatch(increase({ id }))}
                  >
                    <IoAddOutline size={22} />
                  </button>
                  
                </div>
              </div>
          </Col>
          <Col xs={3}>
              <div className="d-flex flex-column justify-content-end">
                <button className="remove-btn text-danger mb-4" onClick={() => dispatch(removeItem(id))}>
                  {" "}
                  <MdDeleteOutline size={30} />
                </button>
                <h4 className="item-price">${price}</h4>
              </div>
          </Col>
      </Row>
    </Card>
  )
}

export default CartBox
