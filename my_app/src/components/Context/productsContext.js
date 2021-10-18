import { createContext, useEffect, useState } from "react";
/* ASSETS */
/* import img1 from "../../assets/productImg/zapatillas-mujer-new-balance-1.jpg";
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
import img3_3 from '../../assets/productImg/zapatilla-hombre-new-balance-3-3.jpg'; */

/* FIRESTORE */
import dataBase from "../../firestore";
import { collection, getDocs } from "@firebase/firestore";

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [productsList, setProducts] = useState([]);


    const getProducts = async() => {
        // Obtenemos la coleccion de la base de datos
        const productsCollection = collection(dataBase, "products");
        // Obtenemos los documentos de nuestra coleccion
        const productSnapShot = await getDocs(productsCollection);
        // Mapeamos el array de documentos para obtener un array de solo los objetos que creamos
        const productList = productSnapShot.docs.map(doc => doc.data());

        setProducts(productList);
    }

    /* const getProductsByName = (name) =>{
        let array = [];

        getProducts.then( (res) => {
            array = res.filter( product => product.name == name);
        });

        return array;
    }
 */
    useEffect( () => {
        getProducts();
    }, []);
    
    const data = {
        productsList
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
}

export {ProductsProvider};
export default ProductsContext;



