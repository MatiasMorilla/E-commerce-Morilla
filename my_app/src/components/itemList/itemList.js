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

const ItemList = ({rangeValue = -1, rangeSize = 0, category = "null", searchValue = ""}) => 
{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    const {productsList} = useContext(ProductsContext)

    useEffect( () => {
        if(categoryId)
        {
            setProducts(filterByCategoryId(filterBySize(filterByPrice(productsList))));
        }
        else if(searchValue != "")
        {
            setProducts(filterBySearchValue(filterBySize(filterByPrice(productsList))));
        }
        else
        {
            setProducts(filterByCategory(filterBySize(filterByPrice(productsList))));
        }

    }, [productsList, categoryId, rangeValue, rangeSize, category ]);


    const filterByCategoryId = (array) =>{
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

    const filterByCategory = (array) =>{
        let filteredArray = [];

        if(category != "null")
        {
           filteredArray =  array.filter( product => product.category == category);
        }
        else
        {
            filteredArray = array;
        }

        return filteredArray;
    }

    const filterByPrice = (array) =>{
        let filteredArray = [];

        if(rangeValue != -1)
        {
           filteredArray =  array.filter( product => product.price >= rangeValue[0] && product.price <= rangeValue[1]);
        }
        else
        {
            filteredArray = array;
        }

        return filteredArray;
    }

    const filterBySize = (array) =>{
        let filteredArray = [];

        if(rangeSize != [0])
        {
           filteredArray =  array.filter( product => product.talle == rangeSize);
        }
        else
        {
            filteredArray = array;
        }

        return filteredArray;
    }

    const filterBySearchValue = (array) =>{
        let filteredArray = [];

        if(searchValue != "")
        {
           filteredArray =  array.filter( product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
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