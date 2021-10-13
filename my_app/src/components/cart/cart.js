import { useState, useContext, useEffect } from 'react';
/* CUSTOM STYLES */
import './cart.css';
/* MATERIAL UI */
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button'
import ItemCart from '../itemCart/itemCart';

/* CONTEXT */
import cartContext from '../Context/cartContext';

const Cart = ({showCart, close})=> {
    const { products, removeAll } = useContext(cartContext); //FALTA HACER QUE SE ACTUALICE SOLO SIN SALIR DEL CARRITO

    const cleanCart = () => {
        removeAll();
    }

    return ( 
        <div className={showCart ? 'black-container' : undefined} onClick={close}>
            <div className={`cart-container ${showCart ? "active" : ""}`} > 
                <div className="cart-header">
                    <h2>Carrito de compras</h2>
                    <Button variant="contained" className="button-close" onClick={close} >
                    <CloseIcon />
                    </Button>   
                </div>
                <div className="cart-products-container">
                    {
                        products.length == 0 ? 
                        (
                            <p>No hay producto en el carrito, ve a comprar!</p>
                        )
                        :
                        (
                            products.map( (product) => {
                                return(
                                    <ItemCart product={product} />
                                );
                            })
                        )
                    }
                </div>
                <button className="btn-clear"
                    onClick={cleanCart}
                >
                    Limpiar carrito
                </button>
                <div className="cart-footer">
                    <div className="total-price">
                        Precio total: $12.000
                    </div>
                    <div>
                        <Button variant="contained" color="primary" className="button-buy">
                            Comprar
                        </Button>
                    </div>      
                </div>
            </div>
        </div>   
    );
}

export default Cart;