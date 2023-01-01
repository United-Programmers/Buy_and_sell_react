
import "../style.scss"
import CartItem from './CartItem';
import { useDispatch_2, useSelector_2 } from '../../../../index';
import { cartItem, amount, total, ClearCart } from "../../../../Redux/Slices/cartSlice";


const CartContainer = () => {
  const dispatch = useDispatch_2();
  const cartDet = useSelector_2(cartItem);
  const amountDet = useSelector_2(amount);
  const totalDet = useSelector_2(total);

  console.log(cartDet)

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartDet.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${totalDet.toFixed(2)}</span>
          </h4>
        </div>
        {/* <button className='btn clear-btn' onClick={() => dispatch(openModal())}> */}
        <button className='btn clear-btn' onClick={() => dispatch(ClearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
