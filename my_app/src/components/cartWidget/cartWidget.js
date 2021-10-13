import { useContext, useState } from 'react';
/* CUSTOM STYLES */
import './cartWidget.css';
/* MATERIAL UI */
import {Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
/* COMPONENTS */
import Cart from '../cart/cart';
/* CONTEXT */
import CartContext from '../Context/cartContext';

const CartWidget = ()=> {
    const [showCart, setShowCart] = useState(false);
    const {totalItem} = useContext(CartContext);

    const handleShow = () => {
        setShowCart(!showCart);
    }

    return ( 
        <> 
            <Button variant="text" className="btn-cart" onClick={handleShow} >
                <ShoppingCartIcon className="btn-cart__icon" />
                <p>{totalItem == 0 ? '' : totalItem}</p>
            </Button>
            <Cart showCart={showCart} close={handleShow}/>
        </>
    );
}

export default CartWidget;