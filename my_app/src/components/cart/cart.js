import { useState, useContext, useEffect } from 'react';
/* CUSTOM STYLES */
import './cart.css';
/* MATERIAL UI */
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button'
import ItemCart from '../itemCart/itemCart';

/* CONTEXT */
import cartContext from '../Context/cartContext';
import { Link } from 'react-router-dom';

const Cart = ({showCart, close})=> {
    const { products, removeAll, total } = useContext(cartContext); //FALTA HACER QUE SE ACTUALICE SOLO SIN SALIR DEL CARRITO

    const cleanCart = () => {
        removeAll();
    }

    return ( 
        <div className={showCart ? 'black-container' : undefined}>
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
                            <p>No hay productos en el carrito</p>
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
                        Precio total: $ {total}
                    </div>
                    <div>
                        <Link to={"/Cart"} className="link-buttonBuy" >
                            <Button variant="contained" className="button-buy">
                                Comprar
                            </Button>
                        </Link>
                    </div>      
                </div>
            </div>
        </div>   
    );
}

export default Cart;