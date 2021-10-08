import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
/* CUSTOM STYLE */
import './itemDetail.css';
/* COMPONETS */
import ItemSize from '../itemSize/itemSize';
import ItemCount from '../itemCount/itemCount';
/* MATERIAL UI */
import Button from "@material-ui/core/Button";
/* CONTEXT */
import CartContext from '../cartContext/cartContext';


function ItemDetail({product}) {
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [quantity, setQuantity] = useState(0);
    const {products, addProduct} = useContext(CartContext); // usar para pasar el producto al carrito

    
    const handleChangeImage = (e) => {
        setMainImage(e.target.src);
    }

    const onAdd = () => {
        quantity < product.stock && setQuantity(quantity + 1);
    }

    const onSubtract = () => {
        quantity != 0 && setQuantity(quantity - 1);
    }

    return (
        <div className="detail-container">
            <div className="images-container">
                {
                    product.images.map( (image, index) => 
                    {
                        return(
                            <div className="images-list">
                                <img key={index} className="image-item" onClick={handleChangeImage} src={image} alt="img de zapatillas"/>
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

                <Link to={"/Cart"} className="link_btn-buy" >
                    <Button className="btn-buy"
                        variant="contained" 
                        color="primary" 
                        disabled={product.stock === 0 || quantity <= 0 || quantity > product.stock}
                    >
                        Comprar
                    </Button>
                </Link>
                <p>{`$${product.price}`}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
