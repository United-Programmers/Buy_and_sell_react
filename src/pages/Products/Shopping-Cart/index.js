import React from "react"
import "./style.scss"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"
import Breadcrumb from "components/Common/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import { useDispatch_2, useSelector_2 } from '../../../index';
import { getCartItems } from './../../../Redux/Slices/cartSlice';
import CartContainer from "./components/CartContainer";
import RelatedProducts from "./components/RelatedProducts";

const ShoppingCart = () => {

    const { cartItem, amount, total } = useSelector_2((store) => store.cart);
    const dispatch = useDispatch_2();
    React.useEffect(() => { dispatch(getCartItems()) }, [])

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
        <React.Fragment>
            <div className="page-content">
                <MetaTags title_sco="Shopping cart page | Buy and sell" />

                <PageWrapper>
                    <Breadcrumb default="/shopping-cart" defaultName="shopping-cart" title="my cart" />
                    <CartContainer cartItem={cartItem} />
                    <RelatedProducts />
                </PageWrapper>

            </div>
        </React.Fragment>
    )
}

export default ShoppingCart