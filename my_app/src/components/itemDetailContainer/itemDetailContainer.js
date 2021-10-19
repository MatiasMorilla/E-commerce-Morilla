import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
/* CUSTOM STYLES */
import './itemDetailContainer.css';
/* COMPONENTS */
import ItemDetail from '../itemDetail/itemDetail';
/* MATERIAL UI */
import { CircularProgress } from '@material-ui/core';
/* CONTEXT */
import ProductsContext from '../Context/productsContext';


const ItemDetailContainer = (props) => 
{
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const {productsList} = useContext(ProductsContext);

    const filterById = (array) => {
        // filter nos devuelve un array con un objeto por eso accedemos a su primera posicion y despues lo seteamos al product
        setProduct(array.filter( (product) => product.id == productId)[0]);
        console.log(product);
    }


    useEffect( () => 
    {
        filterById(productsList);
    }, [productsList, productId]);

    return(
        <div>
            <h1>{props.greeting}</h1>
            <div className="itemDetail-container">
                {
                    product.images == undefined ? 
                    (
                        <div className="progres-container">
                            <CircularProgress />
                        </div>
                    )
                    : 
                    (
                        <ItemDetail product={product} />
                    )
                }
            </div>

        </div>
    );
}

export default ItemDetailContainer;