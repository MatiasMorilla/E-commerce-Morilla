/* CUSTOM STYLES */
import './cartWidget.css';
/* MATERIAL UI */
import {Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = ()=> {
    return ( 
        <> 
            <Button variant="text" className="btn-cart">
                <ShoppingCartIcon className="btn-cart__icon" />
                <p>1</p>
            </Button>
        </>
    );
}

export default CartWidget;