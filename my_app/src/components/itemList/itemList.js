import React, {useEffect, useState} from 'react';
/* CUSTON STYLES */
import './itemList.css';

import Item from '../item/item';
import img1 from "../../assets/productImg/zapatillas-mujer-new-balance-1.jpg";
import img2 from "../../assets/productImg/zapatillas-mujer-new-balance-2.jpg";
import img3 from "../../assets/productImg/zapatilla-hombre-new-balance-3.jpg";
import { CircularProgress } from '@material-ui/core';

const ItemList = () => 
{
    const [products, setProducts] = useState([]);

    const getProducts = new Promise( (resolve) => {
        setTimeout( () =>
        {
            const mockProduct = 
            [
                {
                    id: 1,
                    name: "Zapatillas New Balance 574",
                    img: img1,
                    price: 12.999,
                    stock: 100
                },
                {
                    id: 2,
                    name: "Zapatillas New Balance 574",
                    img: img2,
                    price: 12.999,
                    stock: 150
                },
                {
                    id: 3,
                    name: "Zapatillas New Balance 574",
                    img: img3,
                    price: 12.889,
                    stock: 90
                },
                {
                    id: 4,
                    name: "Zapatillas New Balance 574",
                    img: img3,
                    price: 12.899,
                    stock: 40
                }
            ]

            resolve(mockProduct);
        }, 2000);
    });

    useEffect( () => {
        getProducts.then( (res) => {
            setProducts(res);
        })
    }, []);

    return (
        <div className="itemList-container">
            {
                products.length !== 0 ? 
                (
                    products.map((product) => {
                        return (
                            <Item key={product.id} name={product.name} price={product.price} img={product.img} stock={product.stock}/>
                        );
                    })
                )
                :
                (
                    <div className="progres-container">
                        <CircularProgress />
                    </div>
                )
            }
        </div>
    );
}

export default ItemList;