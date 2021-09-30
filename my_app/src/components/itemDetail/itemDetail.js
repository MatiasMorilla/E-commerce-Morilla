import React, {useEffect, useState} from 'react';
/* CUSTOM STYLE */
import './itemDetail.css';
import img1 from '../../assets/productImg/zapatilla-hombre-new-balance-3.jpg';
import ItemSize from '../itemSize/itemSize';


function ItemDetail() {
    const [product, setProducts] = useState({});

    const getProducts = new Promise( (resolve) => {
        setTimeout( () =>
        {
            const mockProduct = 
            {
                id: 1,
                name: "Zapatillas New Balance 574",
                img: img1,
                price: 12.999,
                stock: 100
            };

            resolve(mockProduct);
        }, 2000);
    });

    useEffect( () => {
        getProducts.then( (res) => {
            setProducts(res);
        })
    }, []);



    return (
        <div className="detail-container">
            <div className="images-container">
                <div className="images-list">
                    <img className="image-item" src={product.img} alt="img de zapatillas"/>
                </div>
                <div className="images-list">
                    <img className="image-item" src={product.img} alt="img de zapatillas"/>
                </div>
                <div className="images-list">
                    <img className="image-item" src={product.img} alt="img de zapatillas"/>
                </div>
            </div>

            <div className="bigImage-container">
                <img className="bigImage-item" src={product.img} alt="img de zapatillas"/>
            </div>

            <div className="productDetails-container">
                <h2>{product.name}</h2>
                <ItemSize />
                <p>{`$${product.price}`}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
