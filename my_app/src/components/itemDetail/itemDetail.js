import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
/* CUSTOM STYLE */
import './itemDetail.css';
/* COMPONETS */
import ItemSize from '../itemSize/itemSize';
import ItemCount from '../itemCount/itemCount';
/* MATERIAL UI */
import Button from "@material-ui/core/Button";


function ItemDetail({name, images, price, stock}) {

    const [mainImage, setMainImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(0);

    const handleChangeImage = (e) => {
        console.log(e.target.src);
        setMainImage(e.target.src);
    }

    const onAdd = () => {
        quantity < stock && setQuantity(quantity + 1);
    }

    const onSubtract = () => {
        quantity != 0 && setQuantity(quantity - 1);
    }

    return (
        <div className="detail-container">
            <div className="images-container">
                {
                    images.map( (image, index) => 
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
                <h2>{name}</h2>
                <ItemSize />
                <ItemCount stock={stock} onAdd={onAdd} onSubtract={onSubtract} quantity={quantity}/>
                <Link to={"/cart"} className="link_btn-buy" >
                    <Button className="btn-buy"
                        variant="contained" 
                        color="primary" 
                        disabled={stock === 0 || quantity <= 0 || quantity > stock}
                    >
                        Comprar
                    </Button>
                </Link>
                <p>{`$${price}`}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
