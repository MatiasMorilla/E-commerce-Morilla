import { useState } from 'react';
/* CUSTOM STYLES */
import './cartWidget.css';
/* MATERIAL UI */
import {Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from '../cart/cart';

const CartWidget = ()=> {
    const [showCart, setShowCart] = useState(false);

    const handleShow = () => {
        setShowCart(!showCart);
    }

    return ( 
        <> 
            <Button variant="text" className="btn-cart" onClick={handleShow} >
                <ShoppingCartIcon className="btn-cart__icon" />
                <p>1</p>
            </Button>
            <Cart showCart={showCart} close={handleShow}/>
        </>
    );
}

export default CartWidget;