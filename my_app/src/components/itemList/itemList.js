import React, {useEffect, useState} from 'react';
/* CUSTON STYLES */
import './itemList.css';

import Item from '../item/item';
import img1 from "../../assets/productImg/zapatillas-mujer-new-balance-1.jpg";
import img2 from "../../assets/productImg/zapatillas-mujer-new-balance-2.jpg";
import img3 from "../../assets/productImg/zapatilla-hombre-new-balance-3.jpg";
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const ItemList = () => 
{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    const getProducts = new Promise( (resolve) => {
        setTimeout( () =>
        {
            const mockProduct = 
            [
                {
                    id: 1,
                    category: "Mujer",
                    name: "Zapatillas New Balance 574",
                    img: img1,
                    price: 12.999,
                    stock: 100
                },
                {
                    id: 2,
                    category: "Mujer",
                    name: "Zapatillas New Balance 574",
                    img: img2,
                    price: 12.999,
                    stock: 150
                },
                {
                    id: 3,
                    category: "Hombre",
                    name: "Zapatillas New Balance 574",
                    img: img3,
                    price: 12.889,
                    stock: 90
                },
                {
                    id: 4,
                    category: "Hombre",
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
        // seteo el array de productos con un array vacio para que cuando se cambia de categoria vuelva a aparecer el loader
        setProducts([]);

        getProducts.then( (res) => {
            setProducts(filterByCategory(res));
        })

    }, [categoryId]);

    const filterByCategory = (array) =>{
        let filteredArray = [];

        if(categoryId != undefined)
        {
           filteredArray =  array.filter( product => product.category == categoryId);
        }
        else
        {
            filteredArray = array;
        }

        return filteredArray;
    }

    return (
        <div className="itemList-container">
            {
                products.length !== 0 ? 
                (
                    products.map((product) => {
                        return (
                            <Link to={`/product/${product.id}`} className="link-product">
                                <Item key={product.id} name={product.name} price={product.price} img={product.img} stock={product.stock}/>
                            </Link>
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