import { useState } from 'react';
import { useContext } from 'react';
/* CUSTOM STYLES */
import './sliderProducts.css';
/* COMPONENTS */
import ItemList from '../itemList/itemList';
import Item from '../item/item';
/** BOOTSTRAP */
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
/* CONTEXT */
import ProductsContext from '../Context/productsContext';



const SliderProducts = () => 
{
    const {productsList} = useContext(ProductsContext)

    return(
        <div className="sliderProductsContainer">
            <div className="section-container">
                <h2>Hombres</h2>
                <ItemList category="Hombre"/>
            </div>
            <div className="section-container">
                <h2>Mujeres</h2>
                <ItemList category="Mujer"/>
            </div>
            <div className="section-container">
                <h2>Niños</h2>
                <ItemList category="Niño"/>
            </div>
        </div>
    );
}

export default SliderProducts;