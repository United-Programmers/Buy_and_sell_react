import { useDispatch_2, useSelector_2 } from "index"
import { ClearCart } from "Redux/Slices/cartSlice"
import CartBox from "./CartBox"
import { Card, Col, Row } from "reactstrap"
import { CardBody } from "reactstrap"

const CartContainer = ({ cartItem }) => {
  const { total } = useSelector_2(store => store.cart)
  const dispatch = useDispatch_2()

  return (
    <section className="cart mt-0 pt-0 mb-3">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        style={{ width: "100%", height: "10rem" }}
      />
      <Row>
        <Col md={8}>
          {cartItem.map(item => (
            <CartBox key={item.id} items={item} />
          ))}
        </Col>
        <Col md={4} className="mt-4">
          <Card className="px-3 py-2">
            <CardBody>
              <h4 className="text-dark">Cart Summary</h4>
              <div className="d-flex justify-content-between">
                <h5>Total:</h5>
                <span className="h4">${total.toFixed(2)}</span>
              </div>
              <button
                className="btn mt-3 bg-primary text-white text-center rounded py-2"
                style={{ width: "100%" }}
              >
                Proceed to Checkout
              </button>
              <button
                className="btn clear-btn mt-3 bg-white border border-primary text-center text-primary rounded py-2"
                onClick={() => dispatch(ClearCart())}
                style={{ width: "100%" }}
              >
                {" "}
                Clear Cart
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
export default CartContainer
