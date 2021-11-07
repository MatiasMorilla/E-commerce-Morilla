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
import { Modal } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CartBuyer = ({buyer, validForm})=> {
    const { products, total } = useContext(cartContext);
    const [openModal, setOpenModal] = useState(false);
    const [orderCode, setOrderCode] = useState("");

    const order = {
        buyer: buyer,
        item : products,
        total: total
    }

    const addOrder = async(newOrder) => {
        if(validForm)
        {
            newOrder = order;
            const orderFirebase = collection(dataBase, "orders");
            const orderFirestore = await addDoc(orderFirebase, newOrder);
            setOrderCode(orderFirestore._key.path.segments[1]);
        }
        handleOpenModal();
    }

    const handleOpenModal = () =>{
        setOpenModal(true);
    }

    const handleCloseModal = () =>{
        setOpenModal(false);
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
                <Modal open={openModal}>
                    <div className="modal-container">
                        <div className="text-container"> 
                            <h2>
                                {
                                    validForm ? "Compra realizada con exito!" 
                                              :"Debe rellenar todo los campos requeridos para poder completar la compra!"
                                }
                            </h2>
                        </div>
                        <div className="item-container">
                            <p>Codigo de compra: {orderCode}</p>
                        </div>
                        <div className="buttons-container">
                            {
                                validForm ?
                                (
                                    <Link to={"/"} className="link_modal" >
                                        <Button color="primary" variant="contained" fullWidth={true}>Aceptar</Button>
                                    </Link>
                                )
                                :
                                (
                                    <Button 
                                        color="primary" 
                                        variant="contained"
                                        onClick={handleCloseModal}
                                        fullWidth={true}
                                        >
                                            Aceptar
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </Modal>      
            </div>
        </div>
    );
}

export default CartBuyer;