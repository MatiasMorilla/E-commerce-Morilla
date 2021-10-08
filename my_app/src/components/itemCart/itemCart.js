import { useContext } from 'react';
/* CUSTOM STYLES */
import './itemCart.css';
/* MATERIAL UI */
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button'

/* CONTEXT */
import CartContext from '../Context/cartContext';


const ItemCart = ({product})=> {
    const { removeProduct } = useContext(CartContext);

    const removeFromCart = () =>{
        removeProduct(product)
    }

    return ( 
        <div className="product">
            <div className="product-img">
                <img src={product.images[0]}/>
            </div>
            <div className="product-data">
                <h5>{product.name}</h5>
                <span>${product.price}</span>
            </div>
            <div className="product-quantity">
                <span>{product.quantity}</span>
            </div> 
            <div className="product-delete">
                <Button className="button-delete"
                    onClick={removeFromCart}    
                >
                    <DeleteForeverIcon className="button-delete-icon" />
                </Button>   
            </div>  
        </div>
    );
}

export default ItemCart;