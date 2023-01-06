import { useDispatch_2, useSelector_2 } from "index"
import { ClearCart } from "Redux/Slices/cartSlice"
import CartBox from "./CartBox"
import { Card, Col, Row } from "reactstrap"
import { CardBody } from "reactstrap"

const CartContainer = ({ cartItem }) => {
  const { total } = useSelector_2(store => store.cart)
  const dispatch = useDispatch_2()

  return (
    <section className="cart">
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614851099175-e5b30eb6f696%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lcnxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbanner&tbnid=L5P4z3JcN-yT7M&vet=12ahUKEwjCy86Sv7H8AhUBrycCHRCRCNgQMygIegUIARD3AQ..i&docid=xJ4TKr2699Cc3M&w=1000&h=667&q=banner%20image&ved=2ahUKEwjCy86Sv7H8AhUBrycCHRCRCNgQMygIegUIARD3AQ"
        alt=""
        style={{ width: "100%", height: "auto" }}
      />
      <Row>
        <Col md={8}>
          {cartItem.map(item => (
            <CartBox key={item.id} items={item} />
          ))}
          <button
            className="btn clear-btn mt-3 bg-primary text-white rounded"
            onClick={() => dispatch(ClearCart())}
          >
            {" "}
            clear cart
          </button>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <CardBody>
              <h4>Cart Summary</h4>
              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <span className="h4">${total.toFixed(2)}</span>
              </div>
              <button className="btn mt-3 bg-primary text-white rounded">
                Proceed to Checkout
              </button>
              {/* <button
                className="btn clear-btn"
                onClick={() => dispatch(ClearCart())}
              >
                {" "}
                clear cart
              </button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
export default CartContainer
