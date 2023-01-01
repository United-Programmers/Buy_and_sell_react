// import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../../../../Redux/Slices/cartSlice';
import { useDispatch_2 } from '../../../../index';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch_2();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <IoIosArrowDropup size={30} />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <IoIosArrowDropdown size={30} />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
