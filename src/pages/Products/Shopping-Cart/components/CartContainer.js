import { useDispatch_2, useSelector_2 } from 'index';
import { ClearCart } from 'Redux/Slices/cartSlice';
import CartBox from './CartBox';
import { Card, Col, Row } from 'reactstrap';
import { CardBody } from 'reactstrap';

const CartContainer = ({ cartItem }) => {
  const { total } = useSelector_2((store) => store.cart);
  const dispatch = useDispatch_2();


  return (
    <section className='cart'>
      <Row>
        <Col md={8}>
          {cartItem.map((item) => <CartBox key={item.id} items={item} />)}
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <h4> total <span>${total.toFixed(2)}</span>  </h4>
              <button className='btn clear-btn' onClick={() => dispatch(ClearCart())}> clear cart</button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
};
export default CartContainer;
