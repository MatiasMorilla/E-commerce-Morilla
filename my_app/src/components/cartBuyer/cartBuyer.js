import { useState, useContext, useEffect } from 'react';
/* CUSTOM STYLES */
import './cartBuyer.css';
/* MATERIAL UI */
import Button from '@mui/material/Button'
/* COMPONENTS */
import ItemCart from '../itemCart/itemCart';
/* CONTEXT */
import cartContext from '../Context/cartContext';
/* FIRESTORE */
import dataBase from '../../firestore';
import { collection, addDoc } from '@firebase/firestore';

const CartBuyer = ({buyer})=> {
    const { products, total } = useContext(cartContext); //FALTA HACER QUE SE ACTUALICE SOLO SIN SALIR DEL CARRITO


    const order = {
        buyer: buyer,
        item : products,
        total: total
    }

    const addOrder = async(newOrder) => {
        newOrder = order;
        const orderFirebase = collection(dataBase, "orders");
        const orderFirestore = await addDoc(orderFirebase, newOrder);
    }

    return ( 
        <div className="cartbuyer-container" > 
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
            <div className="cart-footer">
                <div className="total-price">
                    Precio total: $ {total}
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        className="button-buy" 
                        onClick={addOrder}
                        disabled={products.length === 0}    
                    >
                        Comprar
                    </Button>
                </div>      
            </div>
        </div>
    );
}

export default CartBuyer;