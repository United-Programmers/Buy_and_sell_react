import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch_2 } from '../../../../index';
import { decrease, increase, removeItem } from './../../../../Redux/Slices/cartSlice';
import { MdDeleteOutline } from 'react-icons/md';


function CartBox({ items }) {
    const dispatch = useDispatch_2();
    const { img, title, id, price, amount } = items

    return (
        <article className='cart-item' key={id}>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn' onClick={() => dispatch(removeItem(id))}> <MdDeleteOutline size={20} /> remove </button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => dispatch(increase({ id }))}>
                    <AiOutlinePlusCircle size={28} />
                </button>

                <p className='amount'>{amount}</p>

                <button className='amount-btn'
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease({ id }));
                    }}>
                    <AiOutlineMinusCircle size={28} />
                </button>
            </div>
        </article>
    )
}

export default CartBox