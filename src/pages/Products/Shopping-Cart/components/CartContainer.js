import { useDispatch_2, useSelector_2 } from "index"
import { ClearCart } from "Redux/Slices/cartSlice"
import CartBox from "./CartBox"
import { Card, Col, Row } from "reactstrap"
import { CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiTwotoneLock } from "react-icons/ai"
import CustomBtn from "components/CustomBtn";
import { FaAmazonPay } from "react-icons/fa"

const CartContainer = ({ cartItem }) => {
  const { total } = useSelector_2(store => store.cart)
  const dispatch = useDispatch_2()

  return (
    <section className="cart mt-0 pt-0 mb-3">
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt=""
        style={{ width: "100%", height: "15em", borderRadius: "15px" }}
      />
      <Row>
        <Col md={8}>
          {cartItem.map(item => (
            <CartBox key={item.id} items={item} />
          ))}
        </Col>
        <Col md={4} className="mt-4">
          <Card className="px-3 py-2 text-center">
            <CardBody>
              <h4>Order Summary</h4>
              <p>2 Items &emsp;&emsp;&emsp;&emsp;R15,247</p>
              <hr />
              <p>TO PAY: &emsp;&emsp;&emsp;<b style={{ color: "rgba(169, 65, 194, 1)" }}>R15,247</b></p>
              <hr />
              <Link to="/deliver-address-details"> <CustomBtn btnName="Proceed to Checkout" icon={<FaAmazonPay size={24} />} /> </Link>
              <p className="my-4"><AiTwotoneLock /> <b>Secure Checkout</b></p>
              <button
                className="btn clear-btn mt-3 bg-white border border-danger text-center text-primary rounded py-2"
                onClick={() => dispatch(ClearCart())}
                style={{ width: "60%" }}
              >
                <span className="text-danger"> Clear Cart </span>  <span className="text-danger"> <RiDeleteBin6Line /> </span>
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
export default CartContainer
