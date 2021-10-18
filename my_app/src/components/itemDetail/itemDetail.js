import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
/* CUSTOM STYLE */
import './itemDetail.css';
/* COMPONETS */
import ItemSize from '../itemSize/itemSize';
import ItemCount from '../itemCount/itemCount';
import ItemCart from '../itemCart/itemCart';
/* MATERIAL UI */
import Button from "@material-ui/core/Button";
import Modal from '@mui/material/Modal';
/* CONTEXT */
import CartContext from '../Context/cartContext';


function ItemDetail({product}) {
    const [mainImage, setMainImage] = useState(`/static/media/${product.image[0]}`);
    const [quantity, setQuantity] = useState(1);
    const {addProduct} = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false);

    
    const handleChangeImage = (e) => {
        setMainImage(e.target.src);
    }

    const addToCart = () => {
        addProduct(product, quantity);
        handleOpenModal();
    }

    const onAdd = () => {
        quantity < product.stock && setQuantity(quantity + 1);
    }

    const onSubtract = () => {
        quantity != 0 && setQuantity(quantity - 1);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <div className="detail-container">
            <div className="images-container">
                {
                    product.images.map( (image, index) => 
                    {
                        return(
                            <div className="images-list">
                                <img key={index} className="image-item" onClick={handleChangeImage} src={`/static/media/${image}`} alt="img de zapatillas"/>
                            </div>
                        );
                    })
                }
            </div>

            <div className="bigImage-container">
                <img className="bigImage-item" src={mainImage} alt="img de zapatillas"/>
            </div>

            <div className="productDetails-container">
                <h2>{product.name}</h2>
                <ItemSize />

                <ItemCount stock={product.stock} onAdd={onAdd} onSubtract={onSubtract} quantity={quantity}/>

                <div className="button-container">
                    <Button className="btn-buy"
                        variant="contained" 
                        color="primary" 
                        disabled={product.stock === 0 || quantity <= 0 || quantity > product.stock}
                        onClick={addToCart}
                    >
                        Comprar
                    </Button>
                </div>
                <Modal
                    open={openModal}
                >
                    <div className="modal-container">
                        <div className="text-container"> 
                            <p>Se ha agregado un producto al carrito!</p>
                        </div>
                        <div className="item-container">
                            <ItemCart product={product} />
                        </div>
                        <div className="buttons-container">
                            <Link to={"/Cart"} className="link_modal" >
                                <Button color="primary" variant="contained">Ver Carrito</Button>
                            </Link>
                            <Link to={"/"} className="link_modal" >
                                <Button color="primary" variant="contained">Seguir Comprando</Button>
                            </Link>
                        </div>
                    </div>
                </Modal>
                <p>{`$${product.price}`}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
