import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
/* CUSTON STYLES */
import './itemList.css';
/* MATERIAL UI */
import { CircularProgress } from '@material-ui/core';
/* COMPONENTS */
import Item from '../item/item';
/* CONTEXT */
import ProductsContext from '../Context/productsContext';

const ItemList = () => 
{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    const {getProducts} = useContext(ProductsContext)

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
                                <Item key={product.id} name={product.name} price={product.price} img={product.images} stock={product.stock}/>
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