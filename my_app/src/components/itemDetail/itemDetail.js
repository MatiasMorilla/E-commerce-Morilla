import React, {useEffect, useState} from 'react';
/* CUSTOM STYLE */
import './itemDetail.css';
import ItemSize from '../itemSize/itemSize';


function ItemDetail({name, images, price, stock}) {

    const [mainImage, setMainImage] = useState(images[0]);

    const handleChangeImage = (e) => {
        console.log(e.target.src);
        setMainImage(e.target.src);
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
                <ItemSize stock={stock} initial={1} />
                <p>{`$${price}`}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
