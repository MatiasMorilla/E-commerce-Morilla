import { createContext, useState } from "react";
/* ASSETS */
import img1 from "../../assets/productImg/zapatillas-mujer-new-balance-1.jpg";
import img1_1 from "../../assets/productImg/zapatillas-mujer-new-balance-1-1.jpg";
import img1_2 from "../../assets/productImg/zapatillas-mujer-new-balance-1-2.jpg";
import img1_3 from "../../assets/productImg/zapatillas-mujer-new-balance-1-3.jpg";
import img2 from "../../assets/productImg/zapatillas-mujer-new-balance-2.jpg";
import img2_1 from "../../assets/productImg/zapatillas-mujer-new-balance-574-2-1.jpg";
import img2_2 from "../../assets/productImg/zapatillas-mujer-new-balance-574-2-2.jpg";
import img2_3 from "../../assets/productImg/zapatillas-mujer-new-balance-2-3.jpg";
import img3 from '../../assets/productImg/zapatilla-hombre-new-balance-3.jpg';
import img3_1 from '../../assets/productImg/zapatilla-hombre-new-balance-3-1.jpg';
import img3_2 from '../../assets/productImg/zapatilla-hombre-new-balance-3-2.jpg';
import img3_3 from '../../assets/productImg/zapatilla-hombre-new-balance-3-3.jpg';

const ProductsContext = createContext();


const ProductsProvider = ({children}) => {

    const getProducts = new Promise( (resolve) => {
        setTimeout( () =>
        {
            const mockProduct = 
            [
                {
                    id: 1,
                    category: "Mujer",
                    name: "Zapatillas New Balance 574",
                    images:
                    [
                        img1,
                        img1_1,
                        img1_2,
                        img1_3
                    ],
                    price: 12.999,
                    stock: 100,
                    quantity: 0,
                    talle: 39
                },
                {
                    id: 2,
                    category: "Mujer",
                    name: "Zapatillas New Balance 574",
                    images:
                    [
                        img2,
                        img2_1,
                        img2_2,
                        img2_3
                    ],
                    price: 12.999,
                    stock: 150,
                    quantity: 0,
                    talle: 40
                },
                {
                    id: 3,
                    category: "Hombre",
                    name: "Zapatillas New Balance 574",
                    images:
                    [
                        img3,
                        img3_1,
                        img3_2,
                        img3_3
                    ],
                    price: 12.889,
                    stock: 90,
                    quantity: 0,
                    talle: 41
                },
                {
                    id: 4,
                    category: "Hombre",
                    name: "Zapatillas New Balance 574",
                    images:
                    [
                        img3,
                        img3_1,
                        img3_2,
                        img3_3
                    ],
                    price: 12.899,
                    stock: 40,
                    quantity: 0,
                    talle: 42
                }
            ]

            resolve(mockProduct);
        }, 2000);
    });

    /* const getProductsByName = (name) =>{
        let array = [];

        getProducts.then( (res) => {
            array = res.filter( product => product.name == name);
        });

        return array;
    }
 */
    
    const data = {
        getProducts,
        /* getProductsByName */
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
}

export {ProductsProvider};
export default ProductsContext;



