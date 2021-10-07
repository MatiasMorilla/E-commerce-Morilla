/* CUSTOM STYLES */
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';
import { useEffect, useState } from 'react';
import img1 from '../../assets/productImg/zapatilla-hombre-new-balance-3.jpg';
import img1_1 from '../../assets/productImg/zapatilla-hombre-new-balance-3-1.jpg';
import img1_2 from '../../assets/productImg/zapatilla-hombre-new-balance-3-2.jpg';
import img1_3 from '../../assets/productImg/zapatilla-hombre-new-balance-3-3.jpg';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router';


const ItemDetailContainer = (props) => 
{
    const [product, setProduct] = useState({});
    const {productId} = useParams();

    const getProduct = new Promise( (resolve) => 
    {
        setTimeout( () => 
        {
            const mockProduct = 
            {
                id: 1,
                name: "Zapatillas New Balance 574",
                images:
                [
                    img1,
                    img1_1,
                    img1_2,
                    img1_3
                ],
                price: 13.999,
                stock: 100
            };

            resolve(mockProduct);
        }, 2000);
    })


    useEffect( () => 
    {
        getProduct.then( (res) =>
        {
            setProduct(res);
        });

    }, []);

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